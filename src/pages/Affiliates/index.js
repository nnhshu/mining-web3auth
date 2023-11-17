import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../utils/connectors";
import { Typewriter } from 'react-simple-typewriter';
// import { useToasts } from 'react-toast-notifications';

import {
    Layout,
    Row,
    Col
} from 'antd';

import HeaderPage from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";

import styled from 'styled-components';
import logo from '../../assets/images/logo4.png';
import bg_beep from '../../assets/images/bg_beep.jpg';

import BepminingReferral_ABI from '../abi/BepminingReferral.json';

const Image = styled.div`
    >img{
        width: 100%;
    }
`

const Wrapper = styled.section`
    position: relative;
    &:before {
        content:"";
        width: 100%;
        min-height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        background-image: url(${bg_beep});
        background-position: 100% 0;
        background-repeat: no-repeat;
    }
    &:after{
        content: "";
        width: 100%;
        min-height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        background: #00000082;
        backdrop-filter: blur(10px);
    }
`

const { Header, Content, Sider } = Layout;


function Affiliates({disconnect}) {

    // const { addToast } = useToasts();

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    const [collapsed, setCollapsed] = useState(false);

    const openMenu = () => {
        setCollapsed(!collapsed);
    }

    const queryParams = new URLSearchParams(window.location.search);
    const ref = queryParams.get('ref');

    const [addressSupportor, setAddressSupportor] = useState(ref);

    const addressContractReferral_Test = '0xbaE1E2044B0543B52c5FAb73450E25aC87F524A8'; 
    const addressContractReferral_Main = '0x476Ce24cEe1dAcA068fe0647F25DeEDF032A2A94';

    const [sponsorOfUser, setSponsorOfUser] = useState(null);

    useEffect(() => {
        checkAddressSupportor();
        getSponsorOfAccount();
    }, [account, chainId]);


    const getSponsorOfAccount = async () => {
        if (account) {
            var addressRef;
            if (chainId == 56) {
                addressRef = addressContractReferral_Main;
            }
            if (chainId == 97) {
                addressRef = addressContractReferral_Test;
            }
            const REF = new library.eth.Contract(BepminingReferral_ABI, addressRef);
            const sponsor = await REF.methods.sponsorOfUser(account).call();           

            if (sponsor != '0x0000000000000000000000000000000000000000') {
                setSponsorOfUser(sponsor);
            } else {
                setSponsorOfUser(null);
            }
        }
    }

    const getSponsorOfAddress = async (address) => {
        var addressRef;
        if (chainId == 56) {
            addressRef = addressContractReferral_Main;
        }
        if (chainId == 97) {
            addressRef = addressContractReferral_Test;
        }
        const REF = new library.eth.Contract(BepminingReferral_ABI, addressRef);
        const sponsor = await REF.methods.sponsorOfUser(address).call();
        return sponsor;
    }

    const checkAddressSupportor = () => {
        if (account) {
            if (ref != "" || typeof ref != "undefined") {
                var isValid = library.utils.isAddress(ref);
                if (isValid) {
                    setAddressSupportor(ref);
                }
            }
        }
    }

    const validRef = async () => {
        if (account == ref) {
            // addToast("Don't use your address to register.", {
            //     appearance: 'error',
            //     autoDismiss: true,
            //     autoDismissTimeout: 5000
            // });
            return false;
        }
        if (String(sponsorOfUser).toLowerCase() == ref.toLowerCase()) {
            // addToast("You are already registered with this address.", {
            //     appearance: 'error',
            //     autoDismiss: true,
            //     autoDismissTimeout: 5000
            // });
            return false;
        }
        const sponsorOfRef = await getSponsorOfAddress(ref);
        if (sponsorOfRef.toLowerCase() == account.toLowerCase()) {
            // addToast("You are sponsor of this address.", {
            //     appearance: 'error',
            //     autoDismiss: true,
            //     autoDismissTimeout: 5000
            // });
            return false;
        }
        return true;
    }

    const handleChooseAddress = async () => {
        if (account) {
            const IsVal = await validRef();
            if (IsVal) {
                const isValidAddress = library.utils.isAddress(ref);
                if (isValidAddress) {
                    const msgParams = [
                        {
                            type: 'string',      // Any valid solidity type
                            name: 'Message',     // Any string label you want
                            value: "BEPMINING AFFILIATE PROGRAM : " + ref  // The value to sign
                        },
                        // {
                        //     type: 'uint32',
                        //     name: 'A number',
                        //     value: '1337'
                        // }
                    ]
                    const from = account;
                    library.currentProvider.sendAsync({
                        method: 'eth_signTypedData',
                        params: [msgParams, from],
                        from: account,
                    }, async function (err, result) {
                        if (err) return console.error(err)
                        if (result.error) {
                            return console.error(result.error.message)
                        }

                        var addressFSRef = addressContractReferral_Test
                        if (chainId === 56) {
                            addressFSRef = addressContractReferral_Main
                        }

                        const contract = new library.eth.Contract(BepminingReferral_ABI, addressFSRef);
                        const registerReferral = await contract.methods.registerReferral(ref).send({ from: account });
                        if (registerReferral) {
                            // addToast("You registered successful.", {
                            //     appearance: 'success',
                            //     autoDismiss: true,
                            //     autoDismissTimeout: 3000
                            // });
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        } else {
                            // addToast("Please register again!", {
                            //     appearance: 'error',
                            //     autoDismiss: true,
                            //     autoDismissTimeout: 3000
                            // });
                        }
                    })
                } else {
                    // addToast("Your ref address is incorrect. Please try another address.", {
                    //     appearance: 'error',
                    //     autoDismiss: true,
                    //     autoDismissTimeout: 5000
                    // });
                }
            }
        } else {
            // addToast("Please connect to your wallet.", {
            //     appearance: 'error',
            //     autoDismiss: true,
            //     autoDismissTimeout: 5000
            // });
        }
    }

    return (
        <>
            <Wrapper>
                <Layout id="layout-wrapper" className="layout-aff">
                    <HeaderPage
                        collapsed={collapsed}
                        openLeftMenuCallBack={openMenu}
                        hideWallet={false}
                        disconnect={() => disconnect()}
                    />
                    <Layout className="layout-full-height">
                        <Layout
                            className={!collapsed && 'layout-not-full'}
                            style={{
                                padding: '0 24px 24px',
                            }}
                        >
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Row justify="space-around" align="middle" className="bg-section">
                                    <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left pt-5">
                                        <div className="title-page aff-wrap-box">
                                            <h1>
                                                <Typewriter
                                                    words={['Affiliate Program WITH BEPMINING']}
                                                    loop={5}
                                                    cursor
                                                    cursorStyle='_'
                                                    typeSpeed={70}
                                                    deleteSpeed={50}
                                                    delaySpeed={1000}
                                                />
                                            </h1>
                                            <p className="text-white">Welcome to the world's best crypto affiliate program. Invite friends to play on Bepmining and earn up to a 15% commission on their playing fees. When your friends become Bepmining affiliates, you will also earn third-tier commissions.</p>
                                            <div className="aff-address">{addressSupportor}</div>
                                            <div className="text-center">
                                                <button type="button" className="btn-gradient" onClick={() => handleChooseAddress()}><span>Register</span></button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={8} className="text-left pt-5">
                                        <Image>
                                            <img src={logo} alt="" />
                                        </Image>
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Wrapper>
        </>
    )
}

export default Affiliates;
