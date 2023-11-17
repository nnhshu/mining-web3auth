import React, { useState, PureComponent, useEffect } from "react";
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { useWeb3React } from "@web3-react/core";
import {
    useNavigate
} from "react-router-dom";
// import { useToasts } from 'react-toast-notifications';

import BigNumber from "bignumber.js";
import currency from "currency.js";

import {
    Row,
    Col,
    Radio,
    Progress,
    Tabs,
    Tooltip
} from 'antd';

import {
    Link
} from "react-router-dom";

import StepPlan from "../../components/StepPlan";

import doge from '../../assets/images/tech_partners/Dogecoin.png';
import btc from '../../assets/images/tech_partners/btc.png';
import usdt from '../../assets/images/tech_partners/usdt-logo.svg';
import s19 from '../../assets/images/miner/s19p.png';
import l7 from '../../assets/images/miner/l79500.png';
import build from '../../assets/images/icons/build.png';


import TOKEN_ABI from '../abi/ERC20Token.json';
import MININGBTC120_ABI from '../abi/MiningBTC120.json';

import {
    AiOutlineCheck
} from "react-icons/ai";

import { BsInfoCircleFill } from "react-icons/bs";


const Image = styled.div`
    >img{
        width: 100%;
    }
`

const { TabPane } = Tabs;

const staticRevenue = `Static revenue rate is the data calculated by the static analysis method, that is, assuming that the future mining output is static and unchanged, the hashrate fee is used as the cost, and the mining output after deducting the electricity fee is calculated as the revenue.
Average static revenue rate: 64.62%
Average static revenue rate in the past 14 days: 43.00%
Average static revenue rate in the past 30 days: 60.00%`;

const electricity = "The electricity fee can be paid in installments after the plan's activation. Bitdeer shall have the right to adjust the electricity fee of the Service Plan from time to time according to the actual electricity price of the mining site where the miners are located.";
const hashRateText = "The hashrate fee needs to be paid in one time when purchasing";


