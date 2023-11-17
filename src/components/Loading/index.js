import React from "react";

import Logo from '../../assets/images/logo.svg';

const Loading = () => {
    return (
        <div className="loading-wrap">
            <div className="logo">
                <img className="logo-landing" src={Logo} alt="" />
            </div>
            {/* <div className="lds-dual-ring"></div> */}
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading;
