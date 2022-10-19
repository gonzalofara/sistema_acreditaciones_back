import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/general" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
