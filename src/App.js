import React from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/login';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path={'/login'} >
          <Login />
        </Route>

        <Route path={'/'} >
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
