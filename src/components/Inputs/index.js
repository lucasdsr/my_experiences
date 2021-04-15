import React from 'react';
import PropTypes from 'prop-types';

import { Input as InputAntd, Form } from 'antd';

const Input = props => {

    const {
        form,
        name,
        label,
        rules,
        otherFormItemProps,
        ...otherProps
    } = props;

    return (
        <Form.Item
            form={form}
            name={name}
            label={label}
            rules={rules}
            {...otherFormItemProps}
        >
            <InputAntd {...otherProps} />
        </Form.Item>
    )
};

Input.defaultProps = {
    form: {},
    name: '',
    label: '',
    rules: [],
    otherFormItemProps: {},
}

Input.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    rules: PropTypes.array,
    label: PropTypes.string,
    otherFormItemProps: PropTypes.object,
}
export default Input;