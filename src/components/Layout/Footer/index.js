import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
    Typography,
} from 'antd';

const Footer = props => {
    const {
        title,
    } = props;

    return (
        <Layout.Footer>
            <Typography.Title>
                {title}
            </Typography.Title>
        </Layout.Footer>
    )
};

Footer.propTypes = {
    title: 'FOOTER',
}

Footer.propTypes = {
    title: PropTypes.string,
}

export default Footer;