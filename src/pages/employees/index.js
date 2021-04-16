import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

import EmployeesListComponent from './employees-list';
import NewEmployeesFormComponent from './new-employees-form';

export const EmployeesList = props => (
    <MainLayout title="Funcionários">
        <EmployeesListComponent {...props} />
    </MainLayout>
)

export const NewEmployees = props => (
    <MainLayout title="Funcionários">
        <NewEmployeesFormComponent {...props} />
    </MainLayout>
)