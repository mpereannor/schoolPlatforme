import React from 'react';
import FormikLogin from './Login';
import FormikRegister from './Register';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider, Row, Col } = Layout;

const Homepage = props => { 
    return (
            
        <section className= 'forms'>
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                    <Breadcrumb.Item>Logout</Breadcrumb.Item>
                </Breadcrumb>
             <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                 Content
            <div className = 'main-forms'>
                <Row gutter={[16, 16]}>
                    <Col span={2}
                    
                    />
                    <Col span={2} />
                </Row>
                <FormikRegister/>
                <FormikLogin/>
            </div>
            </div>
            </Content>
        </Layout>
          

        </section> 
    )
}

export default Homepage;