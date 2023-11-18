import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import { CopyToClipboard } from 'react-copy-to-clipboard';

import Socials from "../Socials/social";

import {
    Layout,
    Button,
    Menu,
    Dropdown,
    Modal,
    notification
} from 'antd';

import {
    FiX,
    FiShield,
    FiLock,
    FiAlignRight,
    FiAlignLeft,
    FiLogOut,
    FiCopy,
    FiInfo
} from "react-icons/fi";

import {
    FaWallet,
    FaRocket
} from 'react-icons/fa';

import { icon_networks } from '../../assets/images/index';
import Logo from '../../assets/images/logo2.png';
import Metamask_Icon from '../../assets/images/metamask-icon.png';
import Wallet_Icon from '../../assets/images/icons/walletconnect.svg';
import bg_beep from '../../assets/images/bg_beep.jpg';

import { connectors } from "./../../utils/connectors";
import { toHex } from "./../../utils/utils";
import { networkParams } from "./../../utils/networks";

// import { useToasts } from 'react-toast-notifications';

const { Header } = Layout;

const menu = (defaultTheme) => (
    <Menu
        className="nav-dropdown-dark"
        data-theme={defaultTheme}
        items={[
            {
                key: '1',
                label: (
                    <Link className="nav-item-icon" to="/create-presale">
                        <div className="icon">
                            <FaRocket />
                        </div>
                        PreSales
                    </Link>
                )
            },
            {
                key: '2',
                label: (
                    <Link className="nav-item-icon" to="/create-token-lock">
                        <div className="icon">
                            <FiLock />
                        </div>
                        Token Lock
                    </Link>
                )
            },
            {
                key: '3',
                label: (
                    <Link className="nav-item-icon" to="/create-locks">
                        <div className="icon">
                            <FiShield />
                        </div>
                        Liquidity Lock
                    </Link>
                )
            }
        ]}
    />
);

const openNotificationCopy = (type, defaultTheme) => {
    notification[type]({
        message: 'Copied address',
        closeIcon: <FiX />,
        // duration: 10000,
        className: defaultTheme === "dark" ? "notification-light" : "notification-dark",
    });
};

