import React, { useState, useEffect, useRef } from "react";
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    Layout,
    Menu,
} from 'antd';

import { FiInfo,FiUsers, FiCpu, FiShare2 } from "react-icons/fi";
import { RiShieldFlashFill } from "react-icons/ri";
import { AiOutlineHome, AiFillQuestionCircle, AiOutlineBars } from "react-icons/ai";
import { MdShield, MdAttachFile, MdOutlineMail } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";



const { Sider } = Layout;

const menuLinks = [
    {
        name: 'Home',
        url: '/',
        icon: <AiOutlineHome size={24} />,
        key: 1
    },
    {
        name: 'Build Hashrate',
        url: '/build-hashrate',
        icon: <FiCpu size={24} />,
        key: 2
    },
    {
        name: 'Your Hashrate Nft',
        url: '/your-nft',
        icon: <AiOutlineBars size={24} />,
        key: 3
    },
    {
        name: 'Pool Share',
        url: '/pool-share',
        icon: <FiShare2 size={24} />,
        key: 4
    },
    {
        name: 'Marketplace',
        url: '/market',
        icon: <FaOpencart size={24} />,
        key: 5
    },
    {
        name: 'Mining Equipment',
        url: '/mining-equipment',
        icon: <RiShieldFlashFill size={24} />,
        key: 6
    },
    {
        name: 'Referral program',
        url: '/referral-programs',
        icon: <FiUsers size={24} />,
        key: 7
    },
    {
        name: 'About',
        url: '/about',
        icon: <FiInfo size={24} />,
        key: 8
    },
    {
        name: 'Faq',
        url: '/faq',
        icon: <AiFillQuestionCircle size={24} />,
        key: 9
    },
    {
        name: 'Privacy policy',
        url: '/privacy-policy',
        icon: <MdShield size={24} />,
        key: 10
    },
    {
        name: 'Terms of use',
        url: '/terms-of-use',
        icon: <MdAttachFile size={24} />,
        key: 11
    },
    {
        name: 'support@bepmining.io',
        url: 'mailto:support@bepmining.io',
        icon: <MdOutlineMail size={24} />,
        key: 12
    }
];

const rootSubmenuKeys = ['sub1', 'sub2'];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


function Sidebar(props) {

    const collapsed = props.collapsed;
    const [isMobile, setIsMobile] = useState(false);

    const location = useLocation();
    const [openKeys, setOpenKeys] = useState([]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    useEffect(() => {
        if (!menuLinks.find(item => item.url === location.pathname)) {
            if (menuLinks.find(item => item.subItems && item.subItems.find(item => item.url === location.pathname))) {
                const currentSubItem = menuLinks.find(item => item.subItems && item.subItems.find(item => item.url === location.pathname))
                setOpenKeys([currentSubItem.name])
            }
            return
        }
    }, [location.pathname]);
    
    return (

        <Sider
            width={230}
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="site-layout-background site-theme-sider"
            breakpoint="lg"
            collapsedWidth={!isMobile ? "48" : "0"}
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                setIsMobile(!isMobile);
                console.log(collapsed, type);
            }}
        >
            {
                props.hideMenu === false ?
                <Menu
                    className="nav-sidebar"
                    mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    selectedKeys={[location.pathname]}
                >
                    {
                        menuLinks.map(
                            link => (
                                <Menu.Item key={link.url} icon={link.icon}>
                                    {
                                        link.key === 12 ?
                                        <a href={link.url}>{link.name}</a>
                                        :
                                        <Link to={link.url}>{link.name}</Link>
                                    }
                                </Menu.Item>
                            )
                        )
                    }
                </Menu>
                :
                ""
            }
        </Sider>

    );
}

export default Sidebar;
