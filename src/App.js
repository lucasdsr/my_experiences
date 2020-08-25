import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Erro404 from './pages/Erro404';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path={'/login'} >
          <Login />
        </Route>

        <Route path={'/home'} >
          <Home />
        </Route>

        <Route path={'/*'} >
          <Erro404 />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
