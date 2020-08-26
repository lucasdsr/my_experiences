import React from 'react';
import PropTypes from 'prop-types';

import {
    Layout,
} from 'antd';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = props => {
    const { content } = props;
    
    return (
        <Layout>
            <Header />
            {content}
            <Footer />
        </Layout>
    );
};

MainLayout.defaultProps = {
    title: 'MainLayout default title... something looks rong',
};

MainLayout.propTypes = {
    title: PropTypes.string,
    content: PropTypes.element.isRequired,
};

export default MainLayout;
