/*
 * File: NotFound.tsx
 * Description: 描述
 * File Created: 2020-03-17 11:07:07
 * Author: szq
 * ------
 * Last Modified: 2020-03-17 14:14:28
 * Modified By: szq at <1056628965@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react';
import img from '../src/style/imgs/404.png';

class NotFound extends React.Component {
    state = {
        animated: '',
    };

    enter = () => {
        this.setState({ animated: 'hinge' });
    };

    render() {
        return (
            <div style={{ height: '100%', background: '#ececec', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
            </div>
        );
    }
}

export default NotFound;