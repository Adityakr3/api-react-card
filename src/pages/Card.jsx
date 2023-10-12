import React, { useRef, useState } from "react";
import "./Card.css";
export const Card = () => {
  const ref = useRef(null);
  //   const data = [
  //     {
  //       cardNumber: "",
  //       cvv: "",
  //       date: "",
  //     },
  //   ];
  //   const [cardData, setCardData] = useState(data);
  //   console.log(cardData);

  //   const handleFormChange = (e) => {
  //     const { name, value } = e.target;
  //     setCardData((data) => ({
  //       ...data,
  //       [name]: value,
  //     }));
  //   };
  //   const submitHaddle = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <div className="main">
      <form className="formData">
        <div ref={ref} className="input">
          <label htmlFor="card">Card Number:</label>
          <input
            id="card"
            type="number"
            name="cardNumber"
            onChange={(e) => {
              if(e.target.value.length > 3) {
                 ref.current.children[2].focus();
              }
            }}
            required
          />
          <input
            id="card"
            type="number"
            name="cardNumber"
            onChange={(e) => {
                if (e.target.value.length > 3) {
                    ref.current.children[3].focus();
                }
              }}
            required
          />
          <input
            id="card"
            type="number"
            name="cardNumber"
            maxLength="4"
            onChange={(e) => {
                if (e.target.value.length > 3) {
                    ref.current.children[4].focus();
                }
              }}
            required
          />
          <input
            id="card"
            type="number"
            name="cardNumber"
            max="9999"
            maxLength="3"
            onChange={(e) => {
                if (e.target.value.length > 4) {
                   alert("your are typing  more than 16 value")
                }
              }}
            required
          />
        </div>
        <label htmlFor="cvv">Card Cvv:</label>
        <input
          id="cvv"
          type="numbe"
          name="cvv"
          minLength="4"
          //   value={cardData.cvv}
          required
        />
        <label htmlFor="dob">Expiry Date:</label>
        <input
          //   onChange={handleFormChange}
          id="dob"
          type="date"
          name="date"
          //   value={cardData.date}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
