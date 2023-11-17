import React from "react";
import { 
    Layout,
    Row, 
    Col
} from 'antd';

import Socials from "../Socials/social";
import Banner_car from '../../assets/images/car-banner.png';
import Logo from '../../assets/images/logo.svg';

const { Footer } = Layout;


function FooterPage({defaultTheme}) {

    return (
        <>
        <Footer className="footers-landing">
            <Row className="container" align="middle" justify="center">
                <Col xs={24} xl={8} className="footer-box-logo">
                    <img src={Logo} alt="" />
                    <p className="text-white font-small">RaceStarter is a MultiChain Decentralized Finance platform with a Web3 ecosystem. At RaceStarter, we support create and exchange value.</p>
                    <Socials tw="#" discord="#" telegram="#" linkedin="#"></Socials>
                </Col>
                <Col span={16} xs={24} xl={16}>
                    <div className="footers-menu-wrap">
                        <div className="footers-menu-item">
                            <span className="footers-menu-item-title text-primary">
                                Developers
                            </span>
                            <ul>
                                <li>
                                    <a href="#">Roadmap</a>
                                </li>
                                <li>
                                    <a href="#">Litepaper</a>
                                </li>
                                <li>
                                    <a href="#">Pitch Deck</a>
                                </li>
                                <li>
                                    <a href="#">Whitepaper</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footers-menu-item">
                            <span className="footers-menu-item-title text-primary">
                                RaceStarter Token
                            </span>
                            <ul>
                                <li>
                                    <a href="#">What is RaceStarter?</a>
                                </li>
                                <li>
                                    <a href="#">How to buy $RS</a>
                                </li>
                                <li>
                                    <a href="#">Token Metrics</a>
                                </li>
                                <li>
                                    <a href="#">Vesting Schedule</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footers-menu-item">
                            <span className="footers-menu-item-title text-primary">
                                About Us
                            </span>
                            <ul>
                                <li>
                                    <a href="#">Overview</a>
                                </li>
                                <li>
                                    <a href="#">Team</a>
                                </li>
                                <li>
                                    <a href="#">Partners</a>
                                </li>
                                <li>
                                    <a href="#">Blogs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Footer>
        </>
    );
}

export default FooterPage;
