import React from 'react'

export const Throttle = () => {
    const throttle = (callback , delay) => {
    let previousTime = new Date().getTime();
  return (...args) => {
    let currentTime = new Date().getTime();
    if(currentTime - previousTime > delay){
        callback(...args);
        previousTime = currentTime;
    }
  }
}
  const debounce = (callback , delay) => {
    let timeout ;
    return(...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(()=>{
        callback(...args);
      },delay)
    }
  }
return(
 <>
    <button onClick={throttle(()=>{
       console.log('throttle');
    },2222)}>throttle</button>

    <button onClick={debounce(()=>{
        console.log('debounce');
    },2342)}>debounce</button>
 </>
 )
}
