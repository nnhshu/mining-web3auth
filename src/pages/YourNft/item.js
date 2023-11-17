import React, { useState } from "react";
// import { useToasts } from 'react-toast-notifications';
import { useWeb3React } from "@web3-react/core";

import {NumericFormat} from 'react-number-format';
import Countdown from "react-countdown";
import currency from "currency.js";
import moment from "moment-timezone";

import s19 from '../../assets/images/miner/s19p.png';
import l7 from '../../assets/images/miner/l79500.png';
import btc_com from '../../assets/images/tech_partners/btccom.png';
import usdt from '../../assets/images/tech_partners/usdt-logo.svg';

import MININGBTC120_ABI from '../abi/MiningBTC120.json';

function YourNftItem({ detailHashrate, onCancel, getMyNFT }) {

    // const { addToast } = useToasts();

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    const sellOnMarket = () => {
        // addToast("Comming soon !", {
        //     appearance: 'error',
        //     autoDismiss: true,
        //     autoDismissTimeout: 3000
        // });
        onCancel();
    }

    const handleActive = async () => {
        if (account) {
            try {
                const BUILDHS = new library.eth.Contract(MININGBTC120_ABI, detailHashrate.addressMining);
                const active = await BUILDHS.methods.activeHashrate(parseInt(detailHashrate.tokenId), account).send({
                    from: account,
                    //gas: '100000',
                    //gasPrice: BigNumber(1000000000).multipliedBy(6),
                });

                if (active) {
                    onCancel();
                    getMyNFT();
                    // addToast("You actived successfully!", {
                    //     appearance: 'success',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });

                } else {
                    onCancel();
                    // addToast("Please check your wallet", {
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

    let currentTime = new Date();
    let currentDateTime = (currentTime.setSeconds(currentTime.getSeconds())) / 1000;

    const handleInactive = async () => {
        if (account) {
            try {
                const BUILDHS = new library.eth.Contract(MININGBTC120_ABI, detailHashrate.addressMining);
                const active = await BUILDHS.methods.deactiveHashrate(parseInt(detailHashrate.tokenId), account).send({
                    from: account,
                    //gas: '100000',
                    //gasPrice: BigNumber(1000000000).multipliedBy(6),
                });

                if (active) {
                    onCancel();
                    getMyNFT();
                    // addToast("You inactived successfully!", {
                    //     appearance: 'success',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });

                } else {
                    onCancel();
                    // addToast("Please check your wallet", {
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

    const handleClaim = async () => {
        if (account) {
            try {
                const BUILDHS = new library.eth.Contract(MININGBTC120_ABI, detailHashrate.addressMining);
                const active = await BUILDHS.methods.claimProfit(account, parseInt(detailHashrate.tokenId)).send({
                    from: account,
                    //gas: '100000',
                    //gasPrice: BigNumber(1000000000).multipliedBy(6),
                });

                if (active) {
                    onCancel();
                    getMyNFT();
                    // addToast("You claimed successfully!", {
                    //     appearance: 'success',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 2000
                    // });

                } else {
                    onCancel();
                    // addToast("Please check your wallet", {
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

    return (
        <>
            <div className="nft-modal-top">
                <div>
                    <h2>{detailHashrate.miner}</h2>
                </div>
                <img src={s19} alt="" />
            </div>
            <div className="nft-modal-container">
                <div className="d-grid grid-2">
                    <div className="item">
                        <span>Token Id</span>
                        <span>{detailHashrate.tokenId}</span>
                    </div>
                    <div className="item">
                        <span>Specification</span>
                        <span>{detailHashrate.power}.00 TH/s</span>
                    </div>
                    <div className="item">
                        <span>Current Pool</span>
                        <img src={btc_com} alt="" />
                    </div>
                    <div className="item">
                        <span>Accumulated Revenue</span>
                        <div className="text-white icon-24">
                            <Countdown
                                date={(parseInt(detailHashrate.remainTimeMining) + currentDateTime) * 1000}
                                renderer={({ completed }) => {
                                    let currentDate = new Date();
                                    let currentDateTimestamp = (currentDate.setSeconds(currentDate.getSeconds())) / 1000;
                                    let timeOnMine = currentDateTimestamp - parseInt(detailHashrate.timeActive);

                                    let profitPerSecond = (0.8 * detailHashrate.power * 0.6) / (86400 * 120);
                                    let profitReceive = parseFloat(currency(timeOnMine, { precision: 8 }).multiply(profitPerSecond).value);

                                    if (!completed && detailHashrate.isActive) {
                                        // Render a completed state                                                                               
                                        return (
                                            <NumericFormat type="text" value={profitReceive} displayType={'text'} thousandSeparator={true}
                                                renderText={(value, props) => <span>{value}</span>} />
                                        );
                                    } else {
                                        return (
                                            <span>0.00000000</span>
                                        );
                                    }
                                }}
                            />
                            {/* <span>0.0000045</span> */}
                            <div className="d-flex icon-24"><img src={usdt} alt="" />USDT</div>
                        </div>
                    </div>
                    <div className="item">
                        <span>Status</span>
                        <div className="status-wrap">
                            {
                                detailHashrate.isActive == true ?
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
            <div className="nft-modal-footer text-center">
                {
                    detailHashrate.isActive == true ?
                        <button type="button" className="btn-gradient btn" onClick={() => handleClaim()}><span>CLAIM PROFIT</span></button>
                        :
                        null
                }
                {
                    detailHashrate.isActive == false ?
                        <button type="button" className="btn-gradient btn" onClick={() => handleActive()}><span>ACTIVE</span></button>
                        :
                        <button type="button" className="btn-gradient btn" onClick={() => handleInactive()}><span>INTERRUPT</span></button>
                }
                {
                    parseInt(detailHashrate.power) > 0 && parseInt(detailHashrate.remainTimeMining) == 0 ?
                        <button type="button" className="btn-gradient btn"><span>Restart</span></button>
                        :
                        null
                }
                {
                    parseInt(detailHashrate.power) > 50 && parseInt(detailHashrate.remainTimeMining) == 0 ?
                        <button type="button" className="btn-gradient btn"><span>Refund</span></button>
                        :
                        null
                }
                <button type="button" className="btn-gradient btn" onClick={() => sellOnMarket()}><span>Sell on market</span></button>
            </div>
        </>
    )
}

export default YourNftItem;