function BuildHashRate() {

    const history = useNavigate();
    // const { addToast } = useToasts();

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    const [isEnableUSDTMiningBTC120, setIsEnableUSDTMiningBTC120] = useState(false);

    const [amountHashrateBTC120, setAmountHashrateBTC120] = useState(0);
    const [priceHashrateBTC120, setPriceHashrateBTC120] = useState(0);
    const [percentSoldBTC120, setPercentSoldBTC120] = useState(0);


    const addressTokenUSDT_Test = "0x3af8dA08E10259F72f306069D7E10873fbFDF12f";
    const addressTokenUSDT_Main = "0x55d398326f99059fF775485246999027B3197955";

    const addressMiningBTC120_Test = '0x755Aa117551Da03D4438A0EAB7A854fB29c792C6';
    const addressMiningBTC120_Main = '0x4cbf9a19844cFeF86092205821720D76F95D5E71';


    const importTokenBUSD = async () => {
        var tokenName = 'Binance-Peg BSC-USD',
            tokenSymbol = 'USDT',
            tokenDecimals = 18,
            tokenAddress = '0x55d398326f99059fF775485246999027B3197955',
            tokenImage = 'https://bscscan.com/token/images/busdt_32.png',
            tokenNet = '1',
            message = '',
            errorMessage = '',
            net = '1';
        if (account && tokenAddress != "") {
            library.currentProvider.sendAsync({
                method: 'wallet_watchAsset', //metamask_watchAsset
                params: {
                    "type": "ERC20",
                    "options": {
                        "address": tokenAddress,
                        "symbol": tokenSymbol,
                        "decimals": tokenDecimals,
                        "image": tokenImage,
                    },
                },
                id: Math.round(Math.random() * 100000),
            }, (err, added) => {
                console.log('provider returned', err, added)
                if (err || 'error' in added) {
                    return;
                }
            })
        }
    }

    const checkEnableUSDTMiningBTC120 = async () => {
        if (account) {
            var addressToken;
            var addressMiningBTC120;

            if (chainId == 56) {
                addressToken = addressTokenUSDT_Main;
                addressMiningBTC120 = addressMiningBTC120_Main;
            }

            if (chainId == 97) {
                addressToken = addressTokenUSDT_Test;
                addressMiningBTC120 = addressMiningBTC120_Test;
            }

            const TOKEN = new library.eth.Contract(TOKEN_ABI, addressToken);
            const numberAllowance = await TOKEN.methods.allowance(account, addressMiningBTC120).call({ from: account });

            if (numberAllowance >= 10000 * 10 ** 18) {
                setIsEnableUSDTMiningBTC120(true);
            } else {
                setIsEnableUSDTMiningBTC120(false);
            }
        }
    }

    const handleEnableUSDTMiningBTC120 = async () => {
        if (account) {

            var addressToken;
            var addressMiningBTC120;

            if (chainId == 56) {
                addressToken = addressTokenUSDT_Main;
                addressMiningBTC120 = addressMiningBTC120_Main;
            }

            if (chainId == 97) {
                addressToken = addressTokenUSDT_Test;
                addressMiningBTC120 = addressMiningBTC120_Test;
            }

            try {

                const TOKEN = new library.eth.Contract(TOKEN_ABI, addressToken);
                const approve = await TOKEN.methods.approve(addressMiningBTC120, "1000000000000000000000000").send({ from: account });
                if (approve) {
                    checkEnableUSDTMiningBTC120();
                    // addToast("You approved successfully!", {
                    //     appearance: 'success',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });
                } else {
                    // addToast("Something wrong !", {
                    //     appearance: 'error',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });
                }

            } catch (error) {
                // addToast(error.message, {
                //     appearance: 'error',
                //     autoDismiss: true,
                //     autoDismissTimeout: 2000
                // });
            }


        }
    }

    const handleBuildMiningBTC120 = async () => {
        if (account) {
            var addressMining;
            if (chainId == 56) {
                addressMining = addressMiningBTC120_Main;
            }

            if (chainId == 97) {
                addressMining = addressMiningBTC120_Test;
            }

            try {

                const BUILDHS = new library.eth.Contract(MININGBTC120_ABI, addressMining);
                const build = await BUILDHS.methods.buildHashrate(amountHashrateBTC120).send({
                    from: account,
                    //gas: '100000',
                    //gasPrice: BigNumber(1000000000).multipliedBy(6),
                })

                if (build) {

                    // addToast("You built successfully!", {
                    //     appearance: 'success',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });
                    setTimeout(() => {
                        history.push("/your-nft");
                    }, 3000);

                } else {
                    // addToast("Please check your balance and try again", {
                    //     appearance: 'error',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });
                }

            } catch (error) {
                // addToast(error.message, {
                //     appearance: 'error',
                //     autoDismiss: true,
                //     autoDismissTimeout: 2000
                // });
            }

        }
    }

    const handleOnchangeBTC120 = (e) => {
        setAmountHashrateBTC120(parseInt(e.target.value));
        setPriceHashrateBTC120(parseInt(e.target.value) * 0.8);
    }

    const loadRemainHashrate120BTC = async () => {
        if (account) {
            var addressMining;
            if (chainId == 56) {
                addressMining = addressMiningBTC120_Main;
            }

            if (chainId == 97) {
                addressMining = addressMiningBTC120_Test;
            }

            const BUILDHS = new library.eth.Contract(MININGBTC120_ABI, addressMining);
            const total = await BUILDHS.methods.totalHashratePower().call();
            const percent = parseFloat(currency(100, { precision: 8 }).subtract((total / 500000 * 100)).value);
            setPercentSoldBTC120(percent);
        }
    }

    useEffect(() => {
        checkEnableUSDTMiningBTC120();
        loadRemainHashrate120BTC();
    }, [account])


    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left pt-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['BUILD HASHRATE']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></h1>
                        <p className="text-white">As a mining platform powered by real hashrate, Bepmining will adjust the price of Cloud Hashrate packages, according to market supply, demand, and mining difficulty. Ensure the highest interests for customers.</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} className="text-left pt-5">
                    <Image className="top-img">
                        <img src={build} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><img src={btc} />BTC</span>} key="1">
                            <div className="hashpower-tabs haspower-tabs-vertical mt-4">
                                <div className="item item-vertical">
                                    <div className="title-icon">
                                        <div>
                                            <h2>Antminer S19 Pro</h2>
                                            <h3 className="text-primary">120 Days</h3>
                                            <Link to="/build-hashrate/detail/s19" className="btn-gradient"><span>Check Detail</span></Link>
                                        </div>
                                        <img src={s19} alt="" />
                                    </div>
                                    <div className="item-vertical-right">
                                        <div className="miner-detal">
                                            <div className="content">
                                                <div className="field-data">
                                                    <span>Power</span>
                                                    <span>3250W</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Efficiency</span>
                                                    <span>$0.09/kWh - 29.50 W/Th</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Algorithm</span>
                                                    <span>SHA-256</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Release date</span>
                                                    <span>Jun 2020</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Manufacturer page</span>
                                                    <a target="_blank" rel="noopener" href="https://www.bitmain.com/">Antminer S19 Pro</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Pool Hashrate<Tooltip title={hashRateText}> <BsInfoCircleFill /></Tooltip></p>
                                                <span>3.73 MS/s </span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Network Hashrate<BsInfoCircleFill /></p>
                                                <span>6.17 MS/s</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Mining Block<BsInfoCircleFill /></p>
                                                <span>772203</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Static Revenue Rate<Tooltip title={staticRevenue}> <BsInfoCircleFill /></Tooltip></p>
                                                <span> 0.5%</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Electricity Fee <Tooltip title={electricity}> <BsInfoCircleFill /></Tooltip></p>
                                                <span>$0.0531/T/D</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Hashrate Fee <Tooltip title={hashRateText}> <BsInfoCircleFill /></Tooltip></p>
                                                <span>$0.0531/T/D</span>
                                            </div>
                                        </div>
                                        <div className="rate-wrap">
                                            <span>Hash Rate Amount:</span>
                                            <Radio.Group defaultValue="" buttonStyle="solid" className="rate-style"
                                                onChange={
                                                    (e) => handleOnchangeBTC120(e)
                                                }>
                                                <Radio.Button value="50">50T</Radio.Button>
                                                <Radio.Button value="100">100T</Radio.Button>
                                                <Radio.Button value="200">200T</Radio.Button>
                                                <Radio.Button value="500">500T</Radio.Button>
                                            </Radio.Group>
                                        </div>
                                        <div className="progress-wrap">
                                            <Progress
                                                percent={percentSoldBTC120}
                                                status="active"
                                                strokeColor={{
                                                    '0%': '#f8a41b',
                                                    '100%': '#ec8532',
                                                }}
                                                format={(percent) => `${percent}% Sold`}
                                            />
                                        </div>
                                        <div className="footer">
                                            <div className="price">
                                                <p><img src={usdt} alt="" />{priceHashrateBTC120}</p>
                                            </div>
                                            {
                                                !isEnableUSDTMiningBTC120 ?
                                                    <button type="button" className="btn-gradient" onClick={() => handleEnableUSDTMiningBTC120()}><span>Enable USDT</span></button>
                                                    :
                                                    <button type="button" className="btn-gradient" onClick={() => handleBuildMiningBTC120()}><span>BUILD</span></button>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab={<span><img src={doge} />DOGE</span>} key="2">
                            <div className="hashpower-tabs haspower-tabs-vertical mt-4">
                                <div className="item item-vertical">
                                    <div className="title-icon">
                                        <div>
                                            <h2>Antminer L7 9050Mh</h2>
                                            <h3 className="text-primary">120 Days</h3>
                                            <Link to="/build-hashrate/detail/l7" className="btn-gradient"><span>Check Detail</span></Link>
                                        </div>
                                        <img src={l7} alt="" />
                                    </div>
                                    <div className="item-vertical-right">
                                        <div className="miner-detal">
                                            <div className="content">
                                                <div className="field-data">
                                                    <span>Power</span>
                                                    <span>3260W</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Efficiency</span>
                                                    <span>$0.28/kWh - 360.22 W/Gh</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Algorithm</span>
                                                    <span>Scrypt</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Release date</span>
                                                    <span>Nov 2021</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Manufacturer page</span>
                                                    <a target="_blank" rel="noopener" href="https://www.bitmain.com/">Antminer L7 9050Mh</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Pool Hashrate<Tooltip title={hashRateText}> <BsInfoCircleFill /></Tooltip></p>
                                                <span>3.73 MS/s </span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Network Hashrate<BsInfoCircleFill /></p>
                                                <span>6.17 MS/s</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Mining Block<BsInfoCircleFill /></p>
                                                <span>772203</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Static Revenue Rate<Tooltip title={staticRevenue}> <BsInfoCircleFill /></Tooltip></p>
                                                <span> 0.5%</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Electricity Fee <Tooltip title={electricity}> <BsInfoCircleFill /></Tooltip></p>
                                                <span>$0.0531/T/D</span>
                                            </div>
                                            <div className="field-data">
                                                <p><AiOutlineCheck /> Hashrate Fee <Tooltip title={hashRateText}> <BsInfoCircleFill /></Tooltip></p>
                                                <span>$0.0531/T/D</span>
                                            </div>
                                        </div>
                                        <div className="rate-wrap">
                                            <span>Hash Rate Amount:</span>
                                            <Radio.Group defaultValue="" buttonStyle="solid" className="rate-style">
                                                <Radio.Button value="2">50T</Radio.Button>
                                                <Radio.Button value="4">100T</Radio.Button>
                                                <Radio.Button value="6">200T</Radio.Button>
                                                <Radio.Button value="8">500T</Radio.Button>
                                            </Radio.Group>
                                        </div>
                                        <div className="progress-wrap">
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
                                        <div className="footer">
                                            <div className="price">
                                                <p><img src={usdt} alt="" />5</p>
                                            </div>
                                            {/* <button type="button" className="btn-gradient"><span>BUILD</span></button>
                                            <button type="button" className="btn-gradient"><span>BUILD</span></button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="support text-center">
                        <h1 className="text-white">The following payment methods are now supported</h1>
                        <div className="content">
                            <div className="item">
                                <img src={usdt} alt="" />
                                <span className="text-white">USDT(BEP20)</span>
                            </div>
                            <button type="button" className="btn-gradient btn" onClick={() => importTokenBUSD()}><span>Import USDT</span></button>
                        </div>
                    </div>
                </Col>
            </Row>
            <StepPlan />
        </>
    )
}

export default BuildHashRate;
