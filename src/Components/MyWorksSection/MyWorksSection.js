import React from "react";
import Project from "./components/Project/Project";
import styles from "./MyWorksSection.module.scss";
import iconify from "../../assets/svg/miniicon.svg";

const mint = "#52C0D6";
const dark_blue = "#111126";
const pink = "#ff2a6d";
const light_blue = "#d1f7ff";
const dark_blue2 = "#01012b";

const url1 =
  "https://images.pexels.com/photos/40820/military-men-departing-service-uniform-40820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const MyWorksSection = () => {
  return (
    <div id="my-works" className={styles.wrapper}>
      <div className={styles.topHeaderWrapper}>
        <img src={iconify} />
        <h1>Worked with</h1>
      </div>
      <div className={styles.gallery}>
        <Project
          name="Wirtualna Polska Group"
          logoUrl={
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Wirtualna-Polska-Logo-2014.png"
          }
          description="I've had opportunity to work for Wirtualna Polska Group as developer of their e-mail web application. It's one of the biggest if not the biggest news portal in Poland."
          url="https://d2xhqqdaxyaju6.cloudfront.net/file/teaser-ci/489356/1046880630/1366-400.jpg"
          bgcolor={"#540a0b"}
        />

        <Project
          name="BTC Studios S.A"
          color="#303030"
          github="https://github.com/ernestrudziec/coronavirus-live"
          link="https://koronawirus-live.pl"
          bgcolor={"white"}
          logoWidth={"350px"}
          logoMarginBottom={"-3rem"}
          logoMarginTop={"-3rem"}
          logoUrl={
            "https://www.pcdm.pl/wp-content/uploads/2021/03/Logo___kopia-removebg-preview.png"
          }
          description="Cooperating with BTC Studios is such a great experience. I've been their React front-end developer for projects such as: zorrothegame.com or addsomehoroes.com"
          url="https://images.pexels.com/photos/3970332/pexels-photo-3970332.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />

        <Project
          name="TDY Today"
          bgcolor={"black"}
          logoUrl={"https://tdy.pl/assets/img/logo.png"}
          github="https://github.com/ernestrudziec/EventHelperApp"
          link="https://zjazdkum.online"
          description="I've had a really great time at Today. Working there brought me a lot of experience with working with big clients such as British American Tobacco, Avon, Rainbow and Meglio. I also gained a lot of knowledge about UI/UX Design, marketing strategies and information about software developing process."
          url={
            "https://scontent-frx5-1.xx.fbcdn.net/v/t1.6435-9/123024638_2820740801548538_6685228917349749839_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=lx7ikarYcQcAX_wlb35&_nc_ht=scontent-frx5-1.xx&oh=b4c304978ac8e817112d7c0105104f4f&oe=60E8486B"
          }
        />
        <Project
          name="Avrio Interactive"
          bgcolor={"white"}
          logoHeight={"150px"}
          logoWidth={"150px"}
          logoMarginBottom={"-2rem"}
          color={"#303030"}
          logoUrl={"https://avrio.pl/avrio2019/img/logo.png"}
          github="https://github.com/ernestrudziec/EventHelperApp"
          link="https://zjazdkum.online"
          description="Currently working with this agency for multiple clients from around the world. Developing front-end layer of agatinia.pl, medcoswiss.pl and avrio.pl"
          url={
            "https://tipsmake.com/data/images/what-is-agency-picture-1-GMIed657H.jpg"
          }
        />
        <Project
          name="Symbioza LAB"
          bgcolor={"black"}
          logoUrl={
            "https://scontent-frt3-1.xx.fbcdn.net/v/t31.18172-8/16402550_242243622890325_2497352474864074006_o.png?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=c2tvauVThrAAX98EUlj&_nc_ht=scontent-frt3-1.xx&oh=39199176f127c44ebf7e84a2b2b8292a&oe=60E9ED6E"
          }
          logoMarginBottom={"1rem"}
          github="https://github.com/ernestrudziec/EventHelperApp"
          link="https://zjazdkum.online"
          description="Developing website projects for clients."
          url={
            "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        />
        <Project
          name="pianujemy.com.pl"
          bgcolor={"#F8EAE3"}
          color={"#303030"}
          logoUrl={"https://pianujemy.com.pl/assets/logo.png"}
          logoMarginBottom={"0rem"}
          logoWidth={"120px"}
          github="https://github.com/ernestrudziec/EventHelperApp"
          link="https://zjazdkum.online"
          description="Developing front-end layer of website"
          url={
            "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
        />
        <Project
          name="intensivevr.com"
          bgcolor={"white"}
          color={"#303030"}
          logoUrl={"https://intensivevr.com/assets/logo/logo.svg"}
          logoMarginBottom={"-1rem"}
          logoMarginTop={"2rem"}
          logoWidth={"200px"}
          logoHeight={"auto"}
          github="https://github.com/ernestrudziec/EventHelperApp"
          link="https://zjazdkum.online"
          description="Designing UI/UX of their website and their main product 9D Cinemas UI. Developing front-end layer of web application."
          url={"https://intensivevr.com/assets/hero/bg1.png"}
        />
      </div>
    </div>
  );
};

export default MyWorksSection;
