import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/magnetica_rayo.png";
import Swal from "sweetalert2";

const SideBar = () => {
  const handleOut = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: `Cancelar`,
      width: "300px",
      color: "#8c8a8a",
      confirmButtonColor: "#0d9488",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        sessionStorage.clear();
        window.location.assign("/");
      }
    });
  };
  return (
    <header>
      <nav
        className="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-[#f3f3f3]
         shadow-sm
       "
      >
        <div>
          <a href="/general" className="flex items-center content-center gap-1">
            <img src={logo} className="w-[45px] h-[45px]" />

            <span className="text-gray-900 text-base font-extrabold">
              Acreditaciones
            </span>
          </a>
        </div>

        <div className="cursor-pointer md:hidden block">
          <GiHamburgerMenu size={24} />
        </div>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0 md:items-center"
          >
            <li>
              <a
                className="block text-gray-500 hover:text-teal-500"
                href="/eventos"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block text-gray-500 hover:text-teal-500"
                href="/archivo"
              >
                Archivo
              </a>
            </li>

            <li className="">
              <p
                className="md:px-2 md:py-1 md:rounded py-2 block cursor-pointer bg-teal-600 hover:bg-teal-500 text-gray-100"
                onClick={handleOut}
              >
                Cerrar sesión
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
