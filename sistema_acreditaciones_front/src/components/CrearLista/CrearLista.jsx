import React, { useState } from "react";
import * as xlsx from "xlsx";
import { createList } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
const CrearLista = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const dispatch = useDispatch();
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
      console.log("LA LISTA", lista);
      if (lista !== [] && typeof lista[0].id === "number") {
        console.log(lista);
        dispatch(createList(id, lista));
        reader.readAsArrayBuffer(e.target.files[0]);
      }
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
      </form>
    </div>
  );
};

export default CrearLista;
