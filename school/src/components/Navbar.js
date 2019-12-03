import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

function Navbar () { 
    //const onLogOut = () => { localStorage.clear()}

    return (
        <div className = 'navbar'>
            <Layout className='logo'>
                <Header>
                    <div className='logo'>
                        <Menu
                        mode='horizontal'
                        style={{fontSize: '20px'}}
                    defaultSelectedKeys={['1']}
                        >
                        <Menu.Item key='1'>
                            <NavLink to='/'>
                                Homepage
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to='/game'>
                                Game
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink to='/dashboard'>
                                DashBoard
                            </NavLink>
                        </Menu.Item>
                        {/* <Menu.Item>
                            <NavLink onClick={onLogout} to='/login'>LogOut</NavLink>
                        </Menu.Item> */}
                    </Menu>
                    </div>
                </Header>
            </Layout>

        </div>
    )
}

export default Navbar;