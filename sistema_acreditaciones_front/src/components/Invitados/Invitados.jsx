import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import Aside from "../Aside/Aside";
import { getEventDetail, resetEventDetail } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Invitados = (props) => {
  const id = props.match.params.id;
  const evento = useSelector((state) => state.evento);
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetEventDetail());
    dispatch(getEventDetail(id));
  }, [dispatch]);
  let n = 0;
  return (
    <section>
      <SideBar />
      <Aside />
      <div className="md:ml-60 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold sm:text-4xl text-start grid">
          {evento?.nombre}
          <span className="text-sm font-medium text-gray-600 uppercase">
            {evento.cliente}
          </span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 text-left">
          <ol>
            {evento?.Invitados?.map((i) => {
              n++;
              return (
                <Link key={i.id} to={"/invitados/" + i.id}>
                  <li key={i.id}>
                    {n}- {i.last_name.toUpperCase()}, {i.first_name}
                  </li>
                </Link>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Invitados;
