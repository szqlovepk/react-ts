import React, { Component } from 'react';
import SiderCustom from './component/layout/SiderCustom';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout className="app__layout__container">
                <Header>header</Header>
                <Layout>
                    <SiderCustom />
                    <Layout>
                        <Content>main content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;