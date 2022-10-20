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
    if (lista.length > 0) {
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
        <label
          class="block mb-2 text-sm font-medium text-gray-900"
          htmlFor="upload"
        >
          Upload file
        </label>
        <input
          class="block w-9/12 mx-auto md:w-1/2 md:mx-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none mb-4"
          id="upload"
          type="file"
          name="upload"
          onChange={readUploadFile}
        />

        <p
          className=" w-1/4 sm:w-1/6 py-2 text-gray-400 hover:text-gray-100 mx-auto cursor-pointer rounded bg-teal-800 hover:bg-teal-600"
          onClick={() => handleSubmit()}
        >
          Crear Lista
        </p>
      </form>
    </div>
  );
};

export default CrearLista;
