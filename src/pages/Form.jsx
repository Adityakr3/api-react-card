import React from "react";
import { useState } from "react";

export const Form = () => {
  const [mobile, setMoblie] = useState("");
  const [mobileError, setMoblieError] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const OnHanddleChange = (e) => {
      e.preventDefault();
      console.log(mobile,password)
  }

  const handdleMobileInput = (e) => {
     let value = e.target.value;
     setMoblie(value);
     if(value.length < 12){
        setMoblieError(" * it's invaild mobile Number")
     }else{
        setMoblieError("")
     }
  }
  const handdlePassWordInput = (e) => {
    let value = e.target.value;
    setPassWord(value);
    if(value.length < 12){
        setpasswordError(" * it's invaild password")
    }else{
        setpasswordError("")
    }
 }

  return (
    <div>
      <h1>React Form</h1>
    <form onSubmit={OnHanddleChange} action="">
    <table>
        <tbody>
          <tr style={{padding:"19px"}}>
            <td><label htmlFor="mobile"> Mobile: </label></td>
            <td><input onChange={handdleMobileInput} type="number" name="mobile" value={mobile}/></td>
            <td style={{color:"whitesmoke"}}>{mobileError}</td>
          </tr>
           <tr>...</tr>
          <tr style={{padding:"19px"}}>
            <td><label htmlFor="password"> password: </label></td>
            <td><input onChange={handdlePassWordInput} type="password" name="password" value={password}/></td>
            <td style={{color:"whitesmoke"}}>{passwordError}</td>
          </tr>
          <tr>...</tr>
          <button style={{border:"2px solid white"}}>Submit</button>
        </tbody>
      </table>
    </form>
    </div>
  );
};
