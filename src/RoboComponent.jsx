import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
function RoboDisplay() {
  const [searchItem, setSearchItem] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="container">
        {data
          .filter((val) => {
            if (searchItem.length <= 3) {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return val;
            }
            return false;
          })
          .map((item) => (
            <div className="card">
              <img alt="robots" src={`https://robohash.org/${item.id}`} />
              <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
}

export default RoboDisplay;
