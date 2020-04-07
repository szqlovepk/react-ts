import React, { Component } from 'react';
import SiderCustom from './component/layout/SiderCustom';
import { Layout } from 'antd';
import './App.css';
import Button,{ButtonType, ButtonSize} from './component/Button/button';

const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout className="app__layout__container">
                <Header>header</Header>
                <Layout>
                    <SiderCustom />
                    <Layout>
                        <Content>
                            <h1>Hello World</h1>
                            <h2>Hello World</h2>
                            <h3>Hello World</h3>
                            <code>test code</code>
                            <Button disabled> hello </Button>
                            <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> hello </Button>
                            <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Large}> hello </Button>
                            <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Large} disabled> hello </Button>
                        </Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;