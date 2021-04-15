import React from 'react';
import PropTypes from 'prop-types';

import { Upload, Form } from 'antd';

const { Dragger } = Upload;

const UploadDragger = props => {
    const {
        form,
        name,
        label,
        content,
        otherFormItemProps,
        ...otherProps
    } = props;

    return (
        <Form.Item
            form={form}
            name={name}
            label={label}
            {...otherFormItemProps}
        >
            <Dragger {...otherProps}>
                {content}
            </Dragger>
        </Form.Item>
    );
}

UploadDragger.defaultProps = {
    form: {},
    name: '',
    label: '',
    rules: [],
    content: '',
    otherFormItemProps: {},
}

UploadDragger.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string,
    rules: PropTypes.array,
    label: PropTypes.string,
    content: PropTypes.node,
    otherFormItemProps: PropTypes.object,
}

export default UploadDragger;