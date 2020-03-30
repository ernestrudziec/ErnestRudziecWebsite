import React from "react";
import programmerPicture from '../../assets/svg/programmer.svg';
import styles from './HomePageView.module.scss';
import logoPicture from '../../assets/svg/logotyp.svg';
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutMeSection from "../../Components/AboutMeSection/AboutMeSection";
import "animate.css/animate.min.css";
import MyWorksSection from "../../Components/MyWorksSection/MyWorksSection";
import WhatICanSection from "../../Components/WhatICanSection/WhatICanSection";
import FooterSection from "../../Components/FooterSection/FooterSection";
import WebScraping from "../../Components/WebScraping/WebScraping";

const HomePageView = () => {

    return(
<>
   <WebScraping/>
   {/* <HeroSection/>*/}
   {/*<AboutMeSection/>*/}
   {/*<WhatICanSection/>*/}
   {/*<MyWorksSection/>*/}
   {/*<FooterSection/>*/}
</>

    );

};

export default HomePageView;
