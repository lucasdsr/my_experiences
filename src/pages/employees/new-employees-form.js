import React, { useEffect, useState, useCallback, useContext } from 'react';

import storage from '../../classes/storage';
import { MyContext } from '../../providers/context';
import EmployeesModel from '../../classes/models/employees';

import {
    Row, 
    Col,
    Form,
    Button,
    message,
    Typography,
} from 'antd';

import { UserOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';

import Input from '../../components/Inputs'
import Select from '../../components/Select'
import { Dragger } from '../../components/Uploads'
import MainLayout from '../../components/Layout/MainLayout';

const { Title, Text } = Typography;

const NewEmployees = () => {

    const [form] = Form.useForm();

    const { setEmployeesList, getEmployeesList } = storage;
    const { employees, addEmployees } = useContext(MyContext);

    const [loading, setLoading] = useState(false);
    const [photoInBase64, setPhotoInBase64] = useState('');

    const occupations = {
        0: 'Estagiário',
        1: 'Programador Júnior',
        2: 'Programador Pleno',
        3: 'Programador Sênior',
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

    const genderOptions = initGenders();

    const getBase64 = img => {
        const reader = new FileReader();
        reader.addEventListener('load', () => setPhotoInBase64(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = file => { 
        if (file.size > 1000000) {
            message.error('Tamanho limite do arquivo: 1MB');
            return Promise.reject()
        }

        getBase64(file);
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

    const uploadedImage = (
        <img
            alt="no_image"
            src={photoInBase64}
            style={{ objectFit: 'cover', width: '100%'}}
        />
    );

    const formatValues = values => {

        const {
            photo,
            occupation: occupationKey,
        } = values;

        if (photo) {
            if (photo.fileList) delete photo.fileList;
            values.photo = photoInBase64;
        }
        if (occupationKey) values.occupation = occupations[occupationKey];

        return values;
    };

    const onFinish = values => {
        if (!values) return 0;
        setLoading(true);

        Promise.resolve()
            .then(() => values && addEmployees(new EmployeesModel(formatValues(values))))
            .then(() => setEmployeesList(employees))
            .then(() => { form.resetFields(); setPhotoInBase64('') })
            .then(() => message.success('Funcionário adicionado!'))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const addCurrentEmployees = () => {
            const employeesModels = getEmployeesList().map(employee => new EmployeesModel(employee));
            if(!employees.length && employeesModels.length) addEmployees(...employeesModels);
        }
        addCurrentEmployees();
    }, []);

    return (
        <MainLayout title="Funcionários" loading={loading}>
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
                    style={{ width: 400 }}
                    onFinish={onFinish}
                >
                    <Row justify="center">
                        <Dragger
                            form={form}
                            label="Foto"
                            name="photo"
                            style={{ width: 100 }}
                            beforeUpload={beforeUpload}
                            accept=".jpg, .jpeg, .png, .webp"
                            onRemove={() => setPhotoInBase64('')}
                            content={photoInBase64 ? uploadedImage : draggerContent}
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
                            onClick={() => form.resetFields()}
                        >
                            Apagar formulário
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Pronto!
                        </Button>
                    </Row>
                    <Row justify="end" align="middle" style={{ marginTop: 100 }}>
                        <Link to="/employees-list">
                            <Text className="clickable-text">
                                Ir para o quadro de funcionários
                                <ArrowRightOutlined style={{ fontSize: 12, marginLeft: 5 }} />
                            </Text>
                        </Link>
                    </Row>

                </Form>
            </Row>
        </MainLayout>
    )

}

export default NewEmployees;