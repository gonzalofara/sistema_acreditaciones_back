import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdListBox, IoMdArrowRoundBack } from "react-icons/io";
const Aside = ({ id, event, invitados }) => {
  return (
    <div className="w-60 invisible md:visible md:h-full md:bg-gray-100 md:px-1 absolute">
      <ul className="relative py-4">
        <li
          className={event?.nombre ? "relative grid text-left mt-6" : "hidden"}
        >
          <span className="px-6 text-gray-400 uppercase text-sm">Listas</span>
          {event?.Invitados?.length ? (
            <Link to={`/eventos/${id}/invitados`}>
              <div className="flex gap-2 items-center text-sm px-6 h-10 overflow-hidden text-teal-500 text-ellipsis whitespace-nowrap rounded hover:text-teal-400 hover:bg-gray-200 transition duration-300 ease-in-out">
                {event?.Invitados?.length > 0 && <IoMdListBox size={22} />}
                <span className="mt-1 text-teal-600 hover:text-gray-400">
                  {event?.Invitados?.length > 0
                    ? event?.Invitados?.length
                    : null}
                </span>
              </div>
            </Link>
          ) : null}
          <Link to={`/eventos/${id}/listas/crear`}>
            <div className="flex gap-px items-center text-sm px-6 h-10 overflow-hidden text-teal-500 text-ellipsis whitespace-nowrap rounded hover:text-teal-400 hover:bg-gray-200 transition duration-300 ease-in-out">
              <IoMdAdd size={22} />
              <span className="mt-px text-gray-600 hover:text-gray-700 text-base">
                Nueva lista
              </span>
            </div>
          </Link>
        </li>
        <li className="relative text-start mt-6">
          <span className="px-6 text-gray-400 uppercase text-sm">Acciones</span>
          <Link to="/evento/crear">
            <div
              className="flex gap-px items-center text-sm py-4 px-6 h-10 overflow-hidden text-teal-500 text-ellipsis whitespace-nowrap rounded hover:text-teal-400 hover:bg-gray-200 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <IoMdAdd size={22} />
              <span className="mt-px text-gray-600 hover:text-gray-700 text-base">
                Crear evento
              </span>
            </div>
          </Link>
        </li>
        {(event?.nombre || id || invitados) && (
          <li className="relative text-start">
            <div
              className="flex gap-px items-center text-sm py-4 px-6 h-10 overflow-hidden text-teal-500 text-ellipsis whitespace-nowrap rounded hover:text-teal-400 hover:bg-gray-200 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <IoMdArrowRoundBack size={22} onClick={() => history.back()} />
              <span
                className="mt-px text-gray-600 hover:text-gray-700 text-base cursor-pointer"
                onClick={() => history.back()}
              >
                Volver
              </span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Aside;