const HeaderPage = (props) => {
    // show menu account
    const menu_account = (defaultTheme) => {
        return (
            <Menu
                className="nav-dropdown-dark"
                data-theme={defaultTheme}
                items={[
                    {
                        key: '1',
                        label: (
                            <div className="nav-item-icon" onClick={() => setIsModalAccountVisible(true)}>
                                <div className="icon">
                                    <FaWallet />
                                </div>
                                Wallet
                            </div>
                        )
                    },
                    {
                        key: '2',
                        label: (
                            <div className="nav-item-icon" onClick={() => props.logout()}>
                                <div className="icon">
                                    <FiLogOut />
                                </div>
                                Disconnect
                            </div>
                        )
                    }
                ]}
            />
        )
    }

    // copy address acount
    const [copied, setCopied] = useState(false);
    const handCopied = () => {
        setCopied(!copied);
        openNotificationCopy('success', props.defaultTheme);
    }

    const history = useNavigate();
    // const { addToast } = useToasts();


    const [network, setNetwork] = useState(typeof window.ethereum !== 'undefined' ? window.ethereum.networkVersion : 56);
    const [error, setError] = useState("");

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalAccountVisible, setIsModalAccountVisible] = useState(false);
    const [isModalConnectVisible, setIsModalConnectVisible] = useState(false);
    const [size, setSize] = useState('large');
    const [isNetWork, setIsNetWork] = useState(
        {
            icon: icon_networks.icon_network_56,
            name: 'BNB Smart Chain'
        }
    );
    const [isProfile, setIsProfile] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showModalConnect = () => {
        setIsModalConnectVisible(true);
    };

    const handleCancelModalConnect = () => {
        setIsModalConnectVisible(false);
    };

    // useEffect(async () => {
    //     await subscribeProvider();
    //     console.log(toHex(137))
    // }, []);


    const subscribeProvider = async () => {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.on("networkChanged", async (networkId) => {
                if (networkId == 1) {
                    setIsNetWork({
                        icon: icon_networks.icon_network_1,
                        name: 'Ethereum'
                    })
                }
                if (networkId == 56) {
                    setIsNetWork({
                        icon: icon_networks.icon_network_56,
                        name: 'BNB Smart Chain'
                    })
                }
                if (networkId == 97) {
                    setIsNetWork({
                        icon: icon_networks.icon_network_97,
                        name: 'BNB Smart Chain Testnet'
                    })
                }
                if (networkId == 137) {
                    setIsNetWork({
                        icon: icon_networks.icon_network_137,
                        name: 'Polygon Mainnet'
                    })
                }
                if (networkId == 43114) {
                    setIsNetWork({
                        icon: icon_networks.icon_network_43114,
                        name: 'Avalanche C-Chain'
                    })
                }
                if (networkId == 250) {
                    setIsNetWork({
                        icon: icon_networks.icon_network_250,
                        name: 'Fantom'
                    })
                }
            });

            window.ethereum.on('chainChanged', async (chainId) => {
                //  console.log(chainId)
            });
        }
    };

    const isMobileDevice = () => {
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };


    return (
        <>
            <Header
                className="header-dashboard"
            >
                <div className="header-dashboard-wrap">
                    <div className="header-dashboard-left">
                        <div className="header-logo-wrap">
                            <div className="logo">
                                <Link to="/">
                                    <img className="logo-landing" src={Logo} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header-dashboard-right">
                        <div className="d-flex align-items-center">
                            {
                                props.hideWallet === false ?
                                    <div className="nav-toogle-sidebar">
                                        {React.createElement(props.collapsed ? FiAlignLeft : FiAlignRight, {
                                            className: 'trigger',
                                            onClick: props.openLeftMenuCallBack,
                                        })}
                                    </div>
                                    :
                                    ""
                            }
                            <Socials tw="https://twitter.com/BepMining" discord="#" telegram="https://t.me/bepming_channel"></Socials>
                        </div>
                        {
                            props.loggedIn === false ?
                                <div className="header-group">
                                    <Button className="btn-connect__network btn-mobile" type="primary" shape="round" size={size} onClick={props.login}>
                                        <span>Sign in to Dashboard</span>
                                    </Button>
                                </div>
                                :
                                <>
                                    < div className="header-group">
                                        <Button className="btn-connect__network btn-mobile" type="primary" shape="round" size={size} onClick={props.getAccounts}>
                                            <FiInfo />
                                            <span>GET ACCOUNT</span>
                                        </Button>
                                        <Button className="btn-connect__network btn-mobile" type="primary" shape="round" size={size} onClick={props.logout}>
                                            <FiLogOut />
                                            <span>LOG OUT</span>
                                        </Button>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </Header>

            {/* Modal account */}

            <Modal
                visible={isModalAccountVisible}
                onCancel={() => setIsModalAccountVisible(false)}
                data-theme={props.defaultTheme}
                closeIcon={<FiX />}
                title="Your wallet"
                centered={true}
                footer=""
                className="modal-choose-network"
                style={{ backgroundImage: `url(${bg_beep})` }}
            >
                <div className="account-wallet-wrap">
                    <span className="text-white">Your address</span>

                    <div className="box-view tetx-center text-primary">
                        View on <a>https://bscscan.com</a>
                    </div>
                    <div className="faq-connect">
                        <Button className="d-flex align-items-center btn-primary" type="primary" shape="round" size={size} onClick={
                            () => {
                                props.disconnect();
                                setIsModalAccountVisible(false);
                            }
                        }>
                            <FiLogOut />
                            <span>Disconnect Wallet</span>
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default HeaderPage;
