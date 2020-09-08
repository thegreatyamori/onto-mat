import React, { useState, useEffect } from "react";
import "../Styles.css";

const toType = (obj) => {
  return {}.toString
    .call(obj)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase();
};

const isEmpty = (el) => {
  switch (toType(el)) {
    case "object":
      return Object.getOwnPropertyNames(el).length === 0;
    case "array":
    case "string":
      return el.length === 0;
    default:
      // aún no funciona para más tipos
      break;
  }
};

function Table({ data }) {
  const {
    head: { vars },
    results: { bindings },
  } = data;
  const head = vars.map((item) => <th key={item}>{item}</th>);
  const td = (item) => {
    return vars.map((name, index) => {
      return <td key={`${item[name].value}_${index}`}>{item[name].value}</td>;
    });
  };
  const body = bindings.map((item, index) => (
    <tr key={`${item}_${index}`}>{td(item)}</tr>
  ));

  return (
    <table className="Table">
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

export default function QueryResult({ table }) {
  const [_table, setTable] = useState(
    <>
      <span className="Section-title">
        <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
          📄
        </span>
        No hay resultados
      </span>
    </>
  );

  useEffect(() => {
    if (!isEmpty(table)) {
      setTable(<Table data={table} />);
    }
  }, [table]);

  return (
    <div className="Section-table">
      <h3 className="Section-title">Query Result</h3>
      {_table}
    </div>
  );
}
