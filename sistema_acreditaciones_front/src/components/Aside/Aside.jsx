import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaClipboardList } from "react-icons/fa";
import { useSelector } from "react-redux";
const Aside = ({ id }) => {
  const event = useSelector((state) => state.evento);
  return (
    <div className="w-60 invisible md:visible md:h-full md:bg-gray-100 md:px-1 absolute">
      <ul className="relative py-4">
        <li className={event?.nombre ? "relative grid text-left" : "hidden"}>
          <span className="px-6 text-gray-400 uppercase text-sm">Listas</span>
          <Link to={`/eventos/${id}/invitados`}>
            <div className="px-6 flex items-center gap-2">
              {event?.Invitados?.length > 0 && <FaClipboardList />}
              <span className="mt-px">
                {event?.Invitados?.length > 0 ? event.Invitados.length : null}
              </span>
            </div>
          </Link>
          <Link to={`/eventos/${id}/listas/crear`}>
            <div
              className="flex gap-2 items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <FaPlus />
              <span>Nueva</span>
            </div>
          </Link>
        </li>
        <li className="relative">
          <Link to="/evento/crear">
            <div
              className="flex gap-2 items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <FaRegCalendarAlt />
              <span>Crear evento</span>
            </div>
          </Link>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
              ></path>
            </svg>
            <span>Sidenav link 3</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
