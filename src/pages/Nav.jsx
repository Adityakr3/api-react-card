import React from "react";
import {useState} from 'react'
import "./Nav.css";
export const Nav = () => {
  const [isTilte, setIsTitle] = useState(false);

  const handleClick = () => {
    setIsTitle(!isTilte);
  };

  return (
    <div>
      <div className="navigation">
           <span onMouseEnter={handleClick} >Home</span>
           <span>About</span>
           <span>Career</span>
           <span>Login</span>
      </div>
       <div>
          <ul onMouseEnter={()=>{setIsTitle(true)}} onMouseLeave={()=>{setIsTitle(false)}} style={{ display: isTilte ? 'block' : 'none' }}>
            <li><a href="http://">Home</a></li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
       </div>
    </div>
  );
};

