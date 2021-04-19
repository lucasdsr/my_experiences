import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";

import Home from '../pages/home';
import Login from '../pages/login';
import UsersList from '../pages/user';
import Erro404 from '../pages/erro404';
import { NewEmployees, EmployeesList } from '../pages/employees';
import TextsPage from '../pages/textsPage';

const ConfigRouter = () => {

  return (
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

          <Route path={'/employees'} >
            <NewEmployees />
          </Route>

          <Route path={'/employees-list'} >
            <EmployeesList />
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
  );
}

export default ConfigRouter;
