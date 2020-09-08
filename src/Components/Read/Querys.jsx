import React from "react";

export default function Querys({ onChange }) {
  const query_1 = () => {
    onChange(
      "PREFIX mat: <http://www.semanticweb.org/thegr/ontologies/2020/7/matriculacion#>\n\n" +
        "SELECT ?nombre ?carrera\n" +
        "WHERE {\n" +
        "  ?dc mat:aCargoDe ?c.\n" +
        "  ?dc mat:nombre ?nombre.\n" +
        "  ?c mat:nombre ?carrera.\n" +
        "  FILTER regex(?carrera, \"Ing\")\n" +
        "}"
    );
  };
  const query_2 = () => {
    onChange(
      "PREFIX mat: <http://www.semanticweb.org/thegr/ontologies/2020/7/matriculacion#>\n\n" +
        "SELECT ?nrc ?materia\n" +
        "WHERE {\n" +
        "  ?m mat:perteneceAUna ?c.\n" +
        "  ?m mat:nrc ?nrc.\n" +
        "  ?m mat:nombre ?materia.\n" +
        '  ?c mat:nombre "Ingenieria de Software"^^xsd:string.\n' +
        "}"
    );
  };
  const query_3 = () => {
    onChange(
      "PREFIX mat: <http://www.semanticweb.org/thegr/ontologies/2020/7/matriculacion#>\n\n" +
        "SELECT ?docente\n" +
        "WHERE {\n" +
        "  ?d mat:imparteMuchas ?m.\n" +
        "  ?d mat:nombre ?docente.\n" +
        '  ?m mat:nombre "Inteligencia artificial 1"^^xsd:string.\n' +
        "}"
    );
  };
  const query_4 = () => {
    onChange(
      "PREFIX mat: <http://www.semanticweb.org/thegr/ontologies/2020/7/matriculacion#>\n\n" +
        "SELECT ?materia\n" +
        "WHERE {\n" +
        "  ?m mat:perteneceAUna ?c.\n" +
        "  ?m mat:nombre ?materia.\n" +
        '  ?c mat:nombre "Ingenieria de Software"^^xsd:string.\n' +
        "}"
    );
  };
  const query_5 = () => {
    onChange(
      "PREFIX mat: <http://www.semanticweb.org/thegr/ontologies/2020/7/matriculacion#>\n\n" +
        "SELECT ?estudiante\n" +
        "WHERE {\n" +
        "  ?es mat:realizaLa ?m.\n" +
        "  ?m mat:seRealizaEnUn ?p.\n" +
        "  ?es mat:nombre ?estudiante.\n" +
        '  ?p mat:nombre "PREGRADO S-I MAY20 - SEP20"^^xsd:string.\n' +
        "}"
    );
  };

  return (
    <div className="Section-list-item">
      <h3 className="Section-title">Querys</h3>
      <ul className="List-items">
        <li>
          <button className="List-item-button" onClick={() => query_1()}>
            ¿Cómo se llama el director de cada carrera?
          </button>
        </li>
        <li>
          <button className="List-item-button" onClick={() => query_2()}>
            Listar los NRC de una carrera en específico
          </button>
        </li>
        <li>
          <button className="List-item-button" onClick={() => query_3()}>
            El nombre del docente de una materia
          </button>
        </li>
        <li>
          <button className="List-item-button" onClick={() => query_4()}>
            Materias por carrera
          </button>
        </li>
        <li>
          <button className="List-item-button" onClick={() => query_5()}>
            En qué periodo está matriculado un estudiante
          </button>
        </li>
      </ul>
    </div>
  );
}
