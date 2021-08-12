import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from 'elements/Button';

import { Link, animateScroll as scroll } from 'react-scroll';

import elforza16 from 'assets/images/elforza16.jpg';
import elforza17 from 'assets/images/elforza17.jpg';
import elforza18 from 'assets/images/elforza18.jpg';
import pimnas from 'assets/images/pimnas.jpg';
import myTeam from 'assets/images/myTeam.jpg';

import {
	staggerReveal,
	fadeInUp,
	staggerText,
	staggerRevealClose,
	handleAchievment,
	handleAchievmentReturn,
	handleHover,
	handleHoverExit,
} from 'parts/Animation';

const achievement = [
	{ name: 'KRI 2016', image: elforza16 },
	{ name: 'KRI 2017', image: elforza17 },
	{ name: 'KRI 2018', image: elforza18 },
	{ name: 'PIMNAS', image: pimnas },
	{ name: 'My Team', image: myTeam },
];

export default function Hamburger({ state }) {
	// Vars for Dom nodes
	let menu = useRef(null);
	let revealMenu = useRef(null);
	let revealMenuBackground = useRef(null);
	let pictureBackground = useRef(null);
	let line1 = useRef(null);
	let line2 = useRef(null);
	let line3 = useRef(null);
	let line4 = useRef(null);
	let info = useRef(null);

	useEffect(() => {
		if (state.clicked === false) {
			staggerRevealClose(revealMenu, revealMenuBackground);

			gsap.to(menu, {
				duration: 1,
				css: { display: 'none' },
			});
		} else if (
			state.clicked === true ||
			(state.clicked === true && state.initial === null)
		) {
			gsap.to(menu, {
				duration: 0,
				css: { display: 'block' },
			});

			gsap.to([revealMenuBackground, revealMenu], {
				duration: 0,
				opacity: 1,
				height: '100%',
			});

			staggerReveal(revealMenuBackground, revealMenu);
			fadeInUp(info);
			staggerText(line1, line2, line3, line4);
		}
	}, [state]);

	return (
		<div ref={(el) => (menu = el)} className="hamburger-menu">
			<div
				ref={(el) => (revealMenuBackground = el)}
				className="menu-secondary-background-color"
			></div>
			<div ref={(el) => (revealMenu = el)} className="menu-layer">
				<div
					ref={(el) => (pictureBackground = el)}
					className="menu-picture-background"
				></div>
				<div className="container">
					<div className="wrapper">
						<div className="menu-links">
							<nav>
								<ul>
									<li>
										<Link
											spy={true}
											to="about"
											smooth={true}
											offset={-50}
										>
											<Button
												hoverEnter={(e) =>
													handleHover(e)
												}
												hoverOut={(e) =>
													handleHoverExit(e)
												}
												reff={(el) => (line1 = el)}
												className=""
												href="/"
												type="link"
											>
												About me
											</Button>
										</Link>
									</li>
									<li>
										<Button
											hoverEnter={(e) => handleHover(e)}
											hoverOut={(e) => handleHoverExit(e)}
											reff={(el) => (line2 = el)}
											onClick={scroll.toToTop}
											href="/resume"
											type="link"
										>
											Resume
										</Button>
									</li>
									<li>
										<Link
											spy={true}
											to="projects"
											smooth={true}
											offset={-50}
										>
											<Button
												hoverEnter={(e) =>
													handleHover(e)
												}
												hoverOut={(e) =>
													handleHoverExit(e)
												}
												reff={(el) => (line3 = el)}
												className=""
												href="/"
												type="link"
											>
												Projects
											</Button>
										</Link>
									</li>
									<li>
										<Link
											spy={true}
											to="skills"
											smooth={true}
											offset={-50}
										>
											<Button
												hoverEnter={(e) =>
													handleHover(e)
												}
												hoverOut={(e) =>
													handleHoverExit(e)
												}
												reff={(el) => (line4 = el)}
												className=""
												href="/"
												to="skills"
												type="link"
											>
												Skills
											</Button>
										</Link>
									</li>
								</ul>
							</nav>
							<div ref={(el) => (info = el)} className="info">
								<h3>Our Promise</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Fuga alias sit facere
									animi similique possimus aliquid odit ut
									consequatur at?
								</p>
							</div>
							<div className="achievement">
								Achievement :
								{achievement.map((el) => (
									<span
										key={el.name}
										onMouseEnter={() =>
											handleAchievment(
												el.image,
												pictureBackground
											)
										}
										onMouseOut={() =>
											handleAchievmentReturn(
												pictureBackground
											)
										}
									>
										{el.name}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
