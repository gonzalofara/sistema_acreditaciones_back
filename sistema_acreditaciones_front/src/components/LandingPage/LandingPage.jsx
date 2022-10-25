import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Logo from "../../assets/magnetica_rayo.png";
import axios from "axios";

const LandingPage = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  // const email = process.env.REACT_APP_EMAIL;
  // const pss = process.env.REACT_APP_PSS;

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;

    axios
      .post("http://localhost:3001/login", { email, password })
      .then(async (res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        console.log(token);
        window.location.assign("/general");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="bg-gray-100 h-screen">
      <div className="flex flex-col bg-gray-50 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img className="w-32 h-32" src={Logo} alt="logo" />

        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Iniciar sesión
              <span className={showError ? "visible" : "hidden"}>{error}</span>
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="nombre@empresa.com"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required={true}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-violet-400 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
