import React from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
} from 'antd';
import MainLayout from '../../components/Layout/MainLayout';

const Home = props => {
    const {
        title,
    } = props;

    return (
        <MainLayout>
            <Typography.Title>
                {title}
            </Typography.Title>
        </MainLayout>
    )
};

Home.propTypes = {
    title: 'HOME',
}

Home.propTypes = {
    title: PropTypes.string,
}

export default Home;