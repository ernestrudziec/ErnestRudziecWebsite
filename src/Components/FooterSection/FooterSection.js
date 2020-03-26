import React from "react";
import styles from './FooterSection.scss';
import logo from '../../assets/svg/logotyp3.svg';


const FooterSection = () => {

    return(

<footer className={styles.wrapper}>
<div>
    Polityka Prywatności
    Ernest Rudziec
</div>

    <img alt="logo" src={logo}/>

</footer>
    );
}

export default FooterSection;