import React from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Layout,
    Typography,
} from 'antd';

import Header from '../Header';
import Footer from '../Footer';

import './index.css';

const MainLayout = props => {
    const {
        title,
        children,
        ...otherprops
    } = props;
    

    return (
        <Layout  className="main-Layout_children">
            <Header
                title={title}
            />
            <div className="main-body" {...otherprops}>
                {children}
            </div>
            <Footer />
        </Layout>
    );
};

MainLayout.defaultProps = {
    children: '',
    title: '',
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),

};

export default MainLayout;
