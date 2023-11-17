import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";


/// Metamask

const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
});

const injected1 = new InjectedConnector({
    supportedChainIds: [1]
});

const injected56 = new InjectedConnector({
    supportedChainIds: [56]
});

const injected97 = new InjectedConnector({
    supportedChainIds: [97]
});

const injected137 = new InjectedConnector({
    supportedChainIds: [137]
});

const injected43114 = new InjectedConnector({
    supportedChainIds: [43114]
});

const injected250 = new InjectedConnector({
    supportedChainIds: [250]
});

/// WalletConnectConnector
const walletconnect1 = new WalletConnectConnector({
    rpc: {
        1: 'https://mainnet.infura.io/v3/',
    },
    //rpcUrl: `https://mainnet.infura.io/v3/`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    chainId: 1
});
const walletconnect56 = new WalletConnectConnector({
    rpc: {
        56: 'https://bsc-dataseed1.binance.org:443',
    },
    //rpcUrl: `https://bsc-dataseed.binance.org/`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    chainId: 56
});
const walletconnect97 = new WalletConnectConnector({
    rpc: {
        97: 'https://data-seed-prebsc-1-s3.binance.org:8545',
    },
    // rpcUrl: `https://data-seed-prebsc-1-s3.binance.org:8545`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    chainId: 97,
});

const walletconnect137 = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/27e484dcd9e3efcfd25a83a78777cdf1`,
    bridge: "https://bridge.walletconnect.org",
    //qrcode: true,
    chainId: 137
});


/// WalletLinkConnector

const walletlink1 = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/27e484dcd9e3efcfd25a83a78777cdf1`,
    appName: "bep",
    supportedChainIds: [1]
});

const walletlink56 = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/27e484dcd9e3efcfd25a83a78777cdf1`,
    appName: "bep",
    supportedChainIds: [56]
});

const walletlink97 = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/27e484dcd9e3efcfd25a83a78777cdf1`,
    appName: "bep",
    supportedChainIds: [97]
});

const walletlink137 = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/27e484dcd9e3efcfd25a83a78777cdf1`,
    appName: "bep",
    supportedChainIds: [137]
});


export const connectors = {
    injected: injected,
    injected1: injected1,
    injected56: injected56,
    injected97: injected97,
    injected137: injected137,
    injected43114: injected43114,
    injected250: injected250,
    walletconnect1: walletconnect1,
    walletConnect56: walletconnect56,
    walletConnect97: walletconnect97,
    walletconnect137: walletconnect137,
    coinbaseWallet1: walletlink1,
    coinbaseWallet56: walletlink56,
    coinbaseWallet97: walletlink97,
    coinbaseWallet137: walletlink137,
};