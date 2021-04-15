import React from 'react';
import PropTypes from 'prop-types';

import { Select as SelectAntd, Form } from 'antd';

const Select = props => {

    const {
        form,
        name,
        label,
        rules,
        options,
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
            <SelectAntd
                options={options}            
                {...otherProps}
            />
        </Form.Item>
    )
};

Select.defaultProps = {
    form: {},
    name: '',
    label: '',
    rules: [],
    otherFormItemProps: {},
}

Select.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    rules: PropTypes.array,
    label: PropTypes.string,
    otherFormItemProps: PropTypes.object,
}
export default Select;