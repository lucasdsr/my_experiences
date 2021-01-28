import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import {
    Row,
    Col,
    Card,
    Typography,
} from 'antd';
import MainLayout from '../../components/Layout/MainLayout';

import './index.css';

const Home = props => {
    // const {
    //     title,
    // } = props;

    useEffect(() => {
        axios.post('http://localhost:8888/cockpit-master/api/collections/get/Default_post_structure', {
            token: 'e5f881c4a5219e1c2ff03d89573826',
        })
            .then(response => {
                console.log('RESPONSE:', response);
            }).catch(err => {
                console.log('ERR:', err.toString());
            });
    }, []);

    return (
        <MainLayout
            title="HOME"
        >
            <Row
                gutter={32}
                // justify="space-around"
            >
                {
                    [1, 2, 3, 4].map(i => (
                        <Col
                            span={4}
                            offset={1}
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