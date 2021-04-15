import React from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Layout,
    Typography,
} from 'antd';

const Header = props => {
    const {
        title,
    } = props;

    return (
        <Layout.Header style={{ display: 'flex', alignItems: 'center' }} >
            <Row justify="center" style={{ width: '100%' }}>
                <Typography.Title level={2} style={{ color: 'white', margin: 0 }}>
                    {title}
                </Typography.Title>
            </Row>
        </Layout.Header>
    )
};

Header.defaultProps = {
    title: 'HEADER',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;