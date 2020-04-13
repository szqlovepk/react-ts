/*
 * File: button.test.tsx
 * Description: 描述
 * File Created: 2020-04-10 15:42:13
 * Author: szq
 * ------
 * Last Modified: 2020-04-10 15:48:16
 * Modified By: szq at <1056628965@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react';
import {render} from '@testing-library/react';
import Button from './button';

test('our first react test case', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    expect(element).toBeTruthy()
})

