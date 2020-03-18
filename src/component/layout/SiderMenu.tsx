/*
 * File: SiderMenu.tsx
 * Description: 描述
 * File Created: 2020-03-17 16:39:48
 * Author: szq
 * ------
 * Last Modified: 2020-03-17 17:23:05
 * Modified By: szq at <1056628965@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react';
import { Menu } from 'antd';
//import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const renderTitle = (item: any) => (
    <span>
        {item.icon && <span>1</span>}
        <span>{item.title}</span>
    </span>
)

const renderItem = (item: any) => (
    <Menu.Item key={item.key}>{renderTitle(item)}</Menu.Item>
)

const renderSubMenu = (item: any) => {
    return (
        <SubMenu key={item.key} title={renderTitle(item)}>
            {
                item.subs.map((son: any) => son.subs ? renderSubMenu(son) : renderItem(son))
            }
        </SubMenu>
    )
}

export default ({ menus }) => {
    return (
        <Menu theme="light" mode="inline">
            {
                menus && menus.map((item: any) => item.subs ? renderSubMenu(item) : renderItem(item))
            }
        </Menu>
    )
}
