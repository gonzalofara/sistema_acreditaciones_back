import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents, resetEventDetail } from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import { BsFillArchiveFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Eventos = () => {
  const eventos = useSelector((state) => state.eventos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(resetEventDetail());
  }, [dispatch]);

  return (
    <section>
      <SideBar />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-2xl text-start">Eventos</h2>

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 text-left">
          {eventos?.length > 0 &&
            eventos.map((e) => (
              <blockquote className="border-t-4 border-teal-600">
                <header className="sm:grid sm:items-center ml-4 mt-2">
                  <Link to={`/eventos/${e.id}`}>
                    <h1 className="mt-2 text-3xl font-medium sm:mt-0 text-teal-600 hover:text-gray-400 hover:cursor-pointer">
                      {e.nombre}
                    </h1>
                  </Link>
                  <p className="uppercase text-sm font-semibold">
                    {e.cliente} -{" "}
                    <span className="font-medium">
                      {e.Invitados.length + " Invitados"}
                    </span>
                  </p>
                </header>

                <p className="mt-2 ml-4 text-sm text-gray-700">
                  {`Actualizado el ${e.updatedAt.slice(
                    8,
                    10
                  )}/${e.updatedAt.slice(5, 7)}/${e.updatedAt.slice(
                    0,
                    4
                  )} a las ${e.updatedAt.slice(11, 16)} hs.`}
                </p>

                <footer className="mt-4 pl-4 py-3 bg-gray-200">
                  <p className="text-xs text-gray-500 hover:cursor-pointer group hover:text-gray-700 flex gap-1 items-center w-[100px]">
                    <BsFillArchiveFill size={18} />
                    <span className="opacity-0 group-hover:opacity-50">
                      Archivar
                    </span>
                  </p>
                </footer>
              </blockquote>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Eventos;
