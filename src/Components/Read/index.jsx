import React, { useState } from "react";
import Codeinput from "./CodeInput";
import Querys from "./Querys";
import QueryResult from "./QueryResult";
import "../Styles.css";

export default function Read() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const newQuery = (q) => setQuery(q);
  const handleSubmit = (d) => setData(d);

  return (
    <div className="Section-center">
      <div className="Section-grid">
        <Codeinput query={query} onSubmit={handleSubmit} />
        <Querys onChange={newQuery} />
      </div>
      <QueryResult table={data} />
    </div>
  );
}
