import React from 'react';

// import UserModel from '../classes/models/user';

const employees = [];
const addEmployees = newEmployee => employees.push(newEmployee);

/**
 * @abstract Employees model array
 */
export const MyContext = React.createContext({ employees, addEmployees });

