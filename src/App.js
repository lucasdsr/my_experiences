import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home';
import Login from './pages/login';
import Erro404 from './pages/erro404';
import TextsPage from './pages/textsPage';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path={'/texts'}>
          <TextsPage />
        </Route>

        <Route path={'/login'} >
          <Login />
        </Route>

        <Route path={'/home'} >
          <Home />
        </Route>

        <Route path={'/erro404'} >
          <Erro404 />
        </Route>

        <Route path={'/'} >
          <TextsPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
