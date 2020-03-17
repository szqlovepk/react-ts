import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout className="app__layout__container">
                <Header>header</Header>
                <Layout>
                    <Sider theme="light">left sidebar</Sider>
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