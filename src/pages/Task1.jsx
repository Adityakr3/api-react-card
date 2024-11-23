import React from "react";
import { useState } from "react";
export const Task1 = () => {
  
  const [count, setCount] = useState(0);
  const Inc = () => {
    setCount(count + 1);
  };

  const Dec = () => {
    setCount(count - 1);
  };

  function CheckNum() {
    if (count % 2 == 0) {
      return <p>Count is even</p>;
    } else {
      return <p>Count is Odd</p>;
    }
  }

  function IsPrime() {
    if (count <= 1) return false;
    else if (count == 2) return true;
    else if (count % 2 == 0) return false;
    for (let i = 3; i < Math.trunc(count / 2); i++) {
      if (count % i == 0) return false;
    }
    return true;
  }

  return (
    <>
      <div class="flex gap-12">
        <button
          onClick={Inc}
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded"
        >
          Add
        </button>
        <h1>{count}</h1>
        <button
          onClick={Dec}
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-4 px-8 rounded"
        >
          sub
        </button>
      </div>
      <div>
        {count < 0 ? (
          <p>count is Negtaive</p>
        ) : count == 0 ? (
          <p>count is Zero</p>
        ) : (
          <p>count is Postive</p>
        )}
        {CheckNum()}

        {IsPrime() && <p>Count is Prime</p>}
      </div>
    </>
  );
};
