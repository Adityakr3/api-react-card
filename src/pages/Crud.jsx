import React from "react";
import { useState } from "react";
export const Crud = () => {
    const [circles, setCircles] = useState([]);
    const [circleCount, setCirclesCount] = useState(0);
    const [selectedCircle, setSelectedCircle] = useState("blue"); 

    const countCircle = () => {
        setCirclesCount(circleCount+1)// 1
    
//
//  in useState no matter how many times i write usestate func it's totally depend on how many times it's changes in 
// usestate when state update with another value then re render otherwise it's not change in cahnge value

        // setCirclesCount((prev)=>{ // 1+1
        //     return prev+1
        // })
        // setCirclesCount((prev)=>{ // 2+1
        //     return prev+1.    // 3
        // })
    }


    const createCircle = () => {
        setCircles([...circles, { id: circles.length }]);
    };

    const onhanddleClick = () =>{
        countCircle()
        createCircle()
    }

    const onCircleClick = (id) => {
        console.log(id)
        setCircles(circles.map(circle => 
            circle.id == id ? { ...circle} : circle,
        ));
   
    }
  return (
    <React.Fragment>
        {console.log("render")}
      <div className="mt-8 w-full flex justify-evenly px-[425px] gap-44">
        <button onClick={onhanddleClick} class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-14 rounded">
          Create Cirle
        </button>
        <button  class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-14 rounded">
           Delete Cirle
        </button>
      </div>
      <div className="flex justify-center center gap-24">
         <h1 className="text-2xl">Total no. of Cicles Created : {circleCount}</h1>
         <h1 className="text-2xl">No. of Selected Cicles: {circleCount}</h1>
      </div>
      <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {circles.map((circle) => (
                        <div
                            key={circle.id}
                            onClick={() =>{
                                onCircleClick(circle.id)
                            }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor:"blue",
                                margin: '10px'
                            }}
                        />
                    ))}
                </div>

        </div>
    </React.Fragment>
  );
};








// import React from "react";
// import { useState } from "react";

// export const Crud = () => {
//     const [circles, setCircles] = useState([]);
//     const [circleCount, setCirclesCount] = useState(0);

//     const countCircle = () => {
//         setCirclesCount(circleCount + 1);
//     }

//     const createCircle = () => {
//         // Add a new circle with a default color
//         setCircles([...circles, { id: circles.length, color: 'blue' }]);
//     };

//     const onCreateClick = () => {
//         countCircle();
//         createCircle();
//     }

//     const onCircleClick = (id) => {
//         // Update the color of the clicked circle
//         setCircles(circles.map(circle => 
//             circle.id === id ? { ...circle, color: circle.color === 'blue' ? 'red' : 'blue' } : circle
//         ));
//     }

//     return (
//         <div className="Main">
//             <div className="mt-8 w-full flex justify-evenly px-[425px]">
//                 <button onClick={onCreateClick} className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-14 rounded">
//                     Create Circle
//                 </button>
//             </div>
//             <div className="flex justify-center center">
//                 <h1 className="text-2xl">Total no. of Circles Created : {circleCount}</h1>
//             </div>
//             <div>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
//                     {circles.map((circle) => (
//                         <div
//                             key={circle.id}
//                             onClick={() => onCircleClick(circle.id)} // Handle circle click
//                             style={{
//                                 width: '120px',
//                                 height: '120px',
//                                 backgroundColor: circle.color, // Use the color from the circle state
//                                 borderRadius: '50%',
//                                 margin: '10px',
//                                 cursor: 'pointer' // Change cursor to pointer
//                             }}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };