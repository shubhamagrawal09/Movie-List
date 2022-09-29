import React, { useEffect, useState } from "react";
import MovieData from "./data.json";
import "./App.css";

const MovieTable = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toString().toLowerCase() > b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toString().toLowerCase() < b[col].toString().toLowerCase()
          ? 1
          : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  useEffect(() => {
    setData(MovieData);
  }, []);

  return (
    <div className="container">
      <caption>Movie List</caption>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th onClick={() => sorting("IMDB_Rating")}>
              Movie Name
              {order === "ASC" ? (
                <i className="bi bi-sort-alpha-down-alt" />
              ) : (
                <i className="bi bi-sort-alpha-up" />
              )}
            </th>
            <th>Imdb Rating</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((list) => {
              return (
                <tr key={list.id}>
                  <td>{list.Title}</td>
                  <td>{list.IMDB_Rating}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
