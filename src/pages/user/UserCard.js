import React from 'react';
import PropTypes from "prop-types";

import {
    Row,
    Card,
    Avatar,
    Divider,
} from 'antd';

const UserCard = props => {

    const {
        age,
        name,
        photo,
        career,
        interests
    } = props;

    return (
        <Card
            hoverable
            className='user-card'
            cover={(
                <Row justify="center" className="user-photo-row">
                    <Avatar size={96} src={photo} />
                </Row>
            )}
        >
            <Row justify="center">
                <Row justify="space-around" style={{ width: '100%' }}>
                    <span style={{ fontWeight: 'bold' }} className="user-info-col" >
                        {name}
                    </span>
                    <span className="user-info-col">
                        {age} Anos
                    </span>
                </Row>
                <Row justify="center" className="user-info-col">
                    {career}
                </Row>
                <Divider />
                <Row justify="center" className="user-info-col">
                    Curte
                    {` `}
                    {
                        interests.reduce((acc, item, i) => {
                            if (i <= interests.length - 2) return acc.concat(`${item}, `);
                            return acc.concat(item);
                        } ,'')
                    }
                </Row>
            </Row>
        </Card>
    )
};

UserCard.desfaultProps = {
    age: 0,
    name: '',
    photo: '',
    career: '',
    interests: '',
}

UserCard.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    photo: PropTypes.string,
    career: PropTypes.string,
    interests: PropTypes.string,
}

export default UserCard;