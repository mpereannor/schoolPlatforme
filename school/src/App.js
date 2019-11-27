import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormikLogin from './components/Login';
import FormikRegister from './components/Register';
import Homepage from './components/Homepage';
import Game from './components/Game';
import { Typography, Layout } from 'antd';

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
          </Content>
        </Layout>
      </Layout>
      {/* <Homepage/>
      <Game/> */}
      {/* <FormikLogin/> */}
      {/* <FormikRegister/> */}
    </div>
  );
}

export default App;
