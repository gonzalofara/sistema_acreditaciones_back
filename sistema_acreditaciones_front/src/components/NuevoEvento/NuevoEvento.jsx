import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postEvents } from "../../redux/actions/actions";
const NuevoEvento = () => {
  const dispatch = useDispatch();
  //Estados
  const [evento, setEvento] = useState({
    nombre: "",
    cliente: "",
    fechaInicio: "",
    fechaFin: "",
    direccion:""
  });
  //-------------------------
  const handleChange = (e) => {
    setEvento({
      ...evento,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log("ESTOY EN EL HANDLE");
    e.preventDefault();
    dispatch(postEvents(evento));
  };
  return (
    <div>
      <h1>Crear evento</h1>
      <h4>Completa los campos con la informacion del evento</h4>

      <form className="text" onSubmit={handleSubmit}>
        <h3>Cliente</h3>
        <input
          className="text-white"
          type="text"
          name="cliente"
          value={evento.cliente}
          placeholder="Empresa"
          onChange={handleChange}
        />

        <h3>Nombre del evento</h3>
        <input
          type="text"
          name="nombre"
          value={evento.nombre}
          placeholder="Nombre "
          onChange={handleChange}
        />

        <h3>Fecha de inicio</h3>
        <input
          type="date"
          name="fechaInicio"
          value={evento.fechaInicio}
          onChange={handleChange}
        />

        <h3>Fecha de cierre</h3>
        <input
          type="date"
          name="fechaFin"
          value={evento.fechaFin}
          onChange={handleChange}
        />

        <h3>Direccion</h3>
        <input 
        type="text"
        name="direccion" 
        value={evento.dirreccion}
        onChange={handleChange}
        placeholder="direccion"/>
        
        <div>
          <button>Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default NuevoEvento;
