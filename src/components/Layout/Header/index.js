import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    Typography,
} from 'antd';

const Header = props => {
    const {
        title,
    } = props;

    return (
        <Layout.Header>
            <Typography.Title style={{ color: 'white' }}>
                {/* {title} */}
            </Typography.Title>
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