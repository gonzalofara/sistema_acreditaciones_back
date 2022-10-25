import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
const LandingPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-black sm:text-3xl drop-shadow-lg">
          Acreditaciones
        </h1>

        <p className="mt-4 font-bold text-gray-500">
          Inicia sesión para acceder al panel principal y administrar tus
          eventos!
        </p>
      </div>

      <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm text-gray-300 shadow-sm"
              placeholder="Email"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center text-gray-400">
              <MdOutlineAlternateEmail size={22} />
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Contraseña
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm text-gray-300 shadow-sm"
              placeholder="Contraseña"
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center text-gray-400">
              <MdOutlineAlternateEmail size={22} />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="px-8 py-3 cursor-pointer text-lg text-gray-100 font-semibold rounded bg-violet-400 border border-2 border-violet-400 hover:bg-violet-500 hover:border-violet-600 hover:text-white"
            onClick={() => location.assign("/general")}
          >
            Iniciar sesión
          </div>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
