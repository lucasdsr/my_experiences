import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    Typography,
} from 'antd';

const Header = () => {
    const {
        title,
    } = this.props;

    return (
        <Layout.Header>
            <Typography.Title>
                {title}
            </Typography.Title>
        </Layout.Header>
    )
};

Header.propTypes = {
    title: 'HEADER',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;