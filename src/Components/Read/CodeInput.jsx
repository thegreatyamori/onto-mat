import React, { useState, useEffect } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/sparql/sparql";

export default function Codeinput({ query, onSubmit }) {
  const initial_value =
    "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n" +
    "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n" +
    "PREFIX owl: <http://www.w3.org/2002/07/owl#>\n" +
    "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n";
  const [value, setValue] = useState(initial_value);

  const handleSubmit = () => {
    let headers = new Headers();
    headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=UTF-8"
    );
    headers.append("X-Requested-With", "XMLHttpRequest");
    headers.append("Accept", "application/sparql-results+json");

    let urlencoded = new URLSearchParams();
    urlencoded.append("query", value);

    let options = {
      headers,
      method: "POST",
      mode: "cors",
      body: urlencoded,
    };

    fetch("http://localhost:8080/fuseki/matriculacion/sparql", options)
      .then((response) => response.text())
      .then((result) => onSubmit(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (query !== "") {
      setValue(initial_value + query);
    }
  }, [query, initial_value]);

  return (
    <div className="Section-code-item">
      <h3 className="Section-title">SPARQL query</h3>
      <CodeMirror
        value={value}
        options={{
          // mode: "xml",
          theme: "material",
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
      <button className="List-item-button m-0" onClick={handleSubmit}>
        Consultar
      </button>
    </div>
  );
}
