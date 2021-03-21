import React, { useEffect, useState } from 'react'

import UserController from '../../classes/controllers/user';

import {
    Row,
    Col,
    Card,
    Avatar,
    Divider,
    Typography,
} from 'antd';

import MainLayout from '../../components/Layout/MainLayout';

import './index.css'

const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const controller = new UserController();
        controller.fetchUsers()
            .then((data) => setUserList(data))
    }, [])

    const generateCard = user => {

        const { name, photo, age, career, interests } = user.getUserData();

        return (
            <Card
                hoverable
                className='user-card'
                cover={(
                    <Row justify="center" className="user-photo-row">
                        <Avatar size={96} src={photo} />
                    </Row>
                )}
            >
                <Row justify="center">
                    <Row justify="space-around" style={{ width: '100%' }}>
                        <span style={{ fontWeight: 'bold' }} className="user-info-col" >
                            {name}
                        </span>
                        <span className="user-info-col">
                            {age} Anos
                        </span>
                    </Row>
                    <Row justify="center" className="user-info-col">
                        {career}
                    </Row>
                    <Divider />
                    <Row justify="center" className="user-info-col">
                        Curte
                        {` `}
                        {
                            interests.reduce((acc, item, i) => {
                                if (i <= interests.length - 2) return acc.concat(`${item}, `);
                                return acc.concat(item);
                            } ,'')
                        }
                    </Row>
                </Row>
            </Card>
        )
    };

    return (
        <MainLayout >
            <Row className="main-row" align="middle">
                <Row justify="center" style={{ width: '100%' }}>
                    <h1>
                        Usuários
                    </h1>
                </Row>
                <Row justify="center" style={{ width: '100%' }}>
                    {
                        userList.map(user => generateCard(user))
                    }
                </Row>
            </Row>
        </MainLayout>
    )
}

export default UserList
