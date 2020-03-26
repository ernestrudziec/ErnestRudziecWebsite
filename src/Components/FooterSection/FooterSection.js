import React from "react";
import styles from './FooterSection.module.scss';
import logo from '../../assets/svg/logotyp3.svg';


const FooterSection = () => {

    return(

<footer className={styles.wrapper}>


    <div>Made with <span>❤️</span> by <img alt="logo" src={logo}/></div>


</footer>
    );
}

export default FooterSection;