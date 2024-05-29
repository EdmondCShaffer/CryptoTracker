import React, { useState } from 'react';
import { Row, Select, Col, Typography, Card } from 'antd';
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const {Text, Title} = Typography;
const { Option } = Select;
const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'
const News = ({ simplified }) => {

    const [newsCategory, setNewsCategory] = useState('coindesk')
    const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory})
    // const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 25 })
    // TODO: Add BSC news back once the api is fixed 
    const newsCompanys = ['Bitcoinist','Coindesk', 'Cointelegraph', 'Decrypt', 'The Guardian']

    const handleChange = (value) => {
        // value === 'BSC News' ? setNewsCategory('bsc') : 
        setNewsCategory(value.trim().toLowerCase())
    }
    const newsData = simplified ? cryptoNews?.data.slice(0,6) : cryptoNews?.data.slice(0, 24)

    if(!cryptoNews) return 'Loading...'
    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select 
                            className='select-news'
                            showSearch
                            placeholder='Select a news source'
                            optionFilterProp='children'
                            onChange={handleChange}
                        >
                            {newsCompanys.map((company) => <Option value={company}>{company}</Option>)}
                        </Select>
                    </Col>
                )}
                {newsData.map((article, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className='news-card'>
                            <a href={article.url} target='_blank' rel='noreferrer'>
                                <div className="news-image-container">
                                    <Title className='news-title' level={4}>{article.title}</Title>
                                    <img src={article?.thumbnail || demoImage} alt="article" style={{ maxWidth: '200px', maxHeight: '100px'}} />
                                </div>
                                <p>{article.description > 100 ? `${article.description.substring(0, 100)} ...` : article.description}</p>
                                <Text>{moment(article.createdAt).startOf("day").fromNow()}</Text>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}



export default News;