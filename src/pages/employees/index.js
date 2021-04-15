import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';

import EmployeesList from './employees-list';
import NewEmployeesForm from './new-employees-form';

const Employees = () => {

    return (
        <MainLayout title="Funcionários">
            <EmployeesList />
            <NewEmployeesForm />
        </MainLayout>
    )

}

export default Employees;