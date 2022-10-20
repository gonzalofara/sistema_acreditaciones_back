import React from "react";
import { FcOvertime } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <div>
          <a href="/general">
            <FcOvertime size={30} />
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
             md:pt-0"
          >
            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/eventos"
              >
                Eventos
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Archivo
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                Invitados
              </a>
            </li>

            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
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
