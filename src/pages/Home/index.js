import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    Typography,
} from 'antd';

const Home = () => {
    const {
        title,
    } = this.props;

    return (
        <Typography.Title>
            {title}
        </Typography.Title>
    )
};

Home.propTypes = {
    title: 'HOME',
}

Home.propTypes = {
    title: PropTypes.string,
}

export default Home;