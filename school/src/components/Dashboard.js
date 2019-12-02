import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import "antd/dist/antd.css";

const { Header, Footer , Sider, Content } = Layout;
const { SubMenu } = Menu;

const Dashboard = props => { 
    return ( 
    <div>
        <Layout>
        <Sider>
        <Menu
        // onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline">

        <SubMenu
          key="sub4"
          title={
            <span>
              {/* <Icon type="setting" /> */}
              <span>Dashboard</span>
            </span>
          }>
          <Menu.Item key="9">Students</Menu.Item>
          <Menu.Item key="10">Teachers</Menu.Item>
          <Menu.Item key="11">Parents</Menu.Item>
          <Menu.Item key="12">Attendance</Menu.Item>
          <Menu.Item key="13">Exam</Menu.Item>
          <Menu.Item key="14">Hostel</Menu.Item>
          <Menu.Item key="15">Account</Menu.Item>
          <Menu.Item key="16">Settings</Menu.Item>
        </SubMenu>
        </Menu>
        </Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
        </Layout>
  </div>
        
    )
}

export default Dashboard;