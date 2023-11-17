import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

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

// import { useToasts } from 'react-toast-notifications';
import BigNumber from "bignumber.js";

import StepPlan from "../../components/StepPlan";

import logo from '../../assets/images/logo4.png';
import usdt from '../../assets/images/tech_partners/usdt-logo.svg';
import build from '../../assets/images/icons/home-2.png';
import coin_ref from '../../assets/images/icons/coin-ref.png';
import gif from '../../assets/images/icons/gif.png';

import {
    AiOutlineCheck
} from "react-icons/ai";

import { FiCheckCircle, FiXCircle } from "react-icons/fi";


import { BsInfoCircleFill } from "react-icons/bs";

import POOLSHARE_ABI from '../abi/BepMiningPoolShare.json';
import TOKEN_ABI from '../abi/ERC20Token.json';
import BepminingReferral_ABI from '../abi/BepminingReferral.json';
import MININGBTC120_ABI from '../abi/MiningBTC120.json';

const Image = styled.div`
    >img{
        width: 100%;
    }
`

const ReferralBox = styled.div`
    position: relative;
    >.title-page {
        display: inline-flex;
        align-items: center;
        min-height: 100px;
        margin-bottom: 34px;
        padding-right: 150px;
        background-image: url(${gif});
        background-size: contain;
        background-position: 100% 50%;
        background-repeat: no-repeat;
    }
    >.title-page h1{
        margin-bottom:0px;
    }
`

const { TabPane } = Tabs;

const staticRevenue = `Static revenue rate is the data calculated by the static analysis method, that is, assuming that the future mining output is static and unchanged, the hashrate fee is used as the cost, and the mining output after deducting the electricity fee is calculated as the revenue.
Average static revenue rate: 64.62%
Average static revenue rate in the past 14 days: 43.00%
Average static revenue rate in the past 30 days: 60.00%`;

const electricity = "The electricity fee can be paid in installments after the plan's activation. Bitdeer shall have the right to adjust the electricity fee of the Service Plan from time to time according to the actual electricity price of the mining site where the miners are located.";
const hashRateText = "The hashrate fee needs to be paid in one time when purchasing";


