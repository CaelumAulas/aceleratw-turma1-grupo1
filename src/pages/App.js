import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Brands from "../pages/Brands/Brands";
import RegisterVehicles from "./RegisterVehicles/RegisterVehicles";
import AddBrands from "../pages/Brands/AddBrands";
import AddUsers from "../pages/Users/AddUsers";
import Vehicles from "./Vehicles/Vehicles";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/usuarios">
            <Users />
          </Route>
          <Route path="/cadastro-usuario">
            <AddUsers />
          </Route>
          <Route path="/marcas">
            <Brands />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cadastro-veiculo">
            <RegisterVehicles />
          </Route>
          <Route path="/cadastro-marca">
            <AddBrands />
          </Route>
          <Route path="/veiculos">
            <Vehicles />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Vehicles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
