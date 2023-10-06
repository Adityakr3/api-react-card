import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";
export const InfiniteScroll = () => {
  const [offset, setOffSet] = useState(0);
  const [isLoading , setLoading] = useState(false)
  const limit = 10;
  const [data, setData] = useState([]);
  function fetchInfo() {
    setLoading(true)
    fetch(
      `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((newData) => {
        setData([...data , ...newData.users]);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }
  useEffect(() => {
    fetchInfo();
  }, [offset]);

  const handlescroll = (e) => {
    const { clientHeight, scrollTop, scrollHeight } = e.target;
    if (clientHeight + scrollTop >= scrollHeight) {
      setOffSet(offset + 10);
    }
  };

  return (
    <div className="Main" onScroll={handlescroll}>
      {data?.map((elem, idx) => {
        return (
          <div className="cards">
            <div className="card">
              <div className="Name">
                <h2>First Name: {elem.first_name}</h2>
                <h2>Last Name: {elem.last_name}</h2>
              </div>
              <h3>Email: {elem.email}</h3>
              <h3>Job: {elem.job}</h3>
            </div>
          </div>
        );
      })}
      {
        isLoading && <div className="loader" >
            <h1>loading ...</h1>
        </div>
      }
    </div>
  );
};
