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
                            <br />
                            <Button disabled> disabled </Button>
                            <Button btnType={ButtonType.Default} size={ButtonSize.Large} autoFocus onClick={e => {e.preventDefault(); alert('123');}}> default </Button>
                            <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> parimary </Button>
                            <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> danger </Button>
                            <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Large} target="_blank"> link button </Button>
                            <Button btnType={ButtonType.Link} href="http://www.baidu.com" size={ButtonSize.Large} disabled> link disabled </Button>
                        </Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default App;