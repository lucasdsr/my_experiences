import React, { useEffect, useState } from 'react'

import UserController from '../../classes/controllers/user';

import { Row } from 'antd';

import MainLayout from '../../components/Layout/MainLayout';

import './index.css'
import UserCard from './UserCard';

const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        UserController.fetchUsers()
            .then((data) => setUserList(data))
    }, [])

    return (
        <MainLayout title="Lista de usuários" >
            <Row className="main-row_user" align="middle">
                <Row justify="center" style={{ width: '100%' }}>
                    {
                        userList.map(({ age, name, photo, career, interests }) => (
                            <UserCard
                                age={age}
                                name={name}
                                photo={photo}
                                career={career}
                                interests={interests}
                            />
                        ))
                    }
                </Row>
            </Row>
        </MainLayout>
    )
}

export default UserList
