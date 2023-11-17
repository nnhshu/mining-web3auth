import React, { useState, ChangeEventHandler, useEffect, useRef } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate, useParams, useLocation
} from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import styled from 'styled-components';
import moment from 'moment';
import {
    Layout,
    Row,
    Col,
    Button,
    Menu,
    Dropdown
} from 'antd';

import { userRoutes } from "../../routers/routes";

// Other Layout related Component
import Sidebar from "./Sidebar";
import HeaderPage from "./Header";
import '../../assets/css/dashboard.css';

import bg_beep from '../../assets/images/bg_beep.jpg';

const { Header, Content, Sider } = Layout;


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
        bottom:0;
        right:0;
        z-index: -1;
        background-image: url(${bg_beep});
        background-size: 100%;
        background-position: 100% 0;
        background-repeat: repeat;
    }
    &:after{
        content: "";
        width: 100%;
        min-height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom:0;
        right:0;
        z-index: -1;
        background: #00000082;
        backdrop-filter: blur(10px);
    }
`

const DashboardLayout = ({ children, login, logout, ...rest }) => {

    let location = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'light' : 'dark');
    const myRef = useRef();


    const openMenu = () => {
        setCollapsed(!collapsed);
    }

    const handleClickOutside = (e) => {
        if (!myRef.current.contains(e.target)) {
            return true; 
        } else {
            setCollapsed(true);
            
        }
    };

    const hasWindow = window.innerWidth;

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {

        if(hasWindow < 480){
            setCollapsed(true);
        } else{
            setCollapsed(false);
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        if (windowDimensions.width >= 767) {
            return () => {
                window.removeEventListener('resize', handleResize);
                setCollapsed(false);
            }
        } else {
            document.addEventListener('mousedown', handleClickOutside);
            setCollapsed(true);
            return () => {
                window.removeEventListener('resize', handleResize);
                document.removeEventListener('mousedown', handleClickOutside);
                setCollapsed(false);
            }
        }
    }, [windowDimensions]);

    return (
        <React.Fragment>
            <Wrapper>
                <Layout id="layout-wrapper" data-theme={theme}>
                    <HeaderPage
                        collapsed={collapsed}
                        openLeftMenuCallBack={openMenu}
                        logout={() => logout()}
                        login={() =>login()}
                        defaultTheme={theme}
                        hideWallet={false}
                    />
                    <Layout className="layout-full-height">
                        <Sidebar collapsed={collapsed} hideMenu={false} />
                        <Layout
                            className={!collapsed && 'layout-not-full'}
                            style={{
                                padding: `${location.pathname === "/" || location.pathname === "/about" ? "0" : "0px 24px 24px"}`,
                            }}
                            ref={myRef}
                        >
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: `${location.pathname === "/" || location.pathname === "/about" ? "0" : "0px 24px 24px"}`,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Routes>
                                    {
                                        userRoutes.map((route, idx) => (
                                            <Route
                                                path={route.path}
                                                element={route.component}
                                                key={idx}
                                            />
                                        ))
                                    }
                                </Routes>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Wrapper>

        </React.Fragment>
    )
}

const DashboardLayoutRoute = ({ component: Component, path }) => {
    return (
        <Route
            exact
            path={path}
            element={Component}
        />
    );
};


export default DashboardLayout;
