/*
 * File: Page.tsx
 * Description: 描述
 * File Created: 2020-03-17 10:44:12
 * Author: szq
 * ------
 * Last Modified: 2020-03-17 11:09:28
 * Modified By: szq at <1056628965@qq.com>
 * ------
 * Copyright 2020 - Present, Your Company
 */
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './NotFound';
import App from './App';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app" push />} />
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);