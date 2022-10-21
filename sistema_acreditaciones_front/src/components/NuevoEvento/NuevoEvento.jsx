import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postEvents } from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
const NuevoEvento = () => {
  const dispatch = useDispatch();
  //Estados
  const [evento, setEvento] = useState({
    nombre: "",
    cliente: "",
    fechaInicio: "",
    fechaFin: "",
    direccion: "",
  });
  //-------------------------
  const handleChange = (e) => {
    setEvento({
      ...evento,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log("ESTOY EN EL HANDLE");
    e.preventDefault();
    dispatch(postEvents(evento));
  };
  return (
    <>
      <SideBar />
      <Aside />
      <div className="grid py-4 md:ml-44">
        <div className="w-9/12 mx-auto md:text-left mb-4">
          <h1 className="text-5xl font-semibold">Crear evento</h1>
          <h4 className="grid text-xs">
            <span className="text-teal-600 text-base font-semibold">Datos</span>{" "}
            Completa los campos con la informacion del evento
          </h4>
        </div>

        <form className="grid w-9/12 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-2">
            <h3 className="text-left font-semibold text-gray-800 text-sm">
              CLIENTE <span className="font-medium text-gray-500">*</span>
            </h3>
            <input
              className="bg-gray-50 w-full py-3 rounded-xl px-2"
              type="text"
              name="cliente"
              value={evento.cliente}
              placeholder="Empresa"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-left font-semibold text-gray-800 text-sm">
              NOMBRE DEL EVENTO{" "}
              <span className="font-medium text-gray-500">*</span>
            </h3>
            <input
              className="bg-gray-50 w-full py-3 rounded-xl px-2"
              type="text"
              name="nombre"
              value={evento.nombre}
              placeholder="Nombre "
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-left font-semibold text-gray-800 text-sm uppercase">
              Fecha de inicio{" "}
              <span className="font-medium text-gray-500">*</span>
            </h3>
            <input
              className="bg-gray-50 w-full py-3 rounded-xl px-2"
              type="date"
              name="fechaInicio"
              value={evento.fechaInicio}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-left font-semibold text-gray-800 text-sm uppercase">
              Fecha de cierre
            </h3>
            <input
              className="bg-gray-50 w-full py-3 rounded-xl px-2"
              type="date"
              name="fechaFin"
              value={evento.fechaFin}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <h3 className="text-left font-semibold text-gray-800 text-sm uppercase">
              Direccion
            </h3>
            <input
              className="bg-gray-50 w-full py-3 rounded-xl px-2"
              type="text"
              name="direccion"
              value={evento.dirreccion}
              onChange={handleChange}
              placeholder="Direccion"
            />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button className="bg-teal-500 mt-2 px-6 text-gray-200 hover:bg-teal-600 hover:text-gray-50">
              Crear
            </button>
            <Link to="/eventos">
              <p className="bg-transparent mt-2 text-gray-600 hover:text-gray-700 hover:underline cursor-pointer">
                Cancelar
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default NuevoEvento;
