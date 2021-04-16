import React, { useContext } from 'react'
import { MyContext } from '../../providers/context';

import {
    Row,
    Typography,
} from 'antd';

import { ArrowLeftOutlined } from '@ant-design/icons';

import EmployeeCard from './employeeCard';

import { Link } from 'react-router-dom';

import './index.css'

const { Text, Title } = Typography;

const EmployeesList = () => {

    const { employees: employeesList = [] } = useContext(MyContext);

    console.log('EmployeesList file: ', employeesList);

    return (
        <Row className="main-row" align="middle">
            <Row justify="center" style={{ width: '100%', margin: '20px 0' }}>
                <Title level={3} >
                    Quadro de funcionários
                </Title>
            </Row>
            <Row justify="center" style={{ width: '100%' }}>
                {
                    employeesList.map(({ age, name, occupation, photo: { file: { originFileObj } }}) => (
                        <EmployeeCard
                            age={age}
                            name={name}
                            photo={originFileObj}
                            occupation={occupation}
                        />
                    ))
                }
            </Row>
            <Row justify="end" align="middle" style={{ marginTop: 100 }}>
                <Link to="/employees">
                    <Text className="clickable-text">
                        <ArrowLeftOutlined style={{ fontSize: 12, marginRight: 5 }} />
                        Ir para o cadastro de funcionários
                    </Text>
                </Link>
            </Row>
        </Row>
    )
}

export default EmployeesList;
