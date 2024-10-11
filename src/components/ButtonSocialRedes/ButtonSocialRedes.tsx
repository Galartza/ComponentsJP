import React from 'react'
import Styles from './ButtonSocialRedes.module.css';
import { FaSquareWhatsapp, FaSquareInstagram, FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";


const ButtonSocialRedes = () => {
    return (
        <>
            <div className={Styles.containerRedes}>
            <ul className={Styles.listRedes}>
                <li className={Styles.iconContent}>
                    <a href=""
                        className={Styles.linkRedes}
                        aria-label='Whatsapp'
                        data-social='whatsapp'
                    >

                        <div className={Styles.filled}></div>
                        <FaSquareWhatsapp className={Styles.icons} />
                    </a>
                    <div className={Styles.toolTip}>Whatsapp</div>
                </li>
                <li className={Styles.iconContent}>
                    <a href=""
                        className={Styles.linkRedes}
                        aria-label='Instagram'
                        data-social='instagram'
                    >

                        <div className={Styles.filled}></div>
                        <FaSquareInstagram className={Styles.icons} />
                    </a>
                    <div className={Styles.toolTip}>Instagram</div>
                </li>
                <li className={Styles.iconContent}>
                    <a href=""
                        className={Styles.linkRedes}
                        aria-label='XTwitter'
                        data-social='xtwitter'
                    >

                        <div className={Styles.filled}></div>
                        <FaSquareXTwitter className={Styles.icons} />
                    </a>
                    <div className={Styles.toolTip}>XTwitter</div>
                </li>
                <li className={Styles.iconContent}>
                    <a href=""
                        className={Styles.linkRedes}
                        aria-label='Facebook'
                        data-social='facebook'
                    >

                        <div className={Styles.filled}></div>
                        <FaSquareFacebook className={Styles.icons} />
                    </a>
                    <div className={Styles.toolTip}>Facebook</div>
                </li>
            </ul>
            </div>
            
        </>
    )
}

export default ButtonSocialRedes