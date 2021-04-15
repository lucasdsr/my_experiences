import React, { useCallback } from 'react';

import {
    Row, 
    Col,
    Form,
    Button,
    Typography,
} from 'antd';

import { InboxOutlined } from '@ant-design/icons';

import Input from '../../components/Inputs'
import Select from '../../components/Select'
import { Dragger } from '../../components/Uploads'

const { Title, Text } = Typography;

const NewEmployees = () => {

    const [form] = Form.useForm();

    const occupations = {
        0: 'Estagiário',
        1: 'Programador Júnior',
        2: 'Programador Pleno',
        3: 'Programador Sénior',
        4: 'Gerente',
    }

    const initOccupations = useCallback(() => Object.entries(occupations).map(([ key, value ]) => ({
        label: value,
        value: key,
    })), [occupations]);

    const occupationOptions = initOccupations();

    console.log('occupationOptions', occupationOptions);

    const beforeUpload = file => {
        console.log('trying to upload file: ', file);
    }

    const draggerContent = (
        <Text>
            <InboxOutlined style={{ fontSize: 20, marginRight: 5 }}/>
            Selecione ou arraste uma foto
        </Text>
    );

    return (
        <Row justify="center" >
            <Row justify="center" style={{ width: '100%', margin: '20px 0' }}>
                <Title level={3} >
                    Cadastre um novo funcionário
                </Title>
            </Row>
            <Form
                form={form}
                layout="vertical"
                name="new_employees"
                onFinish={values => console.log('finished: ', values)}
            >

                <Row style={{ width: '100%' }}>
                    <Col span={17}>
                        {/* name */}
                        <Input
                            form={form}
                            name="name"
                            label="Nome"
                            maxLength={50}
                            placeholder="Nome do funcionário"
                        />
                    </Col>
                    <Col span={6} offset={1}>
                        {/* age */}
                        <Input
                            form={form}
                            name="age"
                            label="Idade"
                            maxLength={3}
                            placeholder="Idade"
                        />
                    </Col>
                </Row>
                {/* occupation */}
                <Select
                    form={form}
                    label="Cargo"
                    name="occupation"
                    options={occupationOptions}
                    placeholder="Cargo do funcionário"
                />
                {/* photo */}

                <Dragger
                    form={form}
                    label="Foto"
                    name="photo"
                    content={draggerContent}
                    beforeUpload={beforeUpload}
                />

                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: 'auto' }}
                >
                    Pronto!
                </Button>

            </Form>

        </Row>
    )

}

export default NewEmployees;