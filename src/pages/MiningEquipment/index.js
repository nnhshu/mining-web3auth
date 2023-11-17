import React, { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';
import styled from 'styled-components';

import {
    Row,
    Col,
    Select
} from 'antd';

import {
    Link
} from "react-router-dom";

import StepPlan from "../../components/StepPlan";

import { MdOutlineFlashOn } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

import mining from '../../assets/images/icons/mining.png';
import s19 from '../../assets/images/miner/s19p.png';
import l7 from '../../assets/images/miner/l79500.png';

const Image = styled.div`
    >img{
        width: 100%;
    }
`


const Item = styled.div`
   margin-top: 20px;
`

const crypto = [
    {
        name: 'BTC',
        id: 1
    },
    // {
    //     name: 'BCH',
    //     id: 2
    // },
    // {
    //     name: 'HNS',
    //     id: 3
    // },
    // {
    //     name: 'FIL',
    //     id: 4
    // },

]

const days = [
    {
        name: 'BTC',
        value: 120
    },
    // {
    //     name: 'BTC',
    //     value: 360
    // },
    // {
    //     name: 'HNS',
    //     value: 120
    // },
    // {
    //     name: 'BCH',
    //     value: 120
    // },
    // {
    //     name: 'FIL',
    //     value: 540
    // }
];

const ths = [
    {
        name: 'BTC',
        value: 50
    },
    {
        name: 'BTC',
        value: 100
    },
    {
        name: 'BTC',
        value: 200
    },
    {
        name: 'BTC',
        value: 500
    }
]

function MiningEquipment() {

    const [cryptoCurrent, setCryptoCurrent] = useState(0);
    const [cryptoDays, setCryptoDays] = useState(0);
    const [cryptoTH, setCryptoTH] = useState(0);
    const [cryptoPrice, setCryptoPrice] = useState(0);
    const [cryptoDaysArr, setCryptoDaysArr] = useState([]);
    const [cryptoTHArr, setCryptoTHArr] = useState([]);

    const handleChangeCryptoType = (value) => {
        const cryptocurrent = crypto.filter(item => item.name === value);
        const cryptodays = days.filter(item => item.name === value);
        const th_list = ths.filter(item => item.name === value);
        setCryptoDaysArr(cryptodays);
        setCryptoTHArr(th_list);
        setCryptoCurrent(cryptocurrent[0].name);
    };

    const handleChangeCryptoDays = (value) => {
        setCryptoDays(value);
    }
    const handleChangeCryptoTH = (value) => {
        setCryptoTH(value);
    }

    const hanldeCalcTotal = () => {
        if (cryptoCurrent == 'BTC') {
            const total = (0.8 * cryptoTH * 60 / 100) / cryptoDays;
            setCryptoPrice(total);
        }

    }

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left pt-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['MINING EQUIPMENT']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="text-white">Calculate how much you could start earning with BepMining</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} className="text-left pt-5">
                    <Image className="top-img">
                        <img src={mining} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="calcCard">
                        <div className="calc-box">
                            <div className="calc-select">
                                <label>Cryptocurrency type</label>
                                <Select
                                    defaultValue="Select type"
                                    suffixIcon={<FiChevronDown />}
                                    onChange={handleChangeCryptoType}
                                    options={[
                                        {
                                            value: 'BTC',
                                            label: 'BTC',
                                        },
                                        // {
                                        //     value: 'HNS',
                                        //     label: 'HNS',
                                        // },
                                        // {
                                        //     value: 'BCH',
                                        //     label: 'BCH',
                                        // },
                                        // {
                                        //     value: 'FIL',
                                        //     label: 'FIL',
                                        // }
                                    ]}
                                />
                            </div>
                            <div className="calc-select">
                                <label>Number of days</label>
                                <Select
                                    defaultValue="Select days"
                                    onChange={handleChangeCryptoDays}
                                    options={cryptoDaysArr}
                                    suffixIcon={<FiChevronDown />}
                                />
                            </div>
                            <div className="calc-select">
                                <label>TH/s</label>
                                <Select
                                    defaultValue="Select"
                                    onChange={handleChangeCryptoTH}
                                    options={cryptoTHArr}
                                    suffixIcon={<FiChevronDown />}
                                />
                            </div>
                            <button type="button" className="btn-gradient" onClick={hanldeCalcTotal}><span>Calculate revenue</span></button>
                        </div>
                        <div className="calc-output">
                            <span className="text-white">Estimated 24hr revenue</span>
                            {
                                cryptoPrice !== 0 ?
                                    <h1><span className="text-primary">$ {cryptoPrice} </span>({cryptoCurrent} {cryptoDays}D {cryptoTH}TH/s)</h1>
                                    :
                                    ""
                            }
                            <span className="text-white">Revenue will change based on mining difficulty and cryptocurrency price.</span>
                            <Link to="/build-hashrate" className="btn-gradient" ><span>Build Now</span></Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="tech-container">
                        <div className="img">
                            <img src={s19} alt="" width="100%" />
                        </div>
                        <div className="content">
                            <h1 className="text-white">Bitmain Antminer S19 Pro</h1>
                            <p className="text-white">
                                Model Antminer S19 Pro (110Th) from Bitmain mining SHA-256 algorithm with a maximum hashrate of 110Th/s for a power consumption of 3250W.
                            </p>
                            <Item>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Scrypt mining hashrate:</span>
                                    </div>
                                    <span className="text-primary">110TH/s</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Power consumption:</span>
                                    </div>
                                    <span className="text-primary">3250 W</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Hashing algorithm:</span>
                                    </div>
                                    <span className="text-primary">SHA256</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Power efficiency:</span>
                                    </div>
                                    <span className="text-primary">34.5 J/T</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Rated voltage:</span>
                                    </div>
                                    <span className="text-primary">12.00 V</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Noise level:</span>
                                    </div>
                                    <span className="text-primary">75 dB</span>
                                </div>
                            </Item>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="tech-container tech-v2">
                        <div className="content">
                            <h1 className="text-white">Antminer L7 9050Mh</h1>
                            <p className="text-white">
                                Model Antminer L7 (9.5Gh) from Bitmain mining Scrypt algorithm with a maximum hashrate of 9.5Gh/s for a power consumption of 3425W.
                            </p>
                            <Item>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Scrypt mining hashrate:</span>
                                    </div>
                                    <span className="text-primary">9.05 GH/s</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Power consumption:</span>
                                    </div>
                                    <span className="text-primary">3260 W</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Hashing algorithm:</span>
                                    </div>
                                    <span className="text-primary">Scrypt</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Power efficiency:</span>
                                    </div>
                                    <span className="text-primary">0.126 J/GH</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Rated voltage:</span>
                                    </div>
                                    <span className="text-primary">12.00 V</span>
                                </div>
                                <div className="item">
                                    <div className="d-flex">
                                        <MdOutlineFlashOn className="text-primary" size={24} />
                                        <span className="text-white">Noise level:</span>
                                    </div>
                                    <span className="text-primary">75 dB</span>
                                </div>
                            </Item>
                        </div>
                        <div className="img">
                            <img src={l7} alt="" width="100%" />
                        </div>
                    </div>
                </Col>
            </Row>
            <StepPlan />
        </>
    )
}

export default MiningEquipment;
