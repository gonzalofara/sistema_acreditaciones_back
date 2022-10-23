import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvitado } from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaUsers, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Invitado = (props) => {
  const id = props.match.params.id;

  const dispatch = useDispatch();
  const invitado = useSelector((state) => state.invitado);
  const evento = useSelector((state) => state.evento);
  console.log(evento);

  useEffect(() => {
    dispatch(getInvitado(id));
  }, [dispatch]);

  return (
    <section>
      <SideBar />

      <Aside id={id} />
      <div className="md:ml-60 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold sm:text-4xl text-center md:text-start grid">
          <div>
            <span className="uppercase">{invitado?.last_name}</span>,{" "}
            <span className="capitalize">{invitado?.first_name}</span>
          </div>
          <span className="text-lg font-light text-gray-600 uppercase">
            {evento?.nombre}
          </span>
        </h2>

        <div>
          <ul className="mt-12 py-4">
            <li className="relative grid mb-4 text-left">
              <span className="text-gray-400 uppercase text-xs">Lista</span>
              <span className="text-gray-700 uppercase">{evento?.nombre}</span>
            </li>
            <li className="relative grid mb-4 text-left">
              <span className="text-gray-400 uppercase text-xs">Id</span>
              <span className="text-gray-700 uppercase">
                {invitado?.inv_id}
              </span>
            </li>
            <li className="relative grid mb-4 text-left">
              <span className="text-gray-400 uppercase text-xs">Nombre</span>
              <span className="text-gray-700 uppercase">
                {invitado?.first_name}
              </span>
            </li>
            <li className="relative grid mb-4 text-left">
              <span className="text-gray-400 uppercase text-xs">Apellido</span>
              <span className="text-gray-700 uppercase">
                {invitado?.last_name}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Invitado;
