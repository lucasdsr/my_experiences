import React, { useEffect, useState, useContext } from 'react'

import storage from '../../classes/storage';
import { MyContext } from '../../providers/context';
import EmployeesModel from '../../classes/models/employees';

import {
    Row,
    Typography,
} from 'antd';

import { ArrowLeftOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import EmployeeCard from './employeeCard';
import MainLayout from '../../components/Layout/MainLayout';

import './index.css'

const { Text, Title } = Typography;

const EmployeesList = () => {

    const {
        addEmployees,
        employees = [],
    } = useContext(MyContext);

    const { getEmployeesList } = storage;
    
    const [employeesList, setEmployeesList] = useState([]);

    useEffect(() => {
        const addCurrentEmployees = () => {
            const employeesModels = getEmployeesList().map(employee => new EmployeesModel(employee));
            if(!employees.length && employeesModels.length) addEmployees(...employeesModels);
        }
        addCurrentEmployees();
        
        setEmployeesList(employees);
    }, []);

    return (
        <MainLayout title="Funcionários">
            <Row className="main-row" align="middle">
                <Row justify="center" style={{ width: '100%', margin: '20px 0' }}>
                    <Title level={3} >
                        Quadro de funcionários
                    </Title>
                </Row>
                <Row justify="center" style={{ width: '100%' }}>
                    {
                        employeesList.length > 0 && employeesList.map(({ age, name, occupation, photo }) => (
                            <EmployeeCard
                                age={age}
                                name={name}
                                photo={photo}
                                occupation={occupation}
                                key={Math.random().toString()}
                            />
                            
                        ))
                    }
                </Row>
                <Row justify="end" align="middle" style={{ width: 600, margin: '100px auto auto 0' }}>
                    <Link to="/employees">
                        <Text className="clickable-text">
                            <ArrowLeftOutlined style={{ fontSize: 12, marginRight: 5 }} />
                            Ir para o cadastro de funcionários
                        </Text>
                    </Link>
                </Row>
            </Row>
        </MainLayout>
    )
}

export default EmployeesList;
