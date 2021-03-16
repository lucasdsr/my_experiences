import React, { useEffect, useState } from 'react'

import UserController from '../../classes/controllers/user';

import {
    Row,
    Card,
    Avatar,
} from 'antd';

import './index.css'

const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const controller = new UserController();
        controller.fetchUsers()
            .then((data) => setUserList(data))
    }, [])

    const generateCard = user => {

        const { name, photo, age } = user.getUserData();

        return (
            <Card
                hoverable
                className='user-card'
                cover={(
                    <Row justify="center" className="user-photo-row">
                        <Avatar size={64} src={photo} />
                    </Row>
                )}
            >
                <Row justify="center" style={{ display: 'grid' }}>
                    <Row justify="center" style={{ fontWeight: 'bold' }}>
                        {name}
                    </Row>
                    <Row justify="center">
                        {age} Anos
                    </Row>
                    
                </Row>
            </Card>
        )
    };

    return (
        <Row justify="center" align="middle" className="main-row">
            {
                userList.map(user => generateCard(user))
            }
        </Row>
    )
}

export default UserList
