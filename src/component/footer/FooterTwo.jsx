import React from 'react';
import {FaInstagram, FaGithub, FaYoutube, FaMusic} from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialShare = [
    {Social: <FaGithub /> , link: 'https://www.github.com/DragonFruit8'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/emarldbayleaf'},
    {Social: <FaMusic icon="fa-tiktok" /> , link: 'https://www.tiktok.com/@quillfire'},
    {Social: <FaYoutube /> , link: 'https://www.youtube.com/@jtmoonbeam2469'},
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/home-one">
                                    <img src="/assets/images/logo/Logo_LT.png" alt="Logo images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;