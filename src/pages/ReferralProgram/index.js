import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../utils/connectors";
import { Typewriter } from 'react-simple-typewriter';
// import { ToastProvider, useToasts } from 'react-toast-notifications';

import {
    Row,
    Col
} from 'antd';

import { FiCopy, FiCornerDownRight, FiCornerUpLeft } from "react-icons/fi";
import { BsInbox } from "react-icons/bs";

import styled from 'styled-components';

import StepPlan from "../../components/StepPlan";

import coin_ref from '../../assets/images/icons/coin-ref.png';
import gif from '../../assets/images/icons/gif.png';


import BepminingReferral_ABI from '../abi/BepminingReferral.json';

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

function ReferralProgram() {

    // const { addToast } = useToasts();
    const [parentAddressLastest, setParentAddressLastest] =  useState("");
    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    //const [referral_list, setReferralList] = useState(false);

    const [listDirectMember, setListDirectMember] = useState([]);
    const [parentMember, setParentMember] = useState([]);
    const [backParentMember, setBackParentMember] = useState(false);
    const [checkParentMember, setCheckParentMember] = useState(true);

    const addressContractReferral_Test = '0xbaE1E2044B0543B52c5FAb73450E25aC87F524A8';
    const addressContractReferral_Main = '0x476Ce24cEe1dAcA068fe0647F25DeEDF032A2A94';

    const ReferralCopyToClipBoard = () => {
        const copyToClipBoard = async copyMe => {
            try {
                await navigator.clipboard.writeText(copyMe);
                // addToast('Copied Successfully', {
                //     appearance: 'success',
                //     autoDismiss: true,
                //     autoDismissTimeout: 2000
                // })
            } catch (err) {
                // addToast('Failed to copy!', {
                //     appearance: 'error',
                //     autoDismiss: true,
                //     autoDismissTimeout: 2000
                // })
            }
        };
        return (
            <FiCopy className="copy text-primary" size={24} onClick={() => copyToClipBoard("https://bepmining.io/affiliates?ref=" + account)} />
        )
    };

    const getListDirectMember = async () => {
        var addressRef;
        if (chainId == 56) {
            addressRef = addressContractReferral_Main;
        }
        if (chainId == 97) {
            addressRef = addressContractReferral_Test;
        }
        const REF = new library.eth.Contract(BepminingReferral_ABI, addressRef);
        const list = await REF.methods.getListDirectUser(account).call();
        if (list.length > 0) {
            setListDirectMember(list);
            setParentMember([account]);
        } else {
            setListDirectMember([]);
        }
    }

    const ShowMemberLists = async (member) => {
        var addressRef_2;
        if (member) {
            if (chainId == 56) {
                addressRef_2 = addressContractReferral_Main;
            }
            if (chainId == 97) {
                addressRef_2 = addressContractReferral_Test;
            }
            const REF = new library.eth.Contract(BepminingReferral_ABI, addressRef_2);
            const list = await REF.methods.getListDirectUser(member).call();
            if (list.length > 0) {
                setListDirectMember(list);
                setParentMember([...parentMember, member]);
                setBackParentMember(true);
            } else {
                setBackParentMember(true);
                setCheckParentMember(false);
                // setParentMember([]);
            }
        }
    }

    const ShowMemberListsPartent = async (member) => {
        let newParentMember =  parentMember.filter(item => item !== member);
        if( newParentMember.length === 0){
            newParentMember = [member];
        }
        var addressRef_3;
        if (member) {
            if (chainId == 56) {
                addressRef_3 = addressContractReferral_Main;
            }
            if (chainId == 97) {
                addressRef_3 = addressContractReferral_Test;
            }
            const REF = new library.eth.Contract(BepminingReferral_ABI, addressRef_3);
            const list = await REF.methods.getListDirectUser(newParentMember[newParentMember.length-1]).call();
            if (list.length > 0) {
                setListDirectMember(list);
                setParentMember(newParentMember);
                if(parentMember.length === 1){
                    setBackParentMember(false);
                    setCheckParentMember(true);
                } else{
                    setBackParentMember(true);
                    setCheckParentMember(false);
                }
            }
        }
    }

    useEffect(() => {
        getListDirectMember();
    }, [account, chainId]);

    return (
        <>
            <Row justify="space-around" align="middle" className="bg-section">
                <Col xs={24} sm={24} md={24} lg={24} xl={16} className="text-left pt-5">
                    <div className="title-page">
                        <h1>
                            <Typewriter
                                words={['REFERRAL PROGRAM']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <p className="text-white">Do you like the mining process? With unlimited referrals your earning potential is endless!</p>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={8} className="text-left pt-5">
                    <Image className="top-img">
                        <img src={coin_ref} alt="" />
                    </Image>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="referral-about">
                        <div className="title">
                            <div className="title-page">
                                <h1>ABOUT THE <span>REFERRAL PROGRAM</span></h1>
                            </div>
                        </div>
                        <div className="content">
                            <p className="text-white">You do not need to create an account, simply connect your web3 wallet and you will receive your referral link immediately. To benefit from your referrals, you need to build hashrate power as an NFT, and your reward percentage will depend on how much your referrals build hashrate. </p>
                            <p className="text-white">Share your referral link with friends, partners, or others. After they connect and confirm your link, and join in building hashrate, you will receive a percentage during the time they participate in BepMining.</p>
                            {
                                account ?
                                    <div className="referral-box-info">
                                        <div className="name">
                                            <span className="referral-box-info-address text-white">{'https://bepmining.io/affiliates?ref=' + account}</span>
                                            {/* <ToastProvider
                                                placement="bottom-left"
                                            >
                                                <ReferralCopyToClipBoard />
                                            </ToastProvider> */}
                                        </div>
                                    </div>
                                    :
                                    ""
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="title-page">
                        <h1>Hashrate Build Program</h1>
                    </div>
                    <div className="referral-bonus">
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
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 4</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">1%</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="lvl">
                                    <p>LVL 5</p>
                                </div>
                                <div className="bonus">
                                    <p className="text-primary">1%</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    <p className="text-primary">5%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="title-page">
                        <h1>Pool Share Program</h1>
                    </div>
                    <div className="referral-bonus">
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
            <Row justify="space-around" align="stretch" className="row-margin" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="referral-table">
                        <h1 className="text-white">Direct Member Lists</h1>
                        {
                            backParentMember ?
                            <div className="d-flex btn-back-wrap">
                                <button className="btn btn-gradient mt-0 btn-sm" onClick={()=> ShowMemberListsPartent(parentMember.length === 1 ? parentMember[0]: parentMember.pop())}>
                                    <span><FiCornerUpLeft /> Back</span>
                                </button>
                            </div>    
                            :
                            null
                        }
                        {
                            parentMember.length ?
                            <div className="referral-address">
                                <span className="d-block mt-4 text-white">Current Address: <a className="text-primary" target="_blank" href={`https://bscscan.com/address/${parentMember.length === 1 ? parentMember[0]: parentMember[parentMember.length-1]}`}>{parentMember.length === 1 ? parentMember[0]: parentMember[parentMember.length-1]}</a></span>
                            </div>
                            :
                            null
                        }
                        {/* {
                            account ?
                                <div className="referral-address">
                                    <p className="text-white">Current Address: <span className="text-primary">{account}</span></p>
                                </div>
                                :
                                ""
                        } */}
                        <div className="table-responsive referral-table-container">
                            <table className="table text-white">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Address</th>
                                        {/* <th scope="col">Created date (GMT TIME)</th>
                                        <th scope="col">Revenue</th> */}
                                        {
                                            parentMember.length > 0 ? <th scope="col">Detail</th> : null
                                        }
                                    </tr>
                                </thead>
                                {
                                    listDirectMember.length > 0 ?
                                        listDirectMember.map((item, i) => (
                                            <tbody key={i}>
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td><a target="_blank" href={`https://bscscan.com/address/${item}`}>{item}</a></td>                                               
                                                    {
                                                        parentMember.length > 0 && checkParentMember ? 
                                                        <td>
                                                            <button className="btn btn-gradient mt-0 btn-sm" onClick={()=> ShowMemberLists(item)}>
                                                                <span><FiCornerDownRight /> View more</span>
                                                            </button>
                                                        </td> 
                                                        : 
                                                        null
                                                    }
                                                </tr>
                                            </tbody>
                                        ))
                                        :
                                        <tbody>
                                            <tr>
                                                <td colSpan={4}>
                                                    <div className="not-found-data not-found-data-ref">
                                                        <div className="not-empty-image">
                                                            <BsInbox size={100} />
                                                        </div>
                                                        <div className="not-empty-description">No Data</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                }
                            </table>
                        </div>
                    </div>
                </Col>
            </Row>
            <StepPlan />
        </>
    )
}

export default ReferralProgram;
