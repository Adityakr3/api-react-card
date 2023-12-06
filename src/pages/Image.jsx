import React, { useEffect, useLayoutEffect, useState } from "react";
import './image.css'
export const Image = () => {
  const [data , setData] = useState()
  const [url , setUrl] = useState()
  console.log(url);
  console.log(data);
  function fetchInfo() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => res.json())
      .then((data) => {setData(data.slice(1,555));
      })
      .catch((err) => {console.log(err);});
  }
  useEffect(()=>{
    fetchInfo()
  },[])
  return<div className="main">
      {data?.map((elem,idx)=>{
        return(<img onClick={()=>setUrl(elem.thumbnailUrl)} src={elem.thumbnailUrl} alt="" srcset=""/>)
      })}
      <div className="image">
         <img src={url}/>
      </div>
  </div>;
};
