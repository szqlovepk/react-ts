/*
 * File: config.tsx
 * Description: 描述
 * File Created: 2020-03-16 16:13:12
 * Author: szq
 * ------
 * Last Modified: 2020-03-17 17:18:18
 * Modified By: szq at <1056628965@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */

export type MenuType = {
    key: string;
    title: string;
    icon?: string;
    component?: string;
    query?: string;
    subs?: MenuType[];
}

const menu: {
    menus: MenuType[],
    others: MenuType[],
} = {
    // 菜单相关路由
    menus: [
        {
            key: '/app/test1',
            title: 'test1',
            icon: '1-',
            subs: [
                { key: '/app/test1/sub1', title: 'sub1', component: 'Test'},
            ],
        },
        { key: '/app/test2', title: 'test2', icon: '2-' },
    ],
    others: [
        // 非菜单相关路由
    ],
};

export default menu;
