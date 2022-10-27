import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postEvents } from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
import Error from "../Error/Error";
import Swal from "sweetalert2";
import axios from "axios";

const NuevoInvitado = (props) => {
  const id = props.match.params.id;
  const tk = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  //Estados
  const [invitado, setInvitado] = useState({
    id: 0,
    list_id: "",
    list_name: "",
    first_name: "",
    last_name: "",
    company: "",
    title: "",
    email: "",
    phone: "",
    dni: "",
    path: "",
    properties: "",
  });
  //-------------------------
  const handleChange = (e) => {
    setInvitado({
      ...invitado,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (invitado?.first_name && invitado?.last_name) {
      Swal.fire({
        title: "¿Agregar invitado?",
        showCancelButton: true,
        confirmButtonText: "Agregar",
        cancelButtonText: `Cancelar`,
        color: "#8c8a8a",
        confirmButtonColor: "#0d9488",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`http://localhost:3001/invitados/${id}`, [
              [invitado],
              { listName: invitado?.list_name },
            ])
            .then((res) => {
              Swal.fire({
                title: "Invitado agregado correctamente",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0d9488",
                icon: "success",
              }).then((result) => {
                history.push("/eventos/" + id);
                setInvitado({
                  id: 0,
                  list_id: "",
                  list_name: "",
                  first_name: "",
                  last_name: "",
                  company: "",
                  title: "",
                  email: "",
                  phone: "",
                  dni: "",
                  path: "",
                  properties: "",
                });
              });
            })
            .catch(function (error) {
              Swal.fire({
                title: "Ha ocurrido un error. Intente nuevamente.",
                confirmButtonText: "Ok",
                confirmButtonColor: "#e11d48",
                icon: "error",
              }).then((result) => {
                if (result.isConfirmed) {
                  setInvitado({
                    id: 0,
                    list_id: "",
                    list_name: "",
                    first_name: "",
                    last_name: "",
                    company: "",
                    title: "",
                    email: "",
                    phone: "",
                    dni: "",
                    path: "",
                    properties: "",
                  });
                }
                setInvitado({
                  id: 0,
                  list_id: "",
                  list_name: "",
                  first_name: "",
                  last_name: "",
                  company: "",
                  title: "",
                  email: "",
                  phone: "",
                  dni: "",
                  path: "",
                  properties: "",
                });
              });
            });
        }
      });
    }
  };
  if (!tk) {
    return <Error />;
  } else {
    return (
      <>
        <SideBar />
        <Aside nuevoInv={id} />
        <div className="grid py-4 md:ml-44">
          <div className="w-9/12 mx-auto md:text-left mb-4">
            <h1 className="text-5xl font-semibold">Nuevo Invitado</h1>
            <h4 className="grid text-xs">
              <span className="text-teal-600 text-base font-semibold">
                Datos
              </span>{" "}
              Completa los campos con la informacion del invitado
            </h4>
          </div>

          <form className="grid w-9/12 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-2">
              <h3 className="text-left font-semibold text-gray-800 text-sm">
                NOMBRE <span className="font-medium text-gray-500">*</span>
              </h3>
              <input
                className="bg-gray-50 w-full py-3 rounded-xl px-2"
                type="text"
                name="first_name"
                value={invitado.first_name}
                placeholder="Nombre"
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <h3 className="text-left font-semibold text-gray-800 text-sm">
                APELLIDO <span className="font-medium text-gray-500">*</span>
              </h3>
              <input
                className="bg-gray-50 w-full py-3 rounded-xl px-2"
                type="text"
                name="last_name"
                value={invitado.last_name}
                placeholder="Apellido "
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <h3 className="text-left font-semibold text-gray-800 text-sm uppercase">
                EMPRESA <span className="font-medium text-gray-500">*</span>
              </h3>
              <input
                type="text"
                className="bg-gray-50 w-full py-3 rounded-xl px-2"
                name="company"
                placeholder="Nombre de la empresa"
                value={invitado.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <h3 className="text-left font-semibold text-gray-800 text-sm uppercase">
                ID <span className="font-medium text-gray-500">*</span>
              </h3>
              <input
                type="number"
                className="bg-gray-50 w-full py-3 rounded-xl px-2"
                name="id"
                placeholder="ID del Invitado"
                value={invitado.id}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-4 justify-start items-center">
              <button
                className={
                  invitado?.first_name &&
                  invitado?.last_name &&
                  invitado?.company &&
                  invitado?.id
                    ? "bg-teal-500 mt-2 px-6 text-gray-200 hover:bg-teal-600 hover:text-gray-50"
                    : "bg-teal-700 mt-2 px-6 text-gray-200 opacity-50"
                }
                disabled={
                  invitado?.first_name &&
                  invitado?.last_name &&
                  invitado?.company &&
                  invitado?.id
                    ? false
                    : true
                }
              >
                Crear
              </button>
              <Link to={"/eventos/" + id}>
                <p className="bg-transparent mt-2 text-gray-600 hover:text-gray-700 hover:underline cursor-pointer">
                  Cancelar
                </p>
              </Link>
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default NuevoInvitado;
