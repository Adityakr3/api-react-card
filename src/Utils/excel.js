import FileSaver from "file-saver";
import { read, utils, write } from "xlsx";

export const createXlsxFileFromJson = (fileName, fileData = []) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = utils.json_to_sheet(fileData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
}

export const convertXlsxToJson = (file) => new Promise((resolve)=> {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        resolve(json);
    }
    reader.readAsArrayBuffer(file);
})

export const createXlsxFileFromJsonFile = (xlsxFileName, file) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
        const data = JSON.parse(e.target.result);
        createXlsxFileFromJson(xlsxFileName, data);
    }
    reader.readAsText(file);
}