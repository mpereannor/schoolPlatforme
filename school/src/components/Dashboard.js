import React from 'react';
import { Breadcrumb, Menu, Icon, Layout } from 'antd';
import "antd/dist/antd.css";

const { Header, Footer , Sider, Content, Row, Col } = Layout;
const { SubMenu } = Menu;

const Dashboard = props => { 
return ( 
  <Layout>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="laptop" />
                Dashboard
              </span>
            }
          >
            <Menu.Item key="9">Students</Menu.Item>
            <Menu.Item key="10">Teachers</Menu.Item>
            <Menu.Item key="11">Parents</Menu.Item>
            <Menu.Item key="12">Attendance</Menu.Item>
            <Menu.Item key="13">Exam</Menu.Item>
            <Menu.Item key="14">Hostel</Menu.Item>
            <Menu.Item key="15">Games</Menu.Item>
            <Menu.Item key="16">Account</Menu.Item>
            <Menu.Item key="17">Settings</Menu.Item>
        
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>

        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default Dashboard;