import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import 'antd/dist/antd.css';
import '../src/assets/css/bootstrap.min.css';
import DashboardLayout from "./components/Layout/index";
import Affiliates from "./pages/Affiliates";

import { useWeb3React } from "@web3-react/core";
import { connectors } from "./utils/connectors";

import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";

const clientId = "BJNCzp-3TDsYxLdbZYd58Vw-o2e9W7JRrYKStDfh3BsDgHQeC-1k4pMgsbLLI32VSwhPms06VkamtVondrEp3u8"; // get from https://dashboard.web3auth.io

const App = () => {

    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [chainId, setChainId] = useState("");
    const [userData, setUserData] = useState({});

    const [signature, setSignature] = useState("");
    const [error, setError] = useState("");
    const [network, setNetwork] = useState(undefined);
    const [message, setMessage] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [verified, setVerified] = useState();

    const refreshState = () => {
        window.localStorage.setItem("provider", undefined);
        setNetwork("");
        setMessage("");
        setSignature("");
        setVerified(undefined);
    };

    const login = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const web3authProvider = await web3auth.connect();
        console.log(web3authProvider)
        setProvider(web3authProvider);
    };

    const logout = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const web3authProvider = await web3auth.logout();
        setProvider(web3authProvider);
        setBalance("");
        setAddress("");
        setUserData({});
        setChainId("");
    };

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId,
                    web3AuthNetwork: "sapphire_devnet",
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x61", // hex of 97
                        rpcTarget: "https://rpc.ankr.com/bsc_testnet_chapel",
                        // Avoid using public rpcTarget in production.
                        // Use services like Infura, Quicknode etc
                        displayName: "Binance SmartChain Testnet",
                        blockExplorer: "https://testnet.bscscan.com",
                        ticker: "BNB",
                        tickerName: "BNB",
                    },
                    uiConfig: {
                        theme: "dark",
                        loginMethodsOrder: ["facebook", "google"],
                    },
                    defaultLanguage: "en",

                    modalZIndex: "99998",
                });

                setWeb3auth(web3auth);
                await web3auth.initModal();
                setProvider(web3auth.provider);
            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);


    return (
        <Routes>
            <Route path="*" element={<DashboardLayout login={() => login()} logout={() => logout()} />} />
        </Routes>
    );
}

export default App;
