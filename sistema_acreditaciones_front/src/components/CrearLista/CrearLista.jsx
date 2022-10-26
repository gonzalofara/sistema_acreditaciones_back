import React, { useState } from "react";
import * as xlsx from "xlsx";
import { createList } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { BsFileEarmarkPlusFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";

const CrearLista = (props) => {
  const id = props.match.params.id;
  const tk = sessionStorage.getItem("token");

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
          return { ...i, inv_id: parseInt(i.id) };
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

  if (!tk) {
    return <Error />;
  } else {
    return (
      <div>
        <section>
          <SideBar />

          <Aside id={id} />
          <div className="md:ml-60 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-semibold sm:text-4xl text-center md:text-start grid">
              Crear Lista
              <span className="text-lg font-light text-gray-600">
                Carga de archivo
              </span>
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 text-left">
              <div className="relative mb-6">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-400 focus:text-gray-900">
                  <BsFileEarmarkPlusFill size={20} />
                </div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-50 block w-full pl-10 p-2.5 py-4"
                  id="upload"
                  type="file"
                  name="upload"
                  onChange={readUploadFile}
                />
              </div>
              <p
                className={
                  lista?.length > 0
                    ? "flex gap-1 items-center justify-center bg-teal-600 w-[120px] cursor-pointer text-gray-100 py-2 px-2 rounded-md hover:bg-teal-500 hover:text-gray-50 text-center"
                    : "flex gap-1 items-center justify-center bg-teal-600 opacity-50 w-[120px] pl-2 text-gray-300 py-2 rounded-md text-center"
                }
                onClick={() => lista?.length > 0 && handleSubmit()}
              >
                Crear lista
                <span>
                  <FaFileUpload size={20} />
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default CrearLista;
