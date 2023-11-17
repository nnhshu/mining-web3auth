import React, { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col,
    Progress,
    Radio,
    Collapse
} from 'antd';

import { useLocation, useParams } from 'react-router';


import { FiChevronDown } from "react-icons/fi";

import styled from 'styled-components';

import s19 from '../../assets/images/miner/s19p.png';
import doge from '../../assets/images/tech_partners/Dogecoin.png';
import btc from '../../assets/images/tech_partners/btc.png';

const { Panel } = Collapse;

function BuildHashRateDetail() {

    const {id} = useParams();
    const s19pro = {
        power : '3250W',
        efficiency : '$0.09/kWh - 29.50 W/Th',
        algorithm : 'SHA-256',
        release_date : 'Jun 2020',
        pool_hashrate : '3.73 MS/s',
        network_hashrate : '6.17 MS/s',
        mining_block : 772203,
        static_revenue_rate: '0.5%',
        electricity_fee: '$0.0531/T/D',
        hashrate_fee: '$0.0531 T/D',
        currency: 'btc'
    };

    const l7 = {
        power : '3260W',
        efficiency : '$0.28/kWh - 360.22 W/Gh',
        algorithm : 'Scrypt',
        release_date : 'Nov 2021',
        pool_hashrate : '3.73 MS/s',
        network_hashrate : '6.17 MS/s',
        mining_block : 772203,
        static_revenue_rate: '0.5%',
        electricity_fee: '$0.0531/T/D',
        hashrate_fee: '$0.0531 T/D',
        currency: 'doge'
    }

    const [content, setContent] =  useState(s19pro); 


    useEffect(() => {
        if(id === 's19'){
            setContent(s19pro);
        } else{
            setContent(l7);
        }
    }, [id])

    return (
        <section className="product-page">
            <Row justify="space-around" align="stretch" className="bg-section" gutter={24}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} className="text-left pt-5">
                    <div className="product-image">
                        <img src={s19} alt="" />
                        <div className="product-sold">
                            <Progress 
                                percent={50} 
                                status="active"
                                strokeColor={{
                                    '0%': '#f8a41b',
                                    '100%': '#ec8532',
                                }}
                                format={(percent) => `${percent}% Sold`}
                            />
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} className="text-left pt-5">
                    <div className="product-sumary">
                        <h1>{id === 's19' ?  'Antminer S19 Pro/120Days/50T/BTC-Classic Cloud Hashrate Plan' : 'Antminer L7 9050Mh-Classic Cloud Hashrate Plan'}</h1>
                        <hr />
                        <span>Hashrate Fee: <strong className="text-primary">{content.hashrate_fee}</strong></span>
                        <span>Electricity Fee: <strong className="text-primary">{content.electricity_fee}</strong></span>
                        <span>Currency: <strong className="text-primary text-uppercase"><img src={content.currency === 'btc' ? btc : doge} alt="" /> {content.currency}</strong></span>
                        <div className="product-amount">
                            <span>Hashrate Amount:</span>
                            <Radio.Group defaultValue="" buttonStyle="solid" className="rate-style">
                                <Radio.Button value="2">50T</Radio.Button>
                                <Radio.Button value="4">100T</Radio.Button>
                                <Radio.Button value="6">200T</Radio.Button>
                                <Radio.Button value="8">500T</Radio.Button>
                            </Radio.Group>
                        </div>
                        <hr />
                        <button type="button" className="btn-gradient"><span>BUILD NOW</span></button>
                        <ul>
                            <li>
                                Hashrate NFT and post-sales services provided by BepMining will self-run, the estimate will start after 24 hours.
                            </li>
                            <li>
                                The plan will be operated in mining farms compliantly set up at Tydal, Norway. Cloud Hashrate packages provide an easy and efficient mining solution for organizational customers. You can enjoy high-performance mining capabilities just by owning hashrate NFT, running or maintaining your own NFT mining equipment. In addition, Cloud-based hashrate NFT packages give you flexibility in choosing your preferred mining model, NFT tenure, and Hashrate capacity. You can start mining with your own Hashrate NFT and then monitor your mining results with just a few clicks at any time. Hashrate NFT is limited, so hurry and own one for yourself and start mining now.
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <h1 className="text-white">The perfect mining solution for long-term institutional customers</h1>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <p className="text-white">Cloud Hashrate plans provide an easy and efficient mining solution for institutional customers. You can enjoy high-performance mining without owning, running or maintaining your own mining equipment. Additionally, cloud hashrate plans provide you with the flexibility of choosing your preferred miner model, plan duration, and hashrate capacity. You can start mining with a few clicks and monitor the mining outputs any time.</p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <FiChevronDown size={20} />}
                        expandIconPosition="end"
                        className="product-tab"
                    >
                        <Panel header={id === 's19' ? "Antminer S19Pro Info" : "Antminer L7 9050Mh Info"} key="1">
                            <p className="text-white">A whole new upgrade, reaching the top of computing power</p>
                            <div className="grid three">
                                <div className="item">
                                    <span className="label">Pool Hashrate:</span>
                                    <span className="value">{content.pool_hashrate}</span>
                                </div>
                                <div className="item">
                                    <span className="label">Power:</span>
                                    <span className="value">{content.power}</span>
                                </div>
                                <div className="item">
                                    <span className="label">Efficiency:</span>
                                    <span className="value">{content.electricity_fee}</span>
                                </div>
                            </div>
                        </Panel>
                    </Collapse>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['2']}
                        expandIcon={({ isActive }) => <FiChevronDown size={20} />}
                        expandIconPosition="end"
                        className="product-tab"
                    >
                        <Panel header="Plan Details" key="2">
                            <div className="grid four">
                                <div className="item">
                                    <span className="label">Plan Mode:</span>
                                    <span className="value">Classic</span>
                                </div>
                                <div className="item">
                                    <span className="label">Estimated starting time:</span>
                                    <span className="value">24 hrs</span>
                                </div>
                                <div className="item">
                                    <span className="label">Plan Duration:</span>
                                    <span className="value">120Days</span>
                                </div>
                                <div className="item">
                                    <span className="label">Miner</span>
                                    <span className="value">Antminer S19 Pro</span>
                                </div>
                            </div>  
                            <div className="grid four">
                                <div className="item">
                                    <span className="label">Hashrate Amount:</span>
                                    <span className="value">50TH/s</span>
                                </div>
                                <div className="item">
                                    <span className="label">Currency:</span>
                                    <span className="value">BTC</span>
                                </div>
                                <div className="item">
                                    <span className="label">Payout Pool:</span>
                                    <span className="value">Third-Party Pool</span>
                                </div>
                                <div className="item">
                                    <span className="label">Payout Cycle:</span>
                                    <span className="value">Daily the soonest</span>
                                </div>
                            </div>  
                            <div className="grid four">
                                <div className="item">
                                    <span className="label">Runtime:</span>
                                    <span className="value">100%</span>
                                </div>
                            </div>                      
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin-normal" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="text-left">
                    <h1 className="text-white mb-5">Frequently asked questions</h1>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <FiChevronDown size={20} />}
                        expandIconPosition="end"
                        className="product-tab"
                    >
                        <Panel header="1. What are the components of the cost of the computing plan?" key="1">
                            <p className="text-white">
                                The cost of the computing plan includes two parts: the cost of purchasing the NFT (referred to as the hashrate NFT fee) and the cost of electricity and maintenance (referred to as the electricity fee). When ordering, you need to pay the hashrate NFT fee and pre-pay the first electricity fee (at least 10 days), the second electricity fee needs to be paid in advance before the first electricity fee ends and so on. The electricity fee will affect the operation of the Plan and the mining output.
                            </p>
                        </Panel>
                        <Panel header="2. How to calculate the revenue of the mining plan?" key="2">
                            <p className="text-white">
                                Bepmining does not provide any revenue guarantees in the future of the plan, but provides a static calculation method for reference. The static calculation method assumes that the future cryptocurrency price, the difficulty of the entire network, and the block reward are static and do not change to estimate mining revenue and other indicators.
                            </p>
                        </Panel>
                        <Panel header="3. What is the process to buy and use NFT?" key="3">
                            <p className="text-white">
                                The process of buying and using NFTs is as follows: connect to a defi wallet → purchase NFTs using USDT → select a hashrate power package → activate your NFTs → select a cryptocurrency → select the first electricity date → select TH/s → start mining immediately. Estimating your plan: Estimate your NFT → Transfer to the NFT group → Return on investment.
                                The mining group needs to be selected when placing an order. 
                            </p>
                        </Panel>
                        <Panel header="4. What is the difference between different mining groups?" key="4">
                            <p className="text-white">
                                Different mining groups have different minimum payout thresholds, revenue distribution methods, and supported mining cryptocurrencies.
                            </p>
                        </Panel>
                        <Panel header="5. Can I buy multiple mining packages at the same time?" key="5">
                            <p className="text-white">
                                Yes, you can buy multiple packages at the same time. However, because the Hashrate power NFT is limited by the operation of the proof-of-work algorithm, there will be limits on ownership rights.
                            </p>
                        </Panel>
                        <Panel header="6. How long will it take for me to recover my investment?" key="6">
                            <p className="text-white">
                                The time needed to recover your investment depends on the BTC exchange rate on the market, not to mention the hashrate performance you currently own.
                            </p>
                        </Panel>
                        <Panel header="7. What is the market demand and Bepmining's ability to meet that demand?" key="7">
                            <p className="text-white">
                                Currently, Bepmining is striving to expand its equipment to perform the best possible POW, with limited Hashrate NFT. We will frequently upgrade our infrastructure to increase performance and create more Hashrate NFT.
                            </p>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin-normal" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="text-left">
                    <h1 className="text-white mb-5">Disclaimers</h1>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="product-disc text-white">
                        <h3>Legal statement:</h3>
                        <p>The services provided by Bepmining are not intended for the following individuals (each, a "Restricted Person"): </p>
                        <p>1. residents of the following countries or regions: the United States, mainland China, Crimea, Cuba, Iran, North Korea, and Syria.</p>
                        <p>2. any entity or individual that is subject to current trade sanctions and export compliance laws.</p>
                        <p>3. any entity or individual that is subject to Bepmining's internal risk control and compliance policies. The list above is not exhaustive. Before using the services provided by Bepmining, please confirm that you are not a Restricted Person. In the event that you are a Restricted Person and you use the services provided by Bepmining, any legal risks or liabilities arising from or related to such use will be solely borne by you.</p>
                        <h3>No Refund</h3>
                        <p>As per our terms of use, once an order has been paid for, it cannot be changed or refunded.</p>
                        <h3>Pricing</h3>
                        <p>All products or NFTs from Bepmining are priced in USDT. Products or NFTs may be paid for in multiple types of digital currency, and the amount paid must follow the real-time exchange rate.</p>
                        <h3>Computer resource fluctuations</h3>
                        <p>Fluctuations in computational power are unavoidable. Bepmining will not be held responsible for fluctuations due to unstable network, network errors, mining performance, etc.</p>
                        <h3>Uncontrollable risks</h3>
                        <p>BepMining will not be held responsible for any results arising from uncontrollable risks, including but not limited to natural disasters such as floods, volcanic eruptions, earthquakes, landslides, fires, storms, other weather events that may be deemed as unforeseeable or higher than expected by the government. actions or directives, power grid failures at the city level as well as actions or social conflicts such as war, revolution, riots, etc.</p>
                        <h3>Proper use of computer power</h3>
                        <p>Any behavior that abuses the computer power purchased on BepMining, such as network attacks, is prohibited. BepMining reserves the right to revoke your computer power package if any illegal activities occur.</p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default BuildHashRateDetail;