function PoolShare() {

    // const { addToast } = useToasts();

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    const [join, setJoined] = useState(false);
    const [isSponsorJoin, setIsSponsorJoin] = useState(false);
    const [sponsor, setSponsor] = useState('');

    const [isJoined, setIsJoined] = useState(false);
    const [isEnablePoolShare, setIsEnablePoolShare] = useState(false);

    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalRevenueSystem, setTotalRevenueSystem] = useState(0);

    const [bonusHashrate, setBonusHashrate] = useState(0);

    const addressPoolShare_Test = '0x3d80A3A6594deAA9687163390f9725d02BD935C9';
    const addressPoolShare_Main = '0x3357e032F619D2314bba3F2a7e718207459e5010';

    const addressTokenUSDT_Test = "0x3af8dA08E10259F72f306069D7E10873fbFDF12f";
    const addressTokenUSDT_Main = "0x55d398326f99059fF775485246999027B3197955";

    const addressContractReferral_Test = '0xbaE1E2044B0543B52c5FAb73450E25aC87F524A8';
    const addressContractReferral_Main = '0x476Ce24cEe1dAcA068fe0647F25DeEDF032A2A94';

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
    const loadIsJoined = async () => {
        if (account) {
            var addressPool;
            if (chainId == 56) {
                addressPool = addressPoolShare_Main;
            }

            if (chainId == 97) {
                addressPool = addressPoolShare_Test;
            }

            const PS = new library.eth.Contract(POOLSHARE_ABI, addressPool);
            const isJoined = await PS.methods.joinedPool(account).call();
            setIsJoined(isJoined);
        }
    }

    const checkEnablePoolShare = async () => {
        if (account) {
            var addressToken;
            var addressPool;

            if (chainId == 56) {
                addressToken = addressTokenUSDT_Main;
                addressPool = addressPoolShare_Main;
            }

            if (chainId == 97) {
                addressToken = addressTokenUSDT_Test;
                addressPool = addressPoolShare_Test;
            }

            const TOKEN = new library.eth.Contract(TOKEN_ABI, addressToken);
            const numberAllowance = await TOKEN.methods.allowance(account, addressPool).call({ from: account });

            if (numberAllowance >= 100 * 10 ** 18) {
                setIsEnablePoolShare(true);
            } else {
                setIsEnablePoolShare(false);
            }
        }
    }

    const handleEnablePoolShare = async () => {
        if (account) {

            var addressToken;
            var addressPool;

            if (chainId == 56) {
                addressToken = addressTokenUSDT_Main;
                addressPool = addressPoolShare_Main;
            }

            if (chainId == 97) {
                addressToken = addressTokenUSDT_Test;
                addressPool = addressPoolShare_Test;
            }

            try {

                const TOKEN = new library.eth.Contract(TOKEN_ABI, addressToken);
                const approve = await TOKEN.methods.approve(addressPool, "100000000000000000000").send({ from: account });
                if (approve) {
                    checkEnablePoolShare();
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

    const getRevenue = async () => {
        if (account) {
            var addressPool;
            if (chainId == 56) {
                addressPool = addressPoolShare_Main;
            }

            if (chainId == 97) {
                addressPool = addressPoolShare_Test;
            }

            const PS = new library.eth.Contract(POOLSHARE_ABI, addressPool);
            const revenue = await PS.methods.revenueOfUsers(account).call();
            if (parseFloat(revenue.totalRevenueUSDT) > 0) {
                setTotalRevenue(parseFloat(revenue.totalRevenueUSDT) / (10 ** 18));
            } else {
                setTotalRevenue(0);
            }

            if (parseFloat(revenue.totalFromSystem) > 0) {
                setTotalRevenueSystem(parseFloat(revenue.totalFromSystem) / (10 ** 18));
            } else {
                setTotalRevenueSystem(0);
            }


        }
    }

    const isValidate = () => {
        if (sponsor == '') {
            // addToast("You have not registered referral", {
            //     appearance: 'error',
            //     autoDismiss: true,
            //     autoDismissTimeout: 2000
            // });
            return false;
        }
        if (!isSponsorJoin) {
            // addToast("Your sponsor has not joined the PoolShare", {
            //     appearance: 'error',
            //     autoDismiss: true,
            //     autoDismissTimeout: 2000
            // });
            return false;
        }
        return true;
    }


    const handleJoin = async () => {
        if (account) {
            var addressPool;
            if (chainId == 56) {
                addressPool = addressPoolShare_Main;
            }

            if (chainId == 97) {
                addressPool = addressPoolShare_Test;
            }

            if (isValidate()) {
                try {

                    var amount = new BigNumber(100 * 10 ** 18);
                    amount = amount.toFixed();

                    const PS = new library.eth.Contract(POOLSHARE_ABI, addressPool);
                    const join = await PS.methods.joinPoolShare(amount).send({
                        from: account,
                        //gas: '100000',
                        //gasPrice: BigNumber(1000000000).multipliedBy(6),
                    })

                    if (join) {
                        loadIsJoined();
                        // addToast("You joined successfully!", {
                        //     appearance: 'success',
                        //     autoDismiss: true,
                        //     autoDismissTimeout: 2000
                        // });

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
    }

    const loadIsSponsorJoin = async () => {
        if (account) {
            var addressPool;
            if (chainId == 56) {
                addressPool = addressPoolShare_Main;
            }

            if (chainId == 97) {
                addressPool = addressPoolShare_Test;
            }

            const PS = new library.eth.Contract(POOLSHARE_ABI, addressPool);
            const isJoin = await PS.methods.IsSponsorJoin(account).call();
            setIsSponsorJoin(isJoin);
        }
    }

    const loadSponsorAddress = async () => {
        if (account) {
            var addressRef;
            if (chainId == 56) {
                addressRef = addressContractReferral_Main;
            }

            if (chainId == 97) {
                addressRef = addressContractReferral_Test;
            }

            const REF = new library.eth.Contract(BepminingReferral_ABI, addressRef);
            const sponsorAddress = await REF.methods.getAddressSponsor(account).call();
            if (sponsorAddress == null || sponsorAddress == '0x0000000000000000000000000000000000000000') {
                setSponsor('');
                return false;
            } else {
                setSponsor(sponsorAddress);
                return true;
            }
        }
    }

    const loadBonusHashrate = async () => {
        if (account) {
            var addressMiningBTC120;
            if (chainId == 56) {
                addressMiningBTC120 = addressMiningBTC120_Main;
            }

            if (chainId == 97) {
                addressMiningBTC120 = addressMiningBTC120_Test;
            }
            const Hashrate = new library.eth.Contract(MININGBTC120_ABI, addressMiningBTC120);
            const bonusHashrateAmount = await Hashrate.methods.bonusPower(account).call();
            if (bonusHashrateAmount > 0) {
                setBonusHashrate(bonusHashrateAmount);
            } else {
                setBonusHashrate(0);
            }
        }
    }

    const claimBonusHashrate = async () => {
        if (account) {
            if (bonusHashrate >= 50) {
                var addressMiningBTC120;
                if (chainId == 56) {
                    addressMiningBTC120 = addressMiningBTC120_Main;
                }

                if (chainId == 97) {
                    addressMiningBTC120 = addressMiningBTC120_Test;
                }
                const Hashrate = new library.eth.Contract(MININGBTC120_ABI, addressMiningBTC120);
                const claim = await Hashrate.methods.buildBonusHashrate().send({
                    from: account,
                    //gas: '100000',
                    //gasPrice: BigNumber(1000000000).multipliedBy(6),
                })
                try {
                    if (claim) {
                        loadBonusHashrate();
                        // addToast("You claimed successfully!", {
                        //     appearance: 'success',
                        //     autoDismiss: true,
                        //     autoDismissTimeout: 2000
                        // });
                    } else {
                        // addToast("Please check your bonus hashrate", {
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
    }

    useEffect(() => {
        loadIsJoined();
        checkEnablePoolShare();
        getRevenue();
        loadIsSponsorJoin();
        loadSponsorAddress();
        loadBonusHashrate();
    }, [account, chainId])

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left pt-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['Pool Share']}
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
                    <div className="support sp-v2">
                        <div className="sp-v2-left">
                            <img src={logo} alt="" />
                            <h1 className="text-white">Join pool share now</h1>
                            <div className="sp-v2-left-item">
                                <span className="text-white">100</span>
                                <img src={usdt} alt="" />
                            </div>
                            {
                                isJoined == true ?
                                    <button type="button" className="btn-gradient btn" disabled><span>JOINED</span></button> :
                                    (
                                        isEnablePoolShare == true ?
                                            <button type="button" className="btn-gradient btn" onClick={() => handleJoin()}><span>JOIN</span></button>
                                            :
                                            <button type="button" className="btn-gradient btn" onClick={() => handleEnablePoolShare()}><span>ENABLE USDT</span></button>
                                    )

                            }

                        </div>
                        <div className="content text-white">
                            <span>Benefits of joining Pool Share :</span>
                            <span>- Receive immediately 30TH when joining Pool share. <br/>
                                  - Participate in Pool share's Bonus programs. <br/>
                                  - Instantly give 10TH hashrate when successfully inviting 1 person to join pool share.</span> 
                            <div className="list-total">
                                <div className="number-item">
                                    <span>revenue system</span>
                                    <h2>
                                        <span>{totalRevenueSystem}</span>
                                        <img src={usdt} alt="" />
                                    </h2>
                                </div>
                                <div className="number-item">
                                    <span>revenue earned</span>
                                    <h2>
                                        <span>{totalRevenue}</span>
                                        <img src={usdt} alt="" />
                                    </h2>
                                </div>
                                <button className="number-item" onClick={() => claimBonusHashrate()}>
                                    <span>claim bonus hashrate</span>
                                    <h2>
                                        <span>{bonusHashrate}</span>
                                        TH/s
                                    </h2>
                                </button>
                            </div>
                        </div>
                    </div>
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
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="title-page">
                        <h1>Pool Share Program</h1>
                    </div>
                    <div className="referral-bonus row-margin">
                        <ReferralBox>
                            <div className="title-page">
                                <h2><span>BONUS</span> SYSTEM</h2>
                            </div>
                        </ReferralBox>
                        <div className="content">
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 1</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">5%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 2</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">3%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 3</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">2%</p>
                                </div>
                            </div>
                            {/* <div className="item">
                                <div className="lvl">
                                    <p>LVL 4</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">5%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 5</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">4%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 6</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">3%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 7</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">2%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 8</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">1%</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="referral-bonus">
                        <ReferralBox>
                            <div className="title-page">
                                <h2><span>BONUS</span> DIRECT</h2>
                            </div>
                        </ReferralBox>
                        <div className="content">
                            <div className="item">
                                <div className="lvl">
                                    <p>Direct</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">20%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="referral-bonus">
                        <ReferralBox>
                            <div className="title-page">
                                <h2><span>BONUS</span> HASHRATE</h2>
                            </div>
                        </ReferralBox>
                        <div className="content">
                            <div className="item">
                                <div className="lvl">
                                    <p>Direct</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">30 TH/s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <StepPlan />
        </>
    )
}

export default PoolShare;
