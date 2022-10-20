import React, { useState } from "react";
import * as xlsx from "xlsx";
import { createList } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const CrearLista = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const dispatch = useDispatch();
  const history = useHistory();
  const [lista, setLista] = useState([]);
  const readUploadFile = (e) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        let json = xlsx.utils.sheet_to_json(worksheet);
        json = json.map((i) => {
          return { ...i, id: parseInt(i.id) };
        });
        console.log(json);
        json.length !== 0 && setLista(json);
      };

      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  console.log("LA LISTA", lista);
  const handleSubmit = () => {
    if (lista !== []) {
      dispatch(createList(id, lista));
      setLista([]);
      alert("Lista creada correctamente");
      history.push("/eventos");
    }
  };
  return (
    <div>
      <h1>Crear Lista</h1>

      <form>
        <label htmlFor="upload">Upload File</label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
        <button className="bg-indigo-600" onClick={handleSubmit}>
          Crear Lista
        </button>
      </form>
    </div>
  );
};

export default CrearLista;
