/*
 * File: SiderCustom.tsx
 * Description: 描述
 * File Created: 2020-03-17 16:01:14
 * Author: szq
 * ------
 * Last Modified: 2020-03-17 17:06:57
 * Modified By: szq at <1056628965@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from './SiderMenu';
import routes from '../../routes/config';
const { Sider } = Layout;

class SiderCustom extends Component {
    render() {
        return (
            <Sider theme="light">
                <SiderMenu menus={routes.menus} />
            </Sider>
        )
    }
}

export default SiderCustom;