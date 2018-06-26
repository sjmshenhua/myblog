import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';


import reducers from './redux/reducer';             //redux状态返回管理
import './config/config';                           //axios拦截器配置
import 'antd-mobile/dist/antd-mobile.css';          //插件公共样式
import Login from './container/login/login';
import Register from './container/register/register'
import AuthRoute from './container/authRoute/authRoute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'


const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension(): f=>f
))

function Boss(){
    return <h1>Boss</h1>
}
ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/bossinfo" component={BossInfo}></Route>
                <Route path="/geniusinfo" component={GeniusInfo}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
