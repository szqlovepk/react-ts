/*
 * File: config-overrides
 * Desc: 描述
 * File Created: 2020/3/12
 * Author: SZQ
 * ------
 * Last Modified: 2020/3/12
 * Modified By: SZQ at <2167622337@qq.com>
 * ------
 * Copyright 2019 - present, karakal
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);