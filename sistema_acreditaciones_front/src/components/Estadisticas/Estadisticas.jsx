import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Estadisticas = ({ invitadosArr }) => {
  console.log("ESTADISTICAS", invitadosArr);
  const pending = invitadosArr?.filter((p) => p.status === "pendiente").length;
  const accredited = invitadosArr?.filter(
    (p) => p.status == "acreditado"
  ).length;
  console.log(pending);
  console.log(accredited);

  const data = {
    labels: ["Acreditados", "Pendientes", ],
    datasets: [
      {
        label: "# of Votes",
        data: [accredited,pending],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",

        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="flex gap-x-6">
        <span>
          <h5>Invitados Totales</h5>
          <p>{invitadosArr?.length}</p>
        </span>
        <span>
          <h5>Acreditados</h5>
          <p>{accredited}</p>
        </span>
        <span>
          <h5>pendientes</h5>
          <p>{pending}</p>
        </span>
      </div>
      <div className="w-1/2 mx-auto">
      <Pie data={data} />;
      </div>
    </>
  );
};

export default Estadisticas;
