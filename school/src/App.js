import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormikLogin from './components/Login';
import FormikRegister from './components/Register';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
import { Typography, Layout } from 'antd';
import "antd/dist/antd.css";
import './App.css';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>

        <Header>
          <Navbar/>
        </Header>

        <Layout>

          <Content>
            <Route exact path='/' component={Homepage}/>
            <Route path='/game' component={Game}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Content>

        </Layout>
        
      </Layout>
    </div>
  );
}

export default App;
