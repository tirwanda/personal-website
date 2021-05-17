import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from 'elements/Button';

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

	return (
		<div ref={(el) => (menu = el)} className="hamburger-menu">
			<div
				ref={(el) => (revealMenuBackground = el)}
				className="menu-secondary-background-color"
			></div>
			<div ref={(el) => (revealMenu = el)} className="menu-layer">
				<div className="menu-picture-background"></div>
				<div className="container">
					<div className="wrapper">
						<div className="menu-links">
							<nav>
								<ul>
									<li>
										<Button
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
								Achievement:
								<span> KRI 2016</span>
								<span> KRI 2017</span>
								<span> PIMNAS</span>
								<span> KRI 2018</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
