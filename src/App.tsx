import {Link, Route, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, TopGainsTopLosses, Cryptocurrencies, CryptoDetails, News  } from './components'

import './App.css'

function App() {

  return (
    <>
     <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage/>}/>           
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>             
              <Route path="/top-gains-losses" element={<TopGainsTopLosses/>}/>
              <Route path="/crypto/:uuid" element={<CryptoDetails/>}/>
              <Route path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
      
        <div className="footer" >
          <Typography.Title level={5} style={{color: 'white', textAlign: "center" }}>
            CryptoCode <br /> 
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/top-gains-losses">Top Gains/losses</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
