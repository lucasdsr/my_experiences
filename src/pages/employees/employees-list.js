import React, { useEffect, useState, useContext } from 'react'

import { MyContext } from '../../providers/context.js';
import EmployeeController from '../../classes/controllers/user';

import {
    Row,
} from 'antd';

import EmployeeCard from './EmployeeCard';

import './index.css'

const EmployeesList = () => {

    const { employees: employeesList = {} } = useContext(MyContext);

    console.log('EmployeesList file: ', employeesList);

    return (
        <Row className="main-row" align="middle">
            <Row justify="center" style={{ width: '100%' }}>
                {
                    employeesList.map(({ age, name, photo, occupation }) => (
                        <EmployeeCard
                            age={age}
                            name={name}
                            photo={photo}
                            occupation={occupation}
                        />
                    ))
                }
            </Row>
        </Row>
    )
}

export default EmployeesList;
