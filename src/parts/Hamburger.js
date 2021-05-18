import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from 'elements/Button';

import elforza16 from 'assets/images/elforza16.jpg';
import elforza17 from 'assets/images/elforza17.jpg';
import elforza18 from 'assets/images/elforza18.jpg';
import pimnas from 'assets/images/pimnas.jpg';
import myTeam from 'assets/images/myTeam.jpg';

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
	let info = useRef(null);

	useEffect(() => {
		if (state.clicked === false) {
			gsap.to([revealMenu, revealMenuBackground], {
				duration: 0.8,
				height: 0,
				ease: 'power3.inOut',
				stagger: {
					amount: 0.07,
				},
			});

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
			staggerText(line1, line2, line3);
		}
	}, [state]);

	const staggerReveal = (node1, node2) => {
		gsap.from([node1, node2], {
			duration: 0.8,
			height: 0,
			transformOrigin: 'right top',
			skewY: 2,
			ease: 'power3.inOut',
			stagger: {
				amount: 0.1,
			},
		});
	};

	const fadeInUp = (node1) => {
		gsap.from(node1, {
			y: 60,
			duration: 1,
			delay: 0.2,
			opacity: 0,
			ease: 'power3.inOut',
		});
	};

	const staggerText = (node1, node2, node3) => {
		gsap.from([node1, node2, node3], {
			y: 100,
			duration: 0.8,
			delay: 0.2,
			ease: 'power3.inOut',
			stagger: {
				amount: 0.5,
			},
		});
	};

	const handleAchievment = (achievement) => {
		gsap.to(pictureBackground, {
			duration: 0,
			background: `url(${achievement}) no-repeat center center fixed`,
			backgroundSize: 'cover',
			height: '100%',
		});
		gsap.to(pictureBackground, {
			duration: 0.4,
			opacity: 1,
			ease: 'power3.inOut',
		});
		gsap.from(pictureBackground, {
			duration: 0.4,
			skewY: 2,
			ease: 'power3.inOut',
			transformOrigin: 'right top',
		});
	};

	const handleAchievmentReturn = () => {
		gsap.to(pictureBackground, {
			duration: 0.4,
			opacity: 0,
		});
	};

	const handleHover = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: 3,
			skewX: 4,
			ease: 'power3.inOut',
		});
	};

	const handleHoverExit = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: -3,
			skewX: 0,
			ease: 'power3.inOut',
		});
	};

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
										<Button
											hoverEnter={(e) => handleHover(e)}
											hoverOut={(e) => handleHoverExit(e)}
											reff={(el) => (line1 = el)}
											className=""
											href="/resume"
											type="link"
										>
											Resume
										</Button>
									</li>
									<li>
										<Button
											hoverEnter={(e) => handleHover(e)}
											hoverOut={(e) => handleHoverExit(e)}
											reff={(el) => (line2 = el)}
											className=""
											href="/portfolio"
											type="link"
										>
											Portfolio
										</Button>
									</li>
									<li>
										<Button
											hoverEnter={(e) => handleHover(e)}
											hoverOut={(e) => handleHoverExit(e)}
											reff={(el) => (line3 = el)}
											className=""
											href="/skills"
											type="link"
										>
											Skills
										</Button>
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
											handleAchievment(el.image)
										}
										onMouseOut={handleAchievmentReturn}
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
