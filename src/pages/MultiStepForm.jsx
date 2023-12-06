import React, { useState } from 'react'
import './MultiStepForm.css'
export const MultistepForm = () => {
 const [count, setCount] = useState(1)
 const onprev = () => {
    setCount(count-1);
 }
 const onNext = () => {
    setCount(count+1);
 }
  return (
    <div className='main'>
      <div className="Form">
      <h1>Welcome to the multi-step form!</h1>
       <form action="">
        {(()=>{
            switch(count){
                case 1: return(
                    <Step1/>
                )
                case 2: return(
                    <Step2 />
                )
                case 3: return(
                    <Step3 />
                )
            }
        })()}
       </form>
      <div className="set">
      <div className='point'>
           <div className={`circle ${count >=1 &&`complete`}`}></div>
           <div className={`circle ${count >=2 &&`complete`}`}></div>
           <div className={`circle ${count === 3 &&`complete`}`}></div>
        </div>
        <div className='btn'>
        <button disabled={count===1} onClick={()=>onprev()}>Previous</button>
        <button disabled={count===3} onClick={()=>onNext()}>Next</button>
        <button>Submit</button>
        </div>
      </div>
      </div>
    </div>
  )
}
const Step1 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    console.log(name);
    return (
      <div className='input'>
        <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
    );
};

const Step2 = () => {
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    return (
      <div className='input'> 
        <input
          type="text"
          placeholder="Enter your phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
          <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    );
};

const Step3 = () => {
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    return (
      <div className='input'>
        <input
          type="text"
          placeholder="Enter your Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
          <input
          type="number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
    );
};
  