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

const TextsPage = () => {

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
            <div className="container">
                <h2 className="titles">
                    Texto 1
                </h2>
                <span className="text_1">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                </span>
                <h2 className="titles">
                    Texto 2
                </h2>
                <span className="text_2">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                </span>
                <h2 className="titles">
                    Texto 3
                </h2>
                <span className="text_3">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                </span>
                <h2 className="titles">
                    Texto 4
                </h2>
                <span className="text_4">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                </span>
                <h2 className="titles">
                    Texto 5
                </h2>

                <span className="text_5">
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como
                </span>
            </div>
        </Row>
    )
};

export default TextsPage;