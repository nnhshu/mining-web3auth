import React from "react";
import {
    Row,
    Col
} from 'antd';

import logo from '../../assets/images/logo4.png';

function Miracle() {

    return (
        <>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="fastRegister">
                        <div className="content">
                            <div className="title-page">
                                <h1>NFT Hashrate <span>is your future miracle.</span></h1>
                            </div>
                            <button type="/button" className="btn-gradient"><span>Get Started</span></button>
                        </div>
                        <div className="data-img">
                            <img src={logo} alt="coin" />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Miracle;
