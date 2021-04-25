import React from 'react';
import styles from './WhatICanSection.module.scss';
import smallLogo from '../../assets/svg/miniicon.svg';

const WhatICanSection = () => {
	return (
		<section id="my-skills" className={styles.wrapper}>
			{/*<h1>Co potrafię? 🖖🏻</h1>*/}
			<div className={styles.mySkills}>
				<img src={smallLogo} />
				<h1>My skills 🖖🏻</h1>
			</div>

			<div className={styles.wrapperInside}>
				<div className={styles.designerWrapper}>
					<h2>as graphic designer</h2>
					{/*<article>Stawiam na prostotę. <strong>Lubię elegancki i na maksa*/}
					{/*    czytelny design.</strong> Kiedy trzeba potrafię też użyć różnych kolorów i kształtów.*/}
					{/*</article>*/}
					<i className="fas fa-pencil-ruler"></i>
					<article>
						I focus on simplicity. <strong> I like elegant and easy to read design. </strong> When I need
						to, I can also use different colors and shapes.
					</article>

					<h3>
						{/*W czym tworzę?*/}
						What am I using?
					</h3>
					<article className={styles.whatIUseDesign}>
						<ul>
							<li>Figma</li>
							<li>Sketch</li>
							<li>Adobe XD</li>
							<li>Adobe Photoshop</li>
							<li>Adobe Illustrator</li>
						</ul>

						<p className={styles.adobe}>
							{/*Dzięki zajawce do fotografii i kręcenia wideo większość produktów z pakietu Adobe Creative nie stanowi dla mnie wyzwania.*/}
							I am familiar with almost all products from <b>Adobe Creative Suite</b>.
						</p>
					</article>
					<h3>
						{/*Co lubię projektować?*/}
						What I like to design?
					</h3>
					{/*<article>*/}
					{/*    UI/UX desing | logotypy | strony internetowe | banery | wizytówki | ulotki | brand | social media*/}
					{/*</article>*/}

					<article>
						UI / UX | logotypes | websites | banners | business cards | leaflets | brand design | social
						media
					</article>
				</div>

				<div className={styles.developerWrapper}>
					<h2>as front-end developer</h2>
					<i className="fas fa-code" />
					<article>
						{/*Porządek w kodzie i plikach to podstawa. Staram się zawsze wybierać <strong>najlepsze rozwiązanie do danej realizacji</strong>, które zapewni najlepszą efektywność.*/}
						Order in code and files is the basis. I always try to choose the best solution for a given
						implementation that will ensure <strong>the best efficiency.</strong>
					</article>
					<h3>
						{/*Z czego dobrze korzystam?*/}
						What am I familiar with?
					</h3>
					<article className={styles.whatIUse}>
						<ul>
							<li>HTML, SASS, styled-components</li>
							<li>JavaScript ES6+, TypeScript</li>
							<li>React + Redux / Context API</li>
							<li>(SSG) -> Gatsby.js, Next.js</li>
							<li>React Native basics</li>
							<li>Git/GitHub/BitBucket</li>
							<li>NPM & Yarn</li>
							<li>AWS, Netlify, Vercel</li>
							<li>GraphCMS, DatoCMS</li>
							<li>API Rest, graphQL, Apollo</li>
							<li>Webpack, Babel, ESLint, Prettier, Husky</li>
						</ul>
					</article>
					<h3>What will I be good at?</h3>
					<article className={styles.whatIWillUse}>
						Currently trying to learn backend and databases basics using node.js + express.
					</article>
				</div>

				<div className={styles.humanWrapper}>
					<h2>as person</h2>

					<i className="fas fa-user-tie"></i>
					<article>
						{/*Porządek w kodzie i plikach to podstawa. Staram się zawsze wybierać <strong>najlepsze rozwiązanie do danej realizacji</strong>, które zapewni najlepszą efektywność.*/}
						I am a communicative, helpful and creative person. I am still learning and I like to face new
						problems. I am not afraid of new experiences.
					</article>

					<h3>
						{/*Z czego dobrze korzystam?*/}
						What am I interested about?
					</h3>
					<article className={styles.whatIUse}>
						<ul>
							<li>Photography</li>
							<li>Drones</li>
							<li>Football</li>
							<li>Learning new skills</li>
							<li>Video games</li>
							<li>Cybersecurity </li>
							<li>Sociology </li>
							<li>Politics</li>
						</ul>
					</article>
					<h3>Languages I speak</h3>
					<article className={styles.whatIWillUse}>
						My native language is <s>javascript</s> polish but I also speak and write well in english.
					</article>
				</div>
			</div>
		</section>
	);
};

export default WhatICanSection;
