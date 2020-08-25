import React from 'react';
import PropTypes from 'prop-types';

import {
    Typography,
} from 'antd';

const Erro404 = () => {
    const {
        title,
    } = this.props;

    return (
        <>
            <Typography.Title>
                {title}
            </Typography.Title>
            Luger errado maninho!
        </>
    )
};

Erro404.propTypes = {
    title: 'ERRO 404',
}

Erro404.propTypes = {
    title: PropTypes.string,
}

export default Erro404;