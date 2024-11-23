import React from "react";
import { useState } from "react";

export const BackgroundChange = () => {
    const [color , setColor] = useState("orange")

    function RamdomColor(){
       let a = Math.trunc( Math.random()*255)
       let b = Math.trunc( Math.random()*255)
       let c = Math.trunc( Math.random()*255)
       setColor(`rgb(${a} ,${b}, ${c})`)
    }

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"18px"}}>
      <div>
        <div style={{ width: "325px", height: "325px", backgroundColor:[color] }}>
        </div>
        <div
          className="btn"
          style={{ width: "125px", height: "95px", gap: "12px" }}
        >
          <button onClick={()=>{setColor("blue")}} >Blue</button>
          <button onClick={()=>{setColor("red")}} >red</button>
          <button onClick={()=>{setColor("yellow")}} >Yellow</button>
          <button onClick={RamdomColor} style={{paddingInline:"18px"}}>Ramdom Color</button>
        </div>
      </div>
    </div>
  );
};

// import React from "react";
// import { useState } from "react";
// export const Crud = () => {
//     const [circles, setCircles] = useState([]);
//     const [circleCount, setCirclesCount] = useState(0);
//     const [selectedCircleId, setSelectedCircleId] = useState(null); 

//     const countCircle = () => {
//         setCirclesCount(circleCount+1)
//     }

//     const createCircle = () => {
//         setCircles([...circles, { id: circles.length }]);
//     };

//     const onhanddleClick = () =>{
//         countCircle()
//         createCircle()
//     }
//   return (
//     <div className="Main">
//       <div className="mt-8 w-full flex justify-evenly px-[425px]">
//         <button onClick={onhanddleClick} class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-14 rounded">
//           Create Cirle
//         </button>
//         <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-14 rounded">
//            Delete Cirle
//         </button>
//       </div>
//       <div className="flex justify-center center">
//          <h1 className="text-2xl">Total no. of Cicles Created : {circleCount}</h1>
//       </div>
//       <div>
//             <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
//                 {circles.map((circle) => (
//                     <div
//                         key={circle.id}
//                         style={{
//                             width: '120px',
//                             height: '120px',
//                             backgroundColor: 'blue',
//                             borderRadius: '50%',
//                             margin: '10px'
//                         }}
//                     />
//                 ))}
//             </div>
//         </div>
//     </div>
//   );
// };
