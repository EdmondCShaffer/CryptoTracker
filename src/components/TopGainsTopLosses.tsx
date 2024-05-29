
import React, { useState } from 'react';
import { Col, Row, Card, Typography, Select } from 'antd';
import { useGetCryptoChangeQuery } from '../services/cryptoApi';
import { time } from '../utils/constants';

const { Title, Text } = Typography;
const { Option } = Select; 

const TopGainsTopLosses = () => {
    const [timePeriod, setTimePeriod] = useState('24h');
    const count = 10;

    const { data: cryptoChangeTopGainers, isLoading: isLoadingTopGainers } = useGetCryptoChangeQuery({ timePeriod, orderDirection: 'desc', count });
    const { data: cryptoChangeTopLosers, isLoading: isLoadingTopLosers } = useGetCryptoChangeQuery({ timePeriod, orderDirection: 'asc', count });

    if (isLoadingTopGainers || isLoadingTopLosers) return 'Loading...';

    return (
        <>            
        <Select
            defaultValue='7d'
            className='select-timeperiod'
            placeholder='Select Time Period'
            onChange={(value) => setTimePeriod(value)}
        >
            {time.map((date) => (<Option key={date}>  {date}
            </Option>))}
        </Select>
            <Title>Top Gainers</Title>
            <Row gutter={[24, 24]}>
                {cryptoChangeTopGainers?.data.coins.map((coin, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card>
                            <Title>{coin.name}</Title>
                            <Text className='gainer'>{coin.change}%</Text>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Title>Biggest Losers</Title>
            <Row gutter={[24, 24]}>
                {cryptoChangeTopLosers?.data.coins.map((coin, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card>
                            <Title>{coin.name}</Title>
                            <Text className='loser'>{coin.change}%</Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default TopGainsTopLosses;