import React from "react";
import styles from './FooterSection.module.scss';
import logo from '../../assets/svg/logotyp3.svg';


const FooterSection = () => {

    return(

<footer className={styles.wrapper}>


    <aside><i className="fas fa-phone"></i> +48 785 260 880</aside><div>Made with <span>❤️</span> by <img alt="logo" src={logo}/></div><aside><i className="fas fa-envelope"></i> ernest.rudziec@gmail.com</aside>


</footer>
    );
}

export default FooterSection;