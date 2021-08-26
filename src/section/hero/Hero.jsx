import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import './hero.scss';

import Button from 'elements/Button';
import Header from 'parts/header/Header';
import SocialContact from 'elements/social-contact/SocialContact';

export default function Hero() {
	return (
		<div className="hero-wrapper">
			<Particles
				params={{
					particles: {
						number: {
							value: 30,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 6,
								color: '#f9ab00',
							},
						},
					},
				}}
			/>
			<Header />
			<div className="main-info">
				<h3>Hello, my name is</h3>
				<h1>Edho Dwi Tirwanda</h1>
				<div className="text-3">
					And I'm a{' '}
					<Typed
						className="typed-text"
						strings={[
							'Web Developer',
							'Android Developer',
							'IoT Developer',
							'Automation Engineer',
						]}
						typeSpeed={40}
						backSpeed={60}
						loop
					></Typed>
				</div>

				<Button
					className="btn-main-hire"
					href="/resume/contact"
					type="link"
				>
					Hire me
				</Button>
				<SocialContact />
			</div>
		</div>
	);
}
