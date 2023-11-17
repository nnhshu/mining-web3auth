import React, {useState} from "react";
import styled from 'styled-components';

import {
    Row,
    Col
} from 'antd';

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { 
    AiOutlineSync, 
    AiOutlineSelect, 
    AiOutlineCheck, 
    AiOutlineCreditCard,
    AiOutlineClockCircle,
} from "react-icons/ai";

import icon_1 from '../../assets/images/icons/Connect defi wallet-01.png';
import icon_2 from '../../assets/images/icons/Select your hashrate power plan-01.png';
import icon_3 from '../../assets/images/icons/Active your nft-01.png';
import icon_4 from '../../assets/images/icons/Start earning-01.png';
import icon_5 from '../../assets/images/icons/Estimate nft-01.png';
import icon_6 from '../../assets/images/icons/Transfer to nft pool-01.png';
import icon_7 from '../../assets/images/icons/Refund your capital-01.png';


const AboutItem = styled.div`
    position: relative;
`

const defi_bepmining = [
    {
        desc: 'Connect defi wallet',
        icon: icon_1,
        delay : "delay"
    },
    {
        desc: 'Select your hashrate power plan',
        icon: icon_2,
        delay : "delay-1-6s"
    },
    {
        desc: 'Active your nft',
        icon: icon_3,
        delay : "delay-3-2s"
    },
    {
        desc: 'Start earning',
        icon: icon_4,
        delay : "delay-4-8s"
    }
];

const estimate_bepmining = [
    {
        desc: 'Estimate nft',
        icon: icon_5,
        delay : "delay"
    },
    {
        desc: 'Transfer to nft pool',
        icon: icon_6,
        delay : "delay-1-6s"
    },
    {
        desc: 'Refund your capital',
        icon: icon_7,
        delay : "delay-3-2s"
    }
];

function StepPlan({title,steps}) {

    return (
        <>
            <Row justify="space-around" align="stretch" className="row-margin-normal buildhashrate" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="steps">
                        <div className="title-page">
                            {
                                title ?
                                title
                                :
                                <h1><span>How to earn</span> with defi bepmining ?</h1>
                            }
                            
                        </div>
                        <div className="content">
                            {
                                defi_bepmining.map((item,index) => {
                                    return(
                                        <AboutItem className={`item ${item.delay}`} key={index}>
                                            <div className="step">
                                                <p>Step {index+1}</p>
                                            </div>
                                            <div className={`ico animation-scale ${item.delay}`}>
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <h3 className="text-primary">{item.desc}</h3>
                                        </AboutItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="space-around" align="stretch" className="row-margin-normal buildhashrate" gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="steps">
                        <div className="title-page">
                            <h1><span>Estimate</span> your plan</h1>
                        </div>
                        <div className="content">
                            {
                                estimate_bepmining.map((item,index) => {
                                    return(
                                        <AboutItem className={`item ${item.delay}`} key={index}>
                                            <div className="step">
                                                <p>Step {index+1}</p>
                                            </div>
                                            <div className={`ico animation-scale ${item.delay}`}>
                                                <img src={item.icon} alt="" />
                                            </div>
                                            <h3 className="text-primary">{item.desc}</h3>
                                            {
                                                index !== (estimate_bepmining.length - 1) ?
                                                <div className="step"></div>
                                                :
                                                ""
                                            }
                                        </AboutItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default StepPlan;
