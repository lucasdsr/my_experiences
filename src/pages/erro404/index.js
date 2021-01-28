import React from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
} from 'antd';

const Erro404 = (props) => {
    const {
        title,
    } = props;

    return (
        <>
            <Typography.Title>
                {title}
            </Typography.Title>
            Not Found!
        </>
    )
};

Erro404.defaultProps = {
    title: 'ERRO 404',
};

Erro404.propTypes = {
    title: PropTypes.string,
};

export default Erro404;