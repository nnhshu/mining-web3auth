import React from "react";
import NoData from '../../assets/images/no data.svg';

const FourZeroFour = () => {
    return (
        <div className="notfound-wrap">
            <div className="notfound-icon">
                <img src={NoData} alt="" />
            </div>
            <h1>Page not found</h1>
        </div>
    )
}

export default FourZeroFour;
