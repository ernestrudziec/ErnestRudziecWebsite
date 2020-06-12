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
        <h1>My works 🙋‍♂️</h1>
      </div>
      <div className={styles.gallery}>
        <Project
          name="HELLaw - lawyers hub"
          description="My biggest application ever made in real team. Cannot tell any special infos because It's not published yet. I can show code and demo only for verified recruiters after e-mail or call."
          url="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          bgcolor={dark_blue}
        />

        <Project
          name="Coronavirus-Live"
          github="https://github.com/ernestrudziec/coronavirus-live"
          link="https://koronawirus-live.pl"
          bgcolor={pink}
          description="Website made in React to provide newest data about coronaviurs worldwide using arcgis API."
          url="https://images.pexels.com/photos/3970332/pexels-photo-3970332.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />

        <Project
          name="Military Councils Guide App"
          bgcolor={dark_blue2}
          github="https://github.com/ernestrudziec/EventHelperApp"
          link="https://zjazdkum.online"
          description="Website made as a guide for students on XXVII Military Student Councils Meeting in Szczytno, Poland"
          url={url1}
        />

        <Project
          name="ernestrudziec.com"
          link="https://www.ernestrudziec.com"
          github="https://github.com/ernestrudziec/ErnestRudziecWebsite"
          bgcolor={dark_blue}
          description="Just this website! ;)  Made with React css-modules and styled-components. Deployed on netlify."
          url="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />

        <Project
          name="Sleep-Manager"
          bgcolor={mint}
          link="https://sleep-manager.netlify.app"
          github="https://github.com/ernestrudziec/sleep-manager"
          description="Website made in React for my friend as a presentation of her invention."
          url="https://images.pexels.com/photos/914910/pexels-photo-914910.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />

        <Project
          name="Welding Company"
          github="https://github.com/ernestrudziec/WeldingCompanyReactWebsite"
          bgcolor={dark_blue}
          link="https://adrian-myjak-welding.netlify.app"
          description="Website made for my friend as his welding company promotion."
          url="https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />

        <Project
          name="Windaww"
          bgcolor={dark_blue2}
          link="https://windaww.netlify.app"
          description="Website made for polish company manufacturing windows. Only front-end side ended so it only looks for now. Just any given back-end yet."
          url="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />

        <Project
          name="Familiada"
          bgcolor={pink}
          github="https://github.com/ernestrudziec/familiada-react"
          description="Website allowing people to play polish popular game by opening website on 2 independent devices and connecting to online rooms. Used node.js."
          url="https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />

        <Project
          name="Grafikowanie"
          link="https://grafikowanie.netlify.app"
          github="https://github.com/ernestrudziec/GrafikowanieStaticWebsite"
          bgcolor={mint}
          description="That's one of my first websites made simply in HTML/CSS for my personal purposes when I was only freelance Graphic Designer"
          url="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Project
          name="Falowanie"
          link="https://falowanie.netlify.app"
          bgcolor={pink}
          description="Blog for my friend made with react, gatsby.js and DatoCMS."
          url="https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <Project
          name="Dreamakers"
          link="https://dreamakers.netlify.app"
          bgcolor={dark_blue2}
          description="Website for my friend made just for college purposes. About wedding photography. (Only desktop version, not responsive)"
          url="https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
        <Project
          name="Want-watch"
          link="https://wantwatch.netlify.app"
          bgcolor={mint}
          description="Web application made as a movie wish-list maker - uses filmweb.pl api and not fully working yet because of CORS problems"
          url="https://images.pexels.com/photos/1040159/pexels-photo-1040159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
    </div>
  );
};

export default MyWorksSection;
