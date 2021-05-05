import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import './App.css'

import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard'

const App = () => {
  return (
    <div className="App">
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/signup">Cadastro</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          <Switch>
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
        </div>
      </Router>
    </div>
  )
}

export default App
