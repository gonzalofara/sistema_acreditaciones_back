import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/magnetica_rayo.png";
const SideBar = () => {
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
        <div className="flex items-center content-center gap-1">
          <a href="/general">
            <img src={logo} className="w-[40px] h-[40px]" />
          </a>
          <span className="text-gray-900 text-sm font-extrabold">
            Acreditaciones
          </span>
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
             md:pt-0"
          >
            <li>
              <a
                className="md:p-4 py-2 block text-gray-500 hover:text-teal-600"
                href="/eventos"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block text-gray-500 hover:text-teal-600"
                href="/archivo"
              >
                Archivo
              </a>
            </li>

            <li>
              <a
                className="md:p-4 py-2 block hover:text-gray-600 text-teal-600"
                href="#"
              >
                Salir
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
