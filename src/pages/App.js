import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Brands from "../pages/Brands/Brands";
import AddUser from "../pages/AddUser/AddUser";

const App = () => {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/usuarios/cadastrar-usuarios">
              <AddUser />
            </Route>
            <Route path="/usuarios">
              <Users />
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
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
  );
};

export default App;
