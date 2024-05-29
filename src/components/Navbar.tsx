import React, {useState, useEffect} from 'react';
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import Icon from '../assets/image/cryptopia.png'

import {v4 as uuidv4 } from 'uuid'

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    },[])

    useEffect(() => {
        screenSize < 768 ? setActiveMenu(false) : setActiveMenu(true)
       
    },[screenSize])

    return (
        <div className='nav-container'>
            <div className="logo-container">
                <img className='nav-logo' src={Icon} width={300} alt="icon" />
                <Typography.Title level={2} className='logo' >
                    <Link to="/">Cryptopia</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu) }>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                            <Menu theme='dark'>
                            <Menu.Item icon={<HomeOutlined/>} key={uuidv4()}>
                                <Link to='/'>Home</Link>
                            </Menu.Item>
                            <Menu.Item icon={<FundOutlined/>} key={uuidv4()}>
                                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                            </Menu.Item>
                            <Menu.Item icon={<MoneyCollectOutlined/>} key={uuidv4()}>
                                <Link to='/top-gains-losses'>Top Gains/Losses</Link>
                            </Menu.Item>
                            <Menu.Item icon={<BulbOutlined/>} key={uuidv4()}>
                                <Link to='/news'>News</Link>
                            </Menu.Item>
                        </Menu>
            )}

        </div>
    )
}

export default Navbar
