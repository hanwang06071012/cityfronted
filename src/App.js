import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './router/index';

import Head from './components/common/Head';
import { Layout } from 'antd';

import "./App.css";
import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        const routers = Routes.map((item, index) => {
            return item.exact ? <Route key={index} exact path={item.path} component={item.component} /> : <Route key={index} path={item.path} component={item.component} />
        })
        return (
            <Router>
                <div>
                    <Layout className="layout">
                        <Header>
                          <Head />
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <div>{ routers }</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                          Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </div>
            </Router>
        );
    }
}

export default App;