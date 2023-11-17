import React from "react";

import Page_Bg from '../../assets/images/page-head.png';

function PageHead({title}) {
   
    return (
        <div className="header-page" style={{backgroundImage: `url(${Page_Bg})`}}>
            <h1>{title}</h1>
        </div>
    )
}

export default PageHead;
