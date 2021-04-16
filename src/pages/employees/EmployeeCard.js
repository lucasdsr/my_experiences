import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import {
    Row,
    Card,
    Avatar,
    Divider,
} from 'antd';

const EmployeeCard = props => {

    const {
        age,
        name,
        photo, 
        occupation,
    } = props;

    console.log('EmployeesCard file: ', props);

    const [url, setUrl] = useState('');

    const getBase64 = img => {
        const reader = new FileReader();
        reader.addEventListener('load', () => setUrl(reader.result));
        reader.readAsDataURL(img);
    };

    useEffect(() => getBase64(photo), []);

    return (
        <Card
            hoverable
            className='user-card'
            cover={(
                <Row justify="center" className="user-photo-row">
                    <Avatar size={96} src={url} />
                </Row>
            )}
        >
            <Row justify="center">
                <Row justify="space-around" style={{ width: '100%' }}>
                    <span style={{ fontWeight: 'bold' }} className="user-info-col" >
                        {name ?? '___'}
                    </span>
                    <span className="user-info-col">
                        {age ?? '___'} Anos
                    </span>
                </Row>
                <Row justify="center" className="user-info-col">
                    {occupation ?? '___'}
                </Row>
                <Divider />
            </Row>
        </Card>
    )
}

EmployeeCard.defaultProps = {
    age: '',
    name: '',
    photo: '',
    occupation: '',
}

EmployeeCard.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string, 
    occupation: PropTypes.string,
}

export default EmployeeCard;