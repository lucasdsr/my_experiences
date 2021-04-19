import React from 'react';

import EmployeesListComponent from './employees-list';
import NewEmployeesFormComponent from './new-employees-form';

export const EmployeesList = props => <EmployeesListComponent {...props} />
export const NewEmployees = props => <NewEmployeesFormComponent {...props} />
