import React, { useCallback } from 'react';

import {
    Row, 
    Col,
    Form,
    Button,
    Typography,
} from 'antd';

import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons';

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

    const genders = {
        0: 'Másculino',
        1: 'Feminino',
        2: 'Outro',
    }

    const initOccupationOptions = useCallback(() => Object.entries(occupations).map(([ key, value ]) => ({
        label: value,
        value: key,
    })), [occupations]);

    const initGenders = useCallback(() => Object.entries(genders).map(([ key, value ]) => ({
        label: value,
        value: key,
    })), [genders]);

    const occupationOptions = initOccupationOptions();
    console.log('occupationOptions', occupationOptions);

    const genderOptions = initGenders();

    const beforeUpload = file => {

        console.log('trying to upload file: ', file);
    }

    const draggerContent = (
        <div>
            <Row justify="center" style={{ marginBottom: 5 }}>
                <UserOutlined style={{ fontSize: 30 }}/>
            </Row>
            <Row justify="center" style={{ fontSize: 12 }}>
                Clique
                <br />
                Ou
                <br />
                Arraste
            </Row>
        </div>
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
                style={{ width: 400 }}
                layout="vertical"
                name="new_employees"
                onFinish={values => console.log('finished: ', values)}
            >
                <Row justify="center">
                    <Dragger
                        form={form}
                        label="Foto"
                        name="photo"
                        style={{ width: 100 }}
                        content={draggerContent}
                        beforeUpload={beforeUpload}
                        accept=".jpg, .jpeg, .png, .webp"
                    />
                </Row>
                <Row>
                    <Col lg={18}>
                        <Input
                            form={form}
                            name="name"
                            label="Nome"
                            maxLength={50}
                            placeholder="Nome do funcionário"
                        />
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <Input
                            name="age"
                            form={form}
                            label="Idade"
                            maxLength={3}
                            placeholder="Idade"
                        />
                    </Col>
                </Row>
                <Select
                    form={form}
                    allowClear
                    name="gender"
                    label="Gênero"
                    options={genderOptions}
                    placeholder="Gênero do funcionário"
                />
                <Select
                    allowClear
                    form={form}
                    label="Cargo"
                    name="occupation"
                    options={occupationOptions}
                    placeholder="Cargo do funcionário"
                />
                <Row justify="space-between">
                    <Button
                        type="danger"
                    >
                        Pronto!
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Pronto!
                    </Button>
                </Row>
                <Row justify="end" align="middle" style={{ marginTop: 100 }}>
                    <Text className="clickable-text" onClick={() => console.log('clicado')}>
                        Ir para listagem de funcionários
                        <ArrowRightOutlined style={{ fontSize: 12, marginLeft: 5 }} />
                    </Text>
                </Row>

            </Form>
        </Row>
    )

}

export default NewEmployees;