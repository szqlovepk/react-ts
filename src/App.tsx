import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

const handleClick = (person?: string) => {
    alert(`hello ${person}`);
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={require('./style/imgs/logo512.png')} alt="xx"/>
              <Button type="primary" onClick={() => handleClick('typescript')}>Button</Button>
            </div>
        );
    }
}

export default App;