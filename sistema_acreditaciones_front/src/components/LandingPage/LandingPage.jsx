import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
const LandingPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Acreditaciones</h1>

        <p className="mt-4 text-gray-500">
          Inicia sesión para acceder al panel principal y administrar tus
          eventos!
        </p>
      </div>

      <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label for="email" className="sr-only">
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
          <label for="password" className="sr-only">
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
            className="inline-block rounded-lg bg-teal-600 hover:bg-teal-500 px-14 py-3 text-sm font-medium text-gray-50 cursor-pointer"
            onClick={() => location.assign("/general")}
          >
            Ingresar
          </div>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
