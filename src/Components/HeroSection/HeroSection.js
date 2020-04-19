import React from "react";
import styles from './HeroSection.module.scss';
import logoPicture from "../../assets/svg/logotyp.svg";
import programmerPicture from "../../assets/svg/programmer.svg";
import lightPicture from '../../assets/svg/lightProgrammer.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import wave from '../../assets/svg/wave1.svg';
import logoPicture2 from '../../assets/svg/logotyp2.svg';

const HeroSection = () => {

    return(


    <div className={styles.wrapper}>


        <div className={styles.socialMediaIcons}>
            <ScrollAnimation offset={0} animateOnce={true} animateIn="fadeInLeft" delay={2000}>



                <i className="fab fa-dribbble"></i>
                <a href="/contact"><i className="fas fa-phone"></i></a>
                <a href='https://www.linkedin.com/in/ernest-rudziec-4225231a7/'><i className="fab fa-linkedin-in"></i></a>
                <i className="fab fa-behance"></i>
            </ScrollAnimation>
        </div>



        <header>

            <ScrollAnimation animateOnce={true} animateIn="fadeIn" offset={0}>
            <img className={styles.logoPicture2} src={logoPicture2}/>
            <img className={styles.logoPicture} src={logoPicture}/>

            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce={true}>
            <h1>Front-end developer ‍💻 and UI/UX Designer 🎨</h1>

            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay={1200} animateOnce={true}>
            <button className={styles.resume}>My resume</button>
            </ScrollAnimation>
        </header>
        <div className={styles.contactInfos} >
        <ScrollAnimation animateOnce={true} offset={0} animateIn="fadeInRight" delay={1500}>


            <a href="https://github.com/ernestrudziec"><i className="fab fa-github"></i></a>
            <a href="/cv"><i className="fas fa-address-card"></i></a>
            <a href="https://www.instagram.com/ernest_rudziec/"><i className="fab fa-instagram"></i></a>
            <a href="/contact"><i className="fas fa-envelope"></i></a>





        </ScrollAnimation>
        </div>



        <a href="#about-me"><div className={styles.scrollDown}>

            {/*trochę o mnie*/}
            about me

            <i className="fas fa-arrow-down"></i></div></a>
        <img className={styles.lightPicture} src={lightPicture}/>
        <img className={styles.programmerPicture} src={programmerPicture}/>




    </div>

    );

}

export default HeroSection;