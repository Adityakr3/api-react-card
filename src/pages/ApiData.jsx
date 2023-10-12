import React from 'react'
import { useState, useEffect } from "react";
import './ApiData.css'

export function ApiData() {
    const [ dropData , setDropData] = useState(5)
    const [data,setData] = useState();
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(dropData);
    function fetchInfo() {
       fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    function previousPage(){
      setEnd(start)
      setStart(start-dropData)
    }
    // 0
    function nextPage(){
      setStart(end)
      setEnd(end + dropData)
    }
  
    useEffect(() => {
      fetchInfo();
    },[dropData]);
    
    return (
      <div className="App">
        <table className='table'border={1} >
          <thead>
            <th>NO.</th>
            <th>User Id</th>
            <th>Title</th>
            <th>completed</th>
          </thead>
          <tbody>
            {
              data?.slice(start,end).map((elem,idx)=>{
              return(<tr>
                  <td>{elem.id}</td>
                  <td>{elem.userId}</td>
                  <td>{elem.title}</td>
                  <td>{String(elem.completed)}</td>
                </tr>)
  })}
          </tbody>
        </table>
        <div className="btn-box">
          <button disabled={start === 0} onClick={previousPage} className="btn-left" >Left</button>
          <select onChange={(e)=> setDropData(Number(e.target.value))} className="option">
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <button disabled={end >= 200} onClick={nextPage} className="btn-right">Right</button>
        </div>
      </div>
    );
  }