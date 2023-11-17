import React from "react";

import {
    MdOutlineScreenSearchDesktop
} from "react-icons/md";

import NoData from '../../assets/images/no data.svg';

const NotFoundData = ({title,desc}) => {
    return (
        <div className="notfound-wrap">
            <div className="notfound-icon">
                <img src={NoData} alt="" />
            </div>
            <h1>{title}</h1>
            {desc && <span>{desc}</span>}
        </div>
    )
}

export default NotFoundData;
