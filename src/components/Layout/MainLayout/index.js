import React from 'react';
import PropTypes from 'prop-types';

import {
    Spin,
    Layout,
} from 'antd';

import Header from '../Header';
import Footer from '../Footer';

import './index.css';

const MainLayout = props => {
    const {
        title,
        loading,
        children,
        ...otherprops
    } = props;

    return (
        <Spin spinning={loading}>
            <Layout  className="main-Layout_children">
                <Header
                    title={title}
                />
                <div className="main-body" {...otherprops}>
                    {children}
                </div>
                <Footer />
            </Layout>
        </Spin>
    );
};

MainLayout.defaultProps = {
    children: '',
    title: '',
    loading: false,
};

MainLayout.propTypes = {
    title: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
};

export default MainLayout;
