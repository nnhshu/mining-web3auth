import React, {useState} from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col,
    Slider,
    Radio,
    Modal
} from 'antd';

import styled from 'styled-components';

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    FiX
} from "react-icons/fi";

import Pagination from "../../components/Pagination/Pagination";

import l7 from '../../assets/images/miner/l79500.png';
import logo from '../../assets/images/logo4.png';
import doge from '../../assets/images/tech_partners/Dogecoin.png';
import btc from '../../assets/images/tech_partners/btc.png';
import btc_com from '../../assets/images/tech_partners/btccom.png';
import bg_beep from '../../assets/images/bg_beep.jpg';
import usdt from '../../assets/images/tech_partners/usdt-logo.svg';

import Miracle from "../../components/Miracle";

const Image = styled.div`
    >img{
        width: 100%;
    }
`

const marks = {
    0: {
        style: {
          color: '#FB940A',
        },
        label: <strong>0</strong>,
    },
    500: {
      style: {
        color: '#FB940A',
      },
      label: <strong>500</strong>,
    },
};

const pageSize = 16;

function Market() {

    const [isModalNftVisible, setIsModalNftVisible] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={6} className="text-left">
                    <Image className="top-img">
                        <img src={logo} alt="" />
                    </Image>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={18} className="text-left">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['Marketplace']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />    
                        </h1>
                        <p className="text-white">Hashrate power will be converted as an NFT, this allows users to transfer and trade on the marketplace.</p>
                        {/* <Link to="/build-hashrate" className="btn-gradient"><span>Get Started</span></Link> */}
                        <Link to="#" className="btn-gradient"><span>Coming soon</span></Link>
                    </div>
                </Col>
            </Row>
            <Row justify="flex-start" align="start" className="bg-section d-none" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="text-left pt-5">
                    <div className="filter-page">
                        <h1 className="text-white">Filter</h1>
                        <div className="filter-page-container">
                            <div className="item">
                                <h3>Hashrate Power</h3>
                                <Slider 
                                    range 
                                    defaultValue={[0, 250]}  
                                    step={20}
                                    min={0}
                                    max={500}
                                    marks={marks}
                                />
                            </div>
                            <div className="item">
                                <h3>Currency</h3>
                                <Radio.Group defaultValue="" buttonStyle="solid" className="rate-style filter-type-style">
                                    <Radio.Button value="2">
                                        <span className="d-flex"><img src={btc} />BTC</span>
                                    </Radio.Button>
                                    <Radio.Button value="4">
                                        <span className="d-flex"><img src={doge} />DOGE</span>
                                    </Radio.Button>
                                </Radio.Group>
                            </div>
                            {/* <div className="item rate-wrap">
                                <h3>GPU Sytle</h3>
                                <Radio.Group defaultValue="" buttonStyle="solid" className="rate-style">
                                    <Radio.Button value="2">Nvdia</Radio.Button>
                                    <Radio.Button value="4">Amd</Radio.Button>
                                </Radio.Group>
                            </div> */}
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="text-left pt-5">
                    <div className="market-wrap">
                        <div className="item">
                            <div className="title-icon">
                                <div>
                                    <h2>Antminer L7 9050Mh</h2>
                                </div>
                                <img src={l7} alt="" />
                            </div>
                            <div className="miner-detal">
                                <div className="content">
                                    <div className="field-data">
                                        <span>Token ID</span>
                                        <span>12</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Currency</span>
                                        <div className="icon-24"><img src={doge} alt="" /> <span>DOGE</span></div>
                                    </div>
                                    <div className="field-data">
                                        <span>Days active</span>
                                        <span>120</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Power</span>
                                        <span>3260W</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Algorithm</span>
                                        <span>Scrypt</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Hash Rate Amount</span>
                                        <span>2T</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Manufacturer page</span>
                                        <a target="_blank" rel="noopener" href="https://www.bitmain.com/">Antminer L7 9050Mh</a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="footer">
                                <button to="/product/mine" className="btn-gradient btn" onClick={()=> setIsModalNftVisible(true)}><span>View Detail</span></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="title-icon">
                                <div>
                                    <h2>Antminer L7 9050Mh</h2>
                                </div>
                                <img src={l7} alt="" />
                            </div>
                            <div className="miner-detal">
                                <div className="content">
                                    <div className="field-data">
                                        <span>Token ID</span>
                                        <span>12</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Currency</span>
                                        <div className="icon-24"><img src={doge} alt="" /> <span>DOGE</span></div>
                                    </div>
                                    <div className="field-data">
                                        <span>Days active</span>
                                        <span>120</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Power</span>
                                        <span>3260W</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Algorithm</span>
                                        <span>Scrypt</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Hash Rate Amount</span>
                                        <span>2T</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Manufacturer page</span>
                                        <a target="_blank" rel="noopener" href="https://www.bitmain.com/">Antminer L7 9050Mh</a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="footer">
                                <button to="/product/mine" className="btn-gradient btn" onClick={()=> setIsModalNftVisible(true)}><span>View Detail</span></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="title-icon">
                                <div>
                                    <h2>Antminer L7 9050Mh</h2>
                                </div>
                                <img src={l7} alt="" />
                            </div>
                            <div className="miner-detal">
                                <div className="content">
                                    <div className="field-data">
                                        <span>Token ID</span>
                                        <span>12</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Currency</span>
                                        <div className="icon-24"><img src={doge} alt="" /> <span>DOGE</span></div>
                                    </div>
                                    <div className="field-data">
                                        <span>Days active</span>
                                        <span>120</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Power</span>
                                        <span>3260W</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Algorithm</span>
                                        <span>Scrypt</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Hash Rate Amount</span>
                                        <span>2T</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Manufacturer page</span>
                                        <a target="_blank" rel="noopener" href="https://www.bitmain.com/">Antminer L7 9050Mh</a>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="footer">
                                <button to="/product/mine" className="btn-gradient btn" onClick={()=> setIsModalNftVisible(true)}><span>View Detail</span></button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="title-icon">
                                <div>
                                    <h2>Antminer L7 9050Mh</h2>
                                </div>
                                <img src={l7} alt="" />
                            </div>
                            <div className="miner-detal">
                                <div className="content">
                                    <div className="field-data">
                                        <span>Token ID</span>
                                        <span>12</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Currency</span>
                                        <div className="icon-24"><img src={btc} alt="" /> <span>BTC</span></div>
                                    </div>
                                    <div className="field-data">
                                        <span>Days active</span>
                                        <span>120</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Power</span>
                                        <span>3260W</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Algorithm</span>
                                        <span>Scrypt</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Hash Rate Amount</span>
                                        <span>2T</span>
                                    </div>
                                    <div className="field-data">
                                        <span>Manufacturer page</span>
                                        <a target="_blank" rel="noopener" href="https://www.bitmain.com/">Antminer L7 9050Mh</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <button to="/product/mine" className="btn-gradient btn" onClick={()=> setIsModalNftVisible(true)}><span>View Detail</span></button>
                            </div>
                        </div>
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={1}
                        totalCount={32}
                        pageSize={pageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </Col>
            </Row>
            <Miracle />
            <Modal
                visible={isModalNftVisible}
                onCancel={() => setIsModalNftVisible(false)}
                closeIcon={<FiX />}
                title="Antminer L7 9050Mh"
                centered={true}
                footer=""
                className="modal-wrap"
                width={800}
                style={{backgroundImage: `url(${bg_beep})`}}
            >
                <div className="nft-modal-wrap">
                    <div className="nft-modal-top">
                        <div>
                            <h2>Antminer L7 9050Mh</h2>
                        </div>
                        <img src={l7} alt="" />
                    </div>
                    <div className="nft-modal-container">
                        <div className="d-grid grid-2">
                            <div className="item">
                                <span>Token Id</span>
                                <span>12</span>
                            </div>
                            <div className="item">
                                <span>Specification</span>
                                <span>20.00 TH/s</span>
                            </div>
                            <div className="item">
                                <span>Current Pool</span>
                                <img src={btc_com} alt="" />
                            </div>
                            <div className="item">
                                <span>Accumulated Revenue</span>
                                <div className="text-primary icon-24"><span>0.0000045</span><div className="d-flex icon-24"><img src={usdt} alt="" />USDT</div></div>
                            </div>
                            <div className="item">
                                <span>Status</span>
                                <div className="status-wrap">
                                    <span className="item-stt status-active" type="up"></span>
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nft-modal-footer text-center">
                        <button type="button" className="btn-gradient btn"><span>BUY NOW</span></button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Market;
