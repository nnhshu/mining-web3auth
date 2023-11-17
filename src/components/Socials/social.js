import React from "react";

import {  
    FaTelegramPlane,
    FaDiscord,
    FaRedditAlien,
    FaFacebook,
} from "react-icons/fa";

import {
    FiFacebook,
    FiGithub,
    FiInstagram,
    FiFilm,
    FiGlobe,
    FiYoutube,
    FiTwitter,
    FiLinkedin
} from "react-icons/fi";

import Tw from '../../assets/images/icons/tw.svg';
// import Facebook from '../../assets/images/icons/facebook.svg';
import Telegram from '../../assets/images/icons/telegram.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
// import Discord from '../../assets/images/icons/discord.svg';

function Socials({tw, discord, telegram, linkedin, facebook, website, github, instagram, reddit, className}) {

    return (
        <ul className={className ? `${className} list-social` : 'list-social'}>
            {
               website ?
                <li>
                    <a className="box-img-flex" href={website ? website : "#"} rel="noreferrer" target="_blank" >
                        <FiGlobe />
                    </a>
                </li>
                :
                ""
            }
            {
               tw ?
                <li>
                    <a className="box-img-flex" href={tw ? tw : "#"} rel="noreferrer" target="_blank" >
                        <FiTwitter />
                    </a>
                </li>
                :
                ""
            }
            {
               discord
               ?
                <li>
                    <a className="box-img-flex" href={discord ? discord : "#"} rel="noreferrer" target="_blank">
                        <FaDiscord />
                    </a>
                </li>
                :
                ""
            }
            {
                linkedin
                ?
                <li>
                    <a className="box-img-flex" href={linkedin ? linkedin : "#"} rel="noreferrer" target="_blank">
                        <FiLinkedin />
                    </a>
                </li>
                :
                ""
            }
            {
                telegram
                ?
                <li>
                    <a className="box-img-flex" href={telegram ? telegram : "#"} rel="noreferrer" target="_blank">
                        <FaTelegramPlane />
                    </a>
                </li>
                :
                ""
            }
            {
                facebook
                ?
                <li>
                    <a className="box-img-flex" href={facebook ? facebook : "#"} rel="noreferrer" target="_blank">
                        <FaFacebook />
                    </a>
                </li>
                :
                ""
            }
            {
                github
                ?
                <li>
                    <a className="box-img-flex" href={github ? github : "#"} rel="noreferrer" target="_blank">
                        <FiGithub />
                    </a>
                </li>
                :
                ""
            }
            {
                reddit
                ?
                <li>
                    <a className="box-img-flex" href={reddit ? reddit : "#"} rel="noreferrer" target="_blank">
                        <FaRedditAlien />
                    </a>
                </li>
                :
                ""
            }
        </ul>
    );
}

export default Socials;
