import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col
} from 'antd';

import styled from 'styled-components';

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import { Player } from 'video-react';

import Miracle from "../../components/Miracle";

import "../../../node_modules/video-react/dist/video-react.css"; // import css

import logo from '../../assets/images/logo4.png';
import cloud from '../../assets/images/icons/cloud.png';
import nft from '../../assets/images/icons/nft.png';
import ico1 from '../../assets/images/icons/home-1.png';
import ico2 from '../../assets/images/icons/home-2.png';
import ico3 from '../../assets/images/icons/home-3.png';
import ico4 from '../../assets/images/icons/home-4.png';

import video_2 from '../../assets/videos/video_2.mp4';
import video_3 from '../../assets/videos/video_3.mp4';


const Image = styled.div`
    >img{
        width: 100%;
    }
`

function DashBoard() {

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <div className="video-top">
                    <Player playsInline muted autoPlay loop>
                        <source src={video_3} />
                    </Player>
                </div>
                <Col xs={24} sm={24} md={24} lg={24} xl={18} className="text-left p-5">
                    <div className="title-page title-page-custom">
                        <h1>
                            <Typewriter
                                words={['WEB3 DEFI YOUR MINING WITH BEPMINING']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />    
                        </h1>
                        <p className="text-white">Our mining machine is set up and ready to go. With just a few clicks and linking to your metamask wallet on the Binance Smart Chain network, you can start generating a hashrate equivalent to 1 NFT to mine the industry's leading cryptocurrency today !</p>
                        <Link to="/build-hashrate" className="btn-gradient"><span>Get Started</span></Link>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={6} className="text-left pt-5">
                    <Image>
                        <img src={logo} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin p-5" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="cloud-container">
                        <div className="cloud-content">
                            <div className="title-page">
                                <h1><span>CLOUD</span> HASHRATE</h1>
                            </div>
                            <p className="text-white">
                                With our advanced cryptocurrency mining technology and ASIC and GPU mining tools, we handle the repetitive mining processes for you, allowing you to focus on building your mining portfolio. By connecting with Defi tools and utilizing the Binance Smart Chain network through smart contracts, we make it extremely easy for you to access and mine cryptocurrency globally with the carefully curated coins and portfolios we have selected.
                            </p>
                        </div>
                        <div className="cloud-img">
                            <img src={cloud} alt="" width="100%" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin p-5" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="nft-container">
                        <div className="nft-img">
                            <img src={nft} alt="" width="100%" />
                        </div>
                        <div className="nft-content">
                            <div className="title-page">
                                <h1><span>NFT</span> HASHRATE</h1>
                            </div>
                            <p className="text-white">
                                Hashrate power will be converted into NFTs, with each NFT representing your mining portfolio. When you hold an NFT, you also hold the cryptocurrency mining tool. You can trade and exchange these NFTs on our marketplace, making it easy for you to manage your mining portfolio without having to worry about complex management platforms.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin service_advantages p-5" gutter={24}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="title-page">
                        <h1><span>SERVICE</span> ADVANTAGES</h1>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            <img src={ico1} alt="" />
                            {/* <RiShieldFlashLine size={48} /> */}
                        </div>
                        <div className="box-text">
                            <h3>One-click mining with Defi</h3>
                            <p>Experience a one-stop management system for maximum efficiency and revenue.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            <img src={ico2} alt="" />
                            {/* <AiOutlineCloudSync size={48} /> */}
                        </div>
                        <div className="box-text">
                            <h3>Defi Payment & NFT Builder</h3>
                            <p>Quick and easy deposits and withdrawals with web3 defi technology. Use BSC network NFT technology to quickly and easily build NFTs.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            <img src={ico3} alt="" />
                            {/* <IoWalletOutline size={48} /> */}
                        </div>
                        <div className="box-text">
                            <h3>Transparent payments</h3>
                            <p>Mining withdrawals make direct payouts to your digital wallet, conveniently and transparently.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                    <div className="box-icons-wrap">
                        <div className="box-icon">
                            <img src={ico4} alt="" />
                            {/* <AiOutlineClockCircle size={48} /> */}
                        </div>
                        <div className="box-text">
                            <h3>Real-Time Reports Hashrate Profit</h3>
                            <p>Report every day since activating NFT Hashrate.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin p-5" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <div className="title-page">
                        <h1>DATA <span>CENTER</span></h1>
                    </div>
                    <p className="text-white">
                        We started our data business in 2016, but began building our infrastructure, equipment, and maintenance in 2019. It was a very difficult time in the business due to external circumstances. After developing some investment programs in various sectors in the crypto market, we are now able to build a fully compliant data center in Tydal, Norway in 2022. In the future, we will develop more data centers in other areas.
                    </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <div className="data-img data-video">
                        <Player playsInline muted>
                            <source src={video_2} />
                        </Player>
                    </div>
                </Col>
            </Row>
            <Miracle />
        </>
    )
}

export default DashBoard;
