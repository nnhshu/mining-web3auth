import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col
} from 'antd';

import styled from 'styled-components';
import { Player } from 'video-react';

import StepPlan from "../../components/StepPlan";

import Partner_1 from '../../assets/images/tech_partners/2-miners-pool.png';
import Partner_2 from '../../assets/images/tech_partners/btgpool.png';
import Partner_3 from '../../assets/images/tech_partners/f2pool.png';
import Partner_4 from '../../assets/images/tech_partners/antpool.png';
import Partner_5 from '../../assets/images/tech_partners/btccom.png';

import logo from '../../assets/images/logo4.png';

import { AiOutlineGlobal, AiOutlineDollarCircle } from "react-icons/ai";
import { GiMining, GiDiamondTrophy } from "react-icons/gi";

import video_1 from '../../assets/videos/video_1.mp4';


const Image = styled.div`
    >img{
        width: 100%;
    }
`

const AboutItem = styled.div`
    position: relative;
    &:before {
        content: "";
        width: 96px;
        height: 96px;
        display: block;
        margin-bottom: 40px;
        background-position: 0 0;
        background-image: url(https://qubithashes.com/styles/img/icon_01.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
`



function AboutUs() {

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <div className="video-top">
                    <Player playsInline muted autoPlay loop>
                        <source src={video_1} />
                    </Player>
                </div>
                <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left p-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['ABOUT BEPMINING']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="text-white">We are the world's leading digital mining service provider for popular PoW cryptocurrencies by combining with EVM Blockchain.</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} className="text-left p-5">
                    <Image>
                        <img src={logo} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin service_advantages" gutter={24}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-5">
                    <div className="title-page about-title">
                        <h1>We provide a digital coin mining solution using web3 technology, which is fast and convenient.</h1>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin-normal service_advantages" gutter={24}>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            {/* <img src="https://qubithashes.com/styles/img/icon_01.png" alt="" /> */}
                            <AiOutlineGlobal size={48} />
                        </div>
                        <div className="box-text">
                            <h3>We apply web3 technology</h3>
                            <p>You do not need to install any software or hardware, we will set that up through a smart contract.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            {/* <img src="https://qubithashes.com/styles/img/icon_02.png" alt="" /> */}
                            <GiDiamondTrophy size={48} />
                        </div>
                        <div className="box-text">
                            <h3>Proof of work crypto currencies</h3>
                            <p>We offer a variety of top cryptocurrencies that can be mined through our farm network.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            {/* <img src="https://qubithashes.com/styles/img/icon_04.png" alt="" /> */}
                            <GiMining size={48} />
                        </div>
                        <div className="box-text">
                            <h3>Mining Farms</h3>
                            <p>We always strive to set up and expand our farm network across many countries.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            {/* <img src="https://qubithashes.com/styles/img/icon_04.png" alt="" /> */}
                            <AiOutlineDollarCircle size={48} />
                        </div>
                        <div className="box-text">
                            <h3>Mining Services</h3>
                            <p>Our service will help you save time to focus on setting up your investment portfolio.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-5">
                    <div className="about-container">
                        <div className="about-content">
                            <div className="title-page">
                                <h1><span>Our powerful</span> operating platform</h1>
                            </div>
                            <p className="text-white">
                                As a shared mining tool platform, BepMining has a plan to develop a strategy for collecting and updating top mining tools. With us, you will benefit from features such as:
                            </p>
                            <div className="static-content">
                                <ul>
                                    <li>Direct payment from smart contract.</li>
                                    <li>Verification and transparency.</li>
                                    <li>Security.</li>
                                    <li>Convenience.</li>
                                    <li>24/7 on-chain operation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="about_steps">
                        <div className="title-page">
                            <h1>HOW TO START <span>EARNING</span></h1>
                        </div>
                        <div className="content">
                            <AboutItem className="item">
                                <h3 className="text-primary">Connect defi wallet</h3>
                                <div className="step">
                                    <p>Step</p>
                                    <span>01</span>
                                </div>
                            </AboutItem>
                            <AboutItem className="item">
                                <h3 className="text-primary">Select your hashrate power plan</h3>
                                <div className="step">
                                    <p>Step</p>
                                    <span>02</span>
                                </div>
                            </AboutItem>
                            <AboutItem className="item">
                                <h3 className="text-primary">Active your nft</h3>
                                <div className="step">
                                    <p>Step</p>
                                    <span>03</span>
                                </div>
                            </AboutItem>
                            <AboutItem className="item">
                                <h3 className="text-primary">Start earning</h3>
                                <div className="step">
                                    <p>Step</p>
                                    <span>04</span>
                                </div>
                            </AboutItem>
                        </div>
                    </div>
                </Col>
            </Row> */}
            <StepPlan title={<h1>HOW TO START <span>EARNING</span></h1>} />
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-5">
                    <div className="partners">
                        <div className="title-page">
                            <h1><span>Pool mining</span> partner</h1>
                        </div>
                        <div className="content">
                            <div className="item">
                                <img src={Partner_1} alt="" />
                            </div>
                            <div className="item">
                                <img src={Partner_2} alt="" />
                            </div>
                            <div className="item">
                                <img src={Partner_3} alt="" />
                            </div>
                            <div className="item">
                                <img src={Partner_4} alt="" />
                            </div>
                            <div className="item">
                                <img src={Partner_5} alt="" />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default AboutUs;
