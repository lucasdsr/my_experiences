import React from 'react';

import storage from '../classes/storage';

import EmployeesModel from '../classes/models/employees';

const { getEmployeesList } = storage;

const addEmployees = newEmployee => employees.push(newEmployee);

const employees = getEmployeesList().map(employee => new EmployeesModel(employee)) ?? [];

/**
 * @abstract Employees model array
 */
export const MyContext = React.createContext({ employees, addEmployees });

