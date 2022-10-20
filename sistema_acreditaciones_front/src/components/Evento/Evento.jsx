import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventDetail, resetEventDetail } from "../../redux/actions/actions";
import SideBar from "../SideBar/SideBar";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaUsers, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Evento = (props) => {
  const id = props.match.params.id;

  const dispatch = useDispatch();
  const evento = useSelector((state) => state.evento);
  console.log(id);

  useEffect(() => {
    dispatch(getEventDetail(id));
  }, [dispatch]);

  return (
    <section>
      <SideBar />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold sm:text-4xl text-start grid">
          {evento?.nombre}

          <span className="text-lg font-light text-gray-600">
            {evento?.cliente}
          </span>
        </h2>
        <nav aria-label="Breadcrumb" className="flex mt-4">
          <ol role="list" className="flex gap-2 overflow-hidden text-gray-700">
            <li className="flex items-center">
              <p className="flex h-6 items-center bg-gray-100 px-2 transition-colors hover:text-gray-900">
                <FaUsers size={20} />

                <span className="ml-1.5 text-xs font-medium"> Estado </span>
              </p>
            </li>

            <li className="relative flex items-center ">
              <span className="absolute inset-y-0 -left-px h-6 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

              <p className="flex h-6 items-center bg-blue-500 pl-8 pr-4 text-xs font-medium transition-colors text-gray-100">
                {evento?.fechaF === "" ? "Finalizado" : "Activo"}
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

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 text-left">
          <div className="relative mb-6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-400 focus:text-gray-900">
              <FaSearch size={20} />
            </div>
            <input
              type="search"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-50 block w-full pl-10 p-2.5 py-4"
              placeholder="Buscar invitados"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evento;
