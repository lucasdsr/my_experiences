import React, { useState } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { MyContext } from './providers/context.js'

import Home from './pages/home';
import Login from './pages/login';
import Erro404 from './pages/erro404';
import UsersList from './pages/user';
import TextsPage from './pages/textsPage';

import './App.css';
import 'antd/dist/antd.css';

const App = () => {

  const [contextValue, setContextValue] = useState({ contextName: 'MyContext' });

  return (
    <MyContext.Provider value={{ value: contextValue, setValue: setContextValue }}>
      <Router>
        <Switch>

          <Route path={'/texts'}>
            <TextsPage />
          </Route>

          <Route path={'/login'} >
            <Login />
          </Route>

          <Route path={'/user-list'} >
            <UsersList />
          </Route>

          <Route path={'/home'} >
            <Home />
          </Route>

          <Route path={'/erro404'} >
            <Erro404 />
          </Route>

          <Route path={'/'} >
            <Home />
          </Route>

        </Switch>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
