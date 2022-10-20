import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Eventos from "./components/Eventos/Eventos";
import Evento from "./components/Evento/Evento";
import CrearLista from "./components/CrearLista/CrearLista";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/general" component={Dashboard} />
          <Route exact path="/eventos" component={Eventos} />
          <Route exact path="/eventos/:id" component={Evento} />
          <Route
            exact
            path="/eventos/:id/listas/crear"
            component={CrearLista}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
