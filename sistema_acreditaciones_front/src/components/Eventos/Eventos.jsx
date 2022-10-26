import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvents,
  resetEventDetail,
  setEventStatus,
} from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
import Error from "../Error/Error";
import { BsFillArchiveFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Eventos = () => {
  const eventos = useSelector((state) => state.eventos);
  const tk = sessionStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetEventDetail());
    dispatch(getAllEvents());
  }, [dispatch]);

  console.log(eventos);

  if (!tk) {
    return <Error />;
  } else {
    return (
      <section>
        <SideBar />
        <Aside />
        <div className="md:ml-60 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold sm:text-2xl text-start">Eventos</h2>

          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 text-left">
            {eventos?.length > 0 &&
              eventos
                ?.filter((e) => e.archived !== "true")
                .map((e) => (
                  <blockquote
                    key={e.id}
                    className={
                      e.status === "active"
                        ? "border-t-4 border-teal-600 shadow-md"
                        : "border-t-4 border-rose-600 shadow-md"
                    }
                  >
                    <header className="sm:grid sm:items-center ml-4 mt-2">
                      <Link to={`/eventos/${e.id}`}>
                        <h1
                          className={
                            e.status === "active"
                              ? "mt-2 text-3xl font-medium sm:mt-0 text-teal-600 hover:text-gray-400 hover:cursor-pointer"
                              : "mt-2 text-3xl font-medium sm:mt-0 text-rose-600 hover:text-gray-400 hover:cursor-pointer"
                          }
                        >
                          {e.nombre}
                        </h1>
                      </Link>
                      <p className="uppercase font-semibold text-gray-700 text-xs">
                        {e.cliente} -{" "}
                        <span className="font-semibold text-gray-500 text-xs">
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

                    <footer
                      className={
                        e.status === "active"
                          ? "mt-4 pl-4 py-3 bg-gray-200"
                          : "mt-4 pl-4 py-3 bg-rose-200"
                      }
                    >
                      <p
                        className={
                          e.status === "active"
                            ? "text-xs text-gray-500 hover:cursor-pointer group hover:text-gray-700 flex gap-1 items-center w-[100px]"
                            : "text-xs text-rose-500 hover:cursor-pointer group hover:text-rose-700 flex gap-1 items-center w-[100px]"
                        }
                        onClick={() =>
                          dispatch(
                            setEventStatus(e.id, { archived: "true" })
                          ).then(() => dispatch(getAllEvents()))
                        }
                      >
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
  }
};

export default Eventos;
