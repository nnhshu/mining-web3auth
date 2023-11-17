import React from "react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../utils/connectors";
import { Typewriter } from 'react-simple-typewriter';

import {
    Row,
    Col,
    Collapse
} from 'antd';

import styled from 'styled-components';

import { FiChevronDown } from "react-icons/fi";

import faq from '../../assets/images/icons/faq.png';

const Image = styled.div`
    >img{
        width: 100%;
    }
`
const { Panel } = Collapse;

function Faqs() {

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={12} className="text-left pt-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['FAQ']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="text-white">If you could not find an answer to your questions,please contact our customer support.</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} className="text-left pt-5">
                    <Image className="top-img">
                        <img src={faq} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="faq-content">
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <FiChevronDown size={20} />}
                            expandIconPosition="end"
                        >
                            <Panel header="What network is it linked to?" key="1">
                                <p className="text-white">We are using the Binance Smart Chain (BSC) network. It is currently a user-friendly and low-cost network.</p>
                            </Panel>
                            <Panel header="Which time zone does the website base on?" key="2">
                                <p className="text-white">Data is collected, recorded and reported based on the International UTC Time, unless otherwise specified.</p>
                            </Panel>
                            <Panel header="Can I use the content (screen images, data, etc.) for one of my personal or commercial projects? " key="3">
                                <p className="text-white">The project is currently on a decentralized platform, so we do not collect any personal or organizational information. Therefore, if you use images of the project for promotional purposes, it will be approved. But we will not be responsible if an individual or third party uses it for commercial purposes without the project's permission.</p>
                            </Panel>
                            <Panel header="Can I buy multiple mining packages at the same time?" key="4">
                                <p className="text-white">Of course, you can. Because Hashrate power NFT is limited by the activity of the proof of work cycle, there will be limits on ownership.</p>
                            </Panel>
                            <Panel header="What do we need to do before we can buy the mining packages?" key="5">
                                <p className="text-white">Prepare a metamask or trust wallet, and have enough USDT on the Binance Smart Chain to execute the build Hashrate power.</p>
                            </Panel>
                            <Panel header="What should I do when my mining package is almost expired?" key="6">
                                <p className="text-white">You can either reactivate your Hashrate NFT or return it to the pool for a refund.</p>
                            </Panel>
                            <Panel header="How long will it take for me to recover my investment?" key="7">
                                <p className="text-white">The time it takes to recover your investment depends on the BTC exchange rate in the market, not to mention the hashrate performance that you currently own.</p>
                            </Panel>
                            <Panel header="What is the market demand and Bepmining's ability to meet that demand?" key="8">
                                <p className="text-white">Currently, Bepmining is working to expand its equipment to execute POW as best as possible, Hashrate NFT is limited. We will frequently upgrade our infrastructure to increase capacity and produce more Hashrate NFT.</p>
                            </Panel>
                            <Panel header="Is it legal?" key="8">
                                <p className="text-white">Cryptocurrency cloud mining is evident and legal. It's also 100% secure with our platform. Buy a cloud mining contract and make regular lawful income with small investments. Our goal is to provide a seamless investment experience based on expert project management. We aim to make Bitcoin cloud mining available to anybody without experience with cryptocurrency mining.</p>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Faqs;
