import React from 'react';
import FormikLogin from './Login';
import FormikRegister from './Register';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styled from 'styled-components';

const SimpleWelcomePage = styled.div`
    display: flex;
    vertical-align: middle;
    justify-content: space-evenly;
`


const { Header, Content, Footer, Sider, Row, Col } = Layout;


const Homepage = props => { 
    return (
        <Layout>
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                    <Breadcrumb.Item>Logout</Breadcrumb.Item>
                </Breadcrumb>
                <SimpleWelcomePage>
                    <FormikRegister/>
                    <FormikLogin/>
                </SimpleWelcomePage>
            </Content>
        </div>
        </Layout>
        )
}
export default Homepage;