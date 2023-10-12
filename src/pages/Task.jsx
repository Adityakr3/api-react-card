import React, { useState } from "react";

export const Task = () => {
  const [date,setDate] = useState(0);
  const formData = {firstName:"", middleName:"",lastName:"",dateOfBirth:"",class:"",course:""}
  const [data , setData] = useState(formData)

  const onSubmitData = (e) => { 
    const{value,name} = e.target;
    setData({...data , [name]:value})
    console.log(data);
  }

  const onhandleSubmit =(e)=>{
     e.preventDeafult()
  }

  const dateOfBirthValid = (e) => {
    var today = new Date().getFullYear();
    console.log(typeof today);
    setDate(e.target.value)
    const year = Number(date.split('-')[0]);
    const age = today - year
    console.log(age);
  }
  return (
    <div>
      <form onSubmit={onhandleSubmit} action=" ">
        <label htmlFor="fame">First Name:</label>
        <input onChange={onSubmitData} id="fame" type="text" value={data.firstName} required />
        <br />
        <br />
        <label htmlFor="mname"> Middle Name:</label>
        <input id="mame" type="text" />
        <br />
        <br />
        <label htmlFor="lname"> Last Name:</label>
        <input id="lame" type="text" required />
        <br /> <br />
        <label htmlFor="date">D.O.B:</label>
        <input onChange={dateOfBirthValid} type="date" />
        <br />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
