import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
} from 'antd';
import Header from '../Header';
import Footer from '../Footer';

import './index.css';

const MainLayout = props => {
    const {
        title,
        children,
    } = props;
    
    return (
        <Layout>
            <Header
                title={title}
            />
            <div className="main-Layout_children">
                {children}
            </div>
            <Footer />
        </Layout>
    );
};

MainLayout.defaultProps = {
    children: '',
    title: 'MainLayout default title... something looks rong',
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
        PropTypes.array,
    ]),

};

export default MainLayout;
