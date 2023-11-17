import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col,
    Progress,
    Radio,
    Collapse
} from 'antd';

import { FiChevronDown } from "react-icons/fi";

import styled from 'styled-components';

import s19 from '../../assets/images/miner/s19p.png';

const { Panel } = Collapse;

function ProductMine() {

    return (
        <section className="product-page">
            <Row justify="space-around" align="stretch" className="bg-section" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} className="text-left pt-5">
                    <div className="product-sumary">
                        <h1>Antminer S19 Pro/120Days/50T/BTC-Classic Cloud Hashrate Plan</h1>
                        <hr />
                        <span>Hashrate Fee: <strong className="text-primary">$36.00</strong></span>
                        <span>Electricity Fee: <strong className="text-primary">$2.6550/Day</strong></span>
                        <span>Currency: <strong className="text-primary">BTC</strong></span>
                        <div className="product-amount">
                            <span>Amount</span>
                            <Radio.Group defaultValue="" buttonStyle="solid" className="rate-style">
                                <Radio.Button value="2">50 TH/s</Radio.Button>
                                <Radio.Button value="4">100 TH/s</Radio.Button>
                                <Radio.Button value="6">200 TH/s</Radio.Button>
                                <Radio.Button value="8">500 TH/s</Radio.Button>
                            </Radio.Group>
                        </div>
                        <hr />
                        <button type="button" className="btn-gradient"><span>BUILD NOW</span></button>
                        <ul>
                            <li>
                                Hashrate and after-sales services provided by self-runBitdeer, Estimated starting in 24 hrs.
                            </li>
                            <li>
                                The Plan will be Running in Compliance Mining Farms Loacted in Texas, Washington,Tennessee US and in Norway
                            </li>
                        </ul>
                    </div>
                </Col>
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
                        <Panel header="Antminer S19Pro Info" key="1">
                            <p className="text-white">A whole new upgrade, reaching the top of computing power</p>
                            <div className="grid three">
                                <div className="item">
                                    <span className="label">Hashrate:</span>
                                    <span className="value">110TH/s</span>
                                </div>
                                <div className="item">
                                    <span className="label">Power:</span>
                                    <span className="value">3250W</span>
                                </div>
                                <div className="item">
                                    <span className="label">Efficiency:</span>
                                    <span className="value">29.5J/T</span>
                                </div>
                            </div>
                        </Panel>
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
                                    <span className="label">Amount:</span>
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
                        <Panel header="1. How many parts does the Computing Power Plan's cost consist of ?" key="1">
                            <p className="text-white">
                                The cost of Computing Power Plan consists of two parts: computing power service fee (abbreviated as hashrate fee) and electricity and operation and maintenance fees (abbreviated as electricity fee). When placing an order, you need to pay the hashrate fee and prepay the first electricity fee (at least 10 days ), the second electricity fee needs to be paid in advance before the first electricity fee is exhausted, and so on, the interruption of the electricity fee will affect Plan's operation and mining output.
                            </p>
                        </Panel>
                        <Panel header="2. How to calculate the mining revenue of the Plan?" key="2">
                            <p className="text-white">
                                Bitdeer does not make any commitment to the future revenue of the Plan, but provides a static calculation method as a reference. The static calculation method assumes that the future cryptocurrency price, the difficulty of the entire network, and the block reward are all static and unchanged to estimate the mining revenue and other indicator data.
                            </p>
                        </Panel>
                        <Panel header="3. What is the purchase process of Computing Power Plan?" key="3">
                            <p className="text-white">
                                The purchase process is as follows: select a Plan → select cryptocurrency → select mining pool → add wallet address → select the first electricity days → select subsequent payment method → ​​submit order → select payment method → ​​complete payment in full within 6 hours.
                            </p>
                        </Panel>
                        <Panel header="4. Mining pool needs to be selected when placing an order. What is the difference between different mining pools?" key="4">
                            <p className="text-white">
                                Different mining pools are different in terms of minimum payment threshold, revenue distribution method, and supported mining cryptocurrencies.
                            </p>
                        </Panel>
                        <Panel header="5. Can I switch the mining pool and wallet address after the Plan starts mining?" key="4">
                            <p className="text-white">
                                After the Plan starts to mine, the Classic Mode Plan can switch both the mining pool and the address. The Accelerator Mode Plan can switch the address but you cannot switch the mining pool now. You can go to "My Hashrate → Hashrate List → Hashrate details page" to operate.
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
                        <h3>Legal Statement</h3>
                        <p>The services provided by Bitdeer are not available to the following (each, a "Restricted Person"): 1. residents in the following countries or regions: the United States, Mainland China, Crimea, Cuba, Iran, North Korea and Syria; or 2. any entities or individuals that are restricted under applicable trade sanctions and export compliance laws. or 3. any entities or individuals that are restricted under Bitdeer’s compliance obligations and internal risk control policies. The above list is not exhaustive. Before using the services provided by Bitdeer, please confirm that you are not a Restricted Person. In the event that you are a Restricted Person and you use the services provided by Bitdeer, all legal risks and liabilities caused by or arising from such usage shall be entirely borne by you, and Bitdeer shall have the right to refuse to provide services to you, and you shall not be entitled to ask Bitdeer to provide any refund.</p>
                        <h3>Non-Refundable</h3>
                        <p>As specified in our terms of use, once an order has been paid, it is unchangeable and non-refundable.</p>
                        <h3>Pricing</h3>
                        <p>Bitdeer's products are all priced in USD. The products can be paid in numerous digital currencies and the payment amount is subject to the real-time exchange rate.</p>
                        <h3>Computer Power Fluctuations</h3>
                        <p>Fluctuations in computing power are inevitable. Bitdeer will not be responsible for fluctuations caused by unstable networks, network failures, miner performance, etc.</p>
                        <h3>Uncontrollable Risks</h3>
                        <p>Bitdeer will not be responsible for any results that arise from uncontrollable risks, including but not limited t natural disasters such as floods, volcanic eruptions, earthquakes, landslides, fires, storms, other weather events that can be assessed at the unforeseen or higher, government actions or directives, city-level grid power supply incidents as well as social actions or conflicts such as war, strikes, riots, etc.</p>
                        <h3>Fair Use of Computing Power</h3>
                        <p>Any misuse of computing power purchased on Bitdeer, such as attacking a network, is strictly prohibited. Bitdeer reserves the right to revoke your computing power plan if any illegal activity occurs.</p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default ProductMine;
