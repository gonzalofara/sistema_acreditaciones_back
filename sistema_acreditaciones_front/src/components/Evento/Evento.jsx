import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEventDetail,
  setEventStatus,
  resetInvitadoDetail,
} from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
import { BiWindowClose } from "react-icons/bi";
import { FaUsers, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Evento = (props) => {
  const id = props.match.params.id;

  const dispatch = useDispatch();
  const evento = useSelector((state) => state.evento);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  console.log(evento);
  useEffect(() => {
    dispatch(resetInvitadoDetail());
    dispatch(getEventDetail(id));
  }, [dispatch]);

  const handleChange = (e) => {
    let invitados = evento?.Invitados;
    setSearch(e.currentTarget.value);

    setFiltered(
      invitados.filter(
        (i) =>
          i.first_name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
          i.last_name.toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    );

    setShowFiltered(true);
  };

  return (
    <section>
      <SideBar />

      <Aside id={id} event={evento} />
      <div className="md:ml-60 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2
          className={
            evento?.status === "active"
              ? "text-4xl font-semibold sm:text-4xl text-center md:text-start grid"
              : "text-4xl font-semibold sm:text-4xl text-rose-600 text-center md:text-start grid"
          }
        >
          {evento?.nombre}

          <span
            className={
              evento?.status !== "active"
                ? "text-lg font-light text-rose-900"
                : "text-lg font-light"
            }
          >
            {evento?.cliente}
          </span>
        </h2>
        <nav
          aria-label="Breadcrumb"
          className="flex mt-4 justify-center md:justify-start"
        >
          <ol role="list" className="flex gap-2 overflow-hidden text-gray-700">
            <li className="flex items-center">
              <p className="flex h-6 items-center bg-gray-100 px-2 transition-colors hover:text-gray-900">
                <FaUsers size={20} />

                <span className="ml-1.5 text-xs font-medium"> Estado </span>
              </p>
            </li>

            <li className="relative flex items-center ">
              <span className="absolute inset-y-0 -left-px h-6 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

              <p
                className={
                  evento?.status === "active"
                    ? "flex h-6 items-center bg-blue-500 pl-8 pr-4 text-xs font-medium transition-colors text-gray-100"
                    : evento?.status === "closed"
                    ? "flex h-6 items-center bg-rose-600 pl-8 pr-4 text-xs font-medium transition-colors text-gray-100"
                    : null
                }
              >
                {evento?.status === "active" ? "Activo" : "Finalizado"}
              </p>
            </li>
            <li className="flex items-center">
              <p className="flex h-6 items-center bg-gray-100 px-2 transition-colors hover:text-gray-900">
                <FaUsers size={20} />

                <span className="ml-1.5 text-xs font-medium"> Invitados </span>
              </p>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -left-px h-6 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

              <p className="flex h-6 items-center bg-teal-500 pl-8 pr-4 text-xs font-medium transition-colors text-gray-100">
                {evento?.Invitados?.length}
              </p>
            </li>
          </ol>
        </nav>
        <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 text-left">
          <p
            className={
              evento?.status === "active"
                ? "flex gap-1 md:mx-0 mx-auto items-center cursor-pointer bg-rose-600 w-[160px] mt-2 pl-2 text-gray-100 py-2 rounded-md hover:bg-rose-500 hover:text-gray-50 text-center"
                : "flex gap-1 md:mx-0 mx-auto items-center bg-rose-600 w-[160px] mt-2 pl-2 text-gray-100 py-2 rounded-md text-center opacity-50"
            }
            onClick={() =>
              evento?.status === "active" &&
              dispatch(setEventStatus(id, { status: "closed" }))
            }
          >
            <span>
              <BiWindowClose size={20} />
            </span>
            Finalizar evento
          </p>
          <div className="relative">
            <span
              className={
                !search.length
                  ? "flex absolute inset-y-0 left-0 items-center pl-3 text-gray-400 focus:text-gray-900"
                  : "invisible"
              }
            >
              <FaSearch size={20} />
            </span>
            <input
              type="search"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-50 block w-full pl-10 p-2.5 py-4"
              placeholder="Buscar invitados"
              onChange={handleChange}
              vulue={search}
            />
            {showFiltered && search && filtered.length ? (
              <ul className="block w-full bg-gray-50 rounded-lg border border-gray-200 text-gray-900">
                {filtered.map((i) => (
                  <li
                    key={i.id}
                    className="px-6 py-2 bg-gray-100 border-b border-gray-300 w-full grid"
                  >
                    <h3 className="w-1/3 font-semibold">
                      <Link to={"/invitados/" + i.id}>
                        <span className="font-semibold">
                          {i.id}. {i.first_name}, {i.last_name}
                        </span>
                      </Link>
                    </h3>
                    <p className="uppercase font-medium text-xs text-gray-600">
                      Invitados {evento?.nombre} -{" "}
                      <span>{evento?.cliente}</span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
