import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    Typography,
} from 'antd';

import './index.css';

const onSubmit = (values) => {
    console.log('Submitado: ', values);
}

const Login = () => {

    return (
        <Row
            align="middle"
            justify="center"
            style={{
                width: '100%',
                minHeight: '875px',
                flexDirection: 'column',
            }}
        >
            <Typography.Title>
                LOGIN
            </Typography.Title>
            <Form
                name="form-login"
                layout="vertical"
                onFinish={values => onSubmit(values)}
                style={{
                    minWidth: '300px',
                    alignItems: 'center',
                }}
            >
                <Form.Item
                    name="nickname"
                    label="Insira seu Nick"
                    rules={[
                        { required: true, message: 'Pra entrar tem que inserir seu nick man!' },
                        { min: 3, message: 'Tem que ter ao menos 3 digitos!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Insira sua senha"
                    rules={[
                        { required: true, message: 'Namoral ??! cadê a senha mermão??!' },
                        { min: 3, message: 'Tem que ter ao menos 6 digitos!' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    style={{ textAlign: 'center' }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%' }}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
};

export default Login;