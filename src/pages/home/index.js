import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../../providers/context.js';

import axios from 'axios';

import {
    Row,
    Col,
    Card,
    Button,
} from 'antd';
import MainLayout from '../../components/Layout/MainLayout';

import './index.css';

const Home = props => {

    const userModel = useContext(MyContext);

    console.log('UserModel', userModel);

    const onClick = () => {
        
    };

    return (
        <MainLayout
            title="HOME"
        >
            <Row
                gutter={32}
                justify="space-around"
            >
                {
                    [0, 1, 2, 3].map(i => (
                        <Col
                            span={5}
                        >
                            <Card
                                title={`Card_${i}`}
                                className="home_numbers-card"
                            >
                                {2*i}
                            </Card>
                        </Col>
                    ))
                }
                <Row justify="center" style={{ width: '100%', marginTop: 20 }} >
                    <Button
                        type="primary"
                        onClick={onClick}
                    >
                        Click to change Provider values
                    </Button>
                </Row>
            </Row>
        </MainLayout>
    )
};

Home.propTypes = {
    // title: 'HOME',
}

Home.propTypes = {
    // title: PropTypes.string,
}

export default Home;