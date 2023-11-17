import React, { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import {
    Row,
    Col,
    Modal
} from 'antd'

import styled from 'styled-components';

import { useWeb3React } from "@web3-react/core";

// import { useToasts } from 'react-toast-notifications';

import {
    FiX
} from "react-icons/fi";

import { BsInbox } from "react-icons/bs";


import s19 from '../../assets/images/miner/s19p.png';
import l7 from '../../assets/images/miner/l79500.png';
import nft from '../../assets/images/icons/nft.png';
import btc_com from '../../assets/images/tech_partners/btccom.png';
import bg_beep from '../../assets/images/bg_beep.jpg';
import Miracle from "../../components/Miracle";
import usdt from '../../assets/images/tech_partners/usdt-logo.svg';
import doge from '../../assets/images/tech_partners/Dogecoin.png';
import btc from '../../assets/images/tech_partners/btc.png';

import YourNftItem from "./item";


import BEPMININGNFT_ABI from '../abi/BepMiningNFT.json';

import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

const Image = styled.div`
    text-align: center;
    >img{
        width: 100%;
    }
`

const staticRevenue = `Static revenue rate is the data calculated by the static analysis method, that is, assuming that the future mining output is static and unchanged, the hashrate fee is used as the cost, and the mining output after deducting the electricity fee is calculated as the revenue.
Average static revenue rate: 64.62%
Average static revenue rate in the past 14 days: 43.00%
Average static revenue rate in the past 30 days: 60.00%`;

const electricity = "The electricity fee can be paid in installments after the plan's activation. Bitdeer shall have the right to adjust the electricity fee of the Service Plan from time to time according to the actual electricity price of the mining site where the miners are located.";
const hashRateText = "The hashrate fee needs to be paid in one time when purchasing";

function YourNft() {

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

    const [isModalNftVisible, setIsModalNftVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [listHashrate, setListHashrate] = useState([]);
    const [detailHashrate, setDetailHashrate] = useState([]);

    const addressNFT_Main = "0x523d60877d46cf5Ea947c11E57289B40B99883b5";
    const addressNFT_Test = "0x93D36EFb06CF4d43258cc06c708Ca4aE35fE022a";

    const getMyNFT = async () => {
        if (account) {
            var contract = null;
            if (chainId == 56) {
                contract = new library.eth.Contract(BEPMININGNFT_ABI, addressNFT_Main);
            }
            if (chainId == 97) {
                contract = new library.eth.Contract(BEPMININGNFT_ABI, addressNFT_Test);
            }
            if (contract != null) {

                const list = await contract.methods.getListHashrateOfUser(account).call();
                if (list.length > 0) {
                    setListHashrate(list);
                }

            }
        }
    }

    useEffect(() => {
        getMyNFT();
    }, [account, chainId]);

    const loadImageCurrency = (miner) => {
        if (miner == 'Antminer S19 Pro') {
            return <div className="icon-24"><img src={btc} alt="" /> <span>BTC</span></div>
        } else if (miner == 'Antminer L7 9050Mh') {
            return <div className="icon-24"><img src={doge} alt="" /> <span>DOGE</span></div>
        } else {
            return <div className="icon-24"><img src={btc} alt="" /> <span>BTC</span></div>
        }
    }

    const loadImageMiner = (miner) => {
        if (miner == 'Antminer S19 Pro') {
            return <img src={s19} alt="" />
        } else if (miner == 'Antminer L7 9050Mh') {
            return <img src={l7} alt="" />
        } else {
            return <img src={s19} alt="" />
        }
    }


    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left pt-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['Your hashrate nft']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="text-white">Hashrate power will be converted as an NFT, this allows users to transfer and trade on the marketplace.</p>
                        <Link to="/build-hashrate" className="btn-gradient"><span>Get Started</span></Link>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} className="text-left pt-5">
                    <Image>
                        <img src={nft} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="yourNft">
                        <div className="yourNft-content">
                            {listHashrate.length ?
                                listHashrate.map((item, i) => (
                                    <div className="item" key={i}>
                                        <div className="title-icon">
                                            <div>
                                                <h2>{item.miner}</h2>
                                            </div>
                                            {/* <img src={l7} alt="" /> */}
                                            {loadImageMiner(item.miner)}
                                        </div>
                                        <div className="miner-detal">
                                            <div className="content">
                                                <div className="field-data">
                                                    <span>TokenId</span>
                                                    <span>{item.tokenId}</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Currency</span>
                                                    {/* <div className="icon-24"><img src={btc} alt="" /> <span>BTC</span></div> */}
                                                    {loadImageCurrency(item.miner)}
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
                                                    <span>SHA256</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Hashrate Amount</span>
                                                    <span>{item.power}.00 TH/s</span>
                                                </div>
                                                <div className="field-data">
                                                    <span>Manufacturer page</span>
                                                    <a target="_blank" rel="noopener" href="https://www.bitmain.com/">{item.miner}</a>
                                                </div>
                                                <div className="field-data">
                                                    <span>Status</span>
                                                    <div className="status-wrap">
                                                        {
                                                            item.isActive == true ?
                                                                <>
                                                                    <span className="item-stt status-active" type="up"></span>
                                                                    <span>Active</span>
                                                                </>
                                                                :
                                                                <>
                                                                    <span className="item-stt status-deactive" type="up"></span>
                                                                    <span>Inactive</span>
                                                                </>
                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <button to="/product/mine" className="btn-gradient btn" onClick={
                                                () => {
                                                    setIsModalNftVisible(true);
                                                    setDetailHashrate(item);
                                                }}><span>View Detail</span></button>
                                        </div>
                                    </div>
                                ))
                                :
                                null
                            }
                            {/* <div className="item">
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
                                        <div className="field-data">
                                            <span>Status</span>
                                            <div className="status-wrap">
                                                <span className="item-stt status-active" type="up"></span>
                                                <span>Active</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <button to="/product/mine" className="btn-gradient btn" onClick={() => setIsModalNftVisible(true)}><span>View Detail</span></button>
                                </div>
                            </div> */}
                        </div>

                        {
                            listHashrate.length ?
                                null
                                :
                                <div className="not-found-data">
                                    <div class="not-empty-image">
                                        <BsInbox size={100} />
                                    </div>
                                    <div class="not-empty-description">No Data</div>
                                </div>
                        }
                    </div>
                </Col>
            </Row>
            <Miracle />

            <Modal
                visible={isModalNftVisible}
                onCancel={() => setIsModalNftVisible(false)}
                closeIcon={<FiX />}
                title={`HASHRATE POWER NFT`}
                centered={true}
                footer=""
                className="modal-wrap"
                width={800}
                style={{ backgroundImage: `url(${bg_beep})` }}
            >
                <div className="nft-modal-wrap">
                    <YourNftItem detailHashrate={detailHashrate} onCancel={() => setIsModalNftVisible(false)} getMyNFT={() => getMyNFT()} />
                </div>
            </Modal>
        </>
    )
}

export default YourNft;
