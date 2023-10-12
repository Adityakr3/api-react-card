import React from "react";
import {
  createXlsxFileFromJson,
  convertXlsxToJson,
  createXlsxFileFromJsonFile,
} from "../Utils/excel";
import { apiData } from "../data/apiData";
import "./ExcelFilePage.css";

export const ExcelFilePage = () => {
  const fileName = "test2";
  const xlsxFileName = "xl test file";
  return (
    <>
      <div className="main">
        <div className="Excel">
          <h2>Create Excel file from JSON</h2>
          &nbsp;&nbsp;
          <button
            onClick={() => createXlsxFileFromJson(fileName, apiData.items)}
          >
            Create Excel File
          </button>
        </div>
        <div className="Xlsx">
          <h2>Select Xlsx File And Convert To Json</h2>
          &nbsp;&nbsp;

          <input
            type="file"
            onChange={async (e) =>
              console.table(await convertXlsxToJson(e.target.files[0]))
            }
          />
        </div>
        <div className="json">
          <h2>Convert Json To Xlsx</h2>
          &nbsp;&nbsp;

          <input
            type="file"
            onChange={async (e) =>
              createXlsxFileFromJsonFile(xlsxFileName, e.target.files[0])
            }
          />
        </div>
      </div>
    </>
  );
};
