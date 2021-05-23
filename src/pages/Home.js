import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

import Header from 'parts/Header';
import Button from 'elements/Button';

export default function Home() {
	return (
		<div className="home-wrapper">
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
							'Mobile Apps Developer',
							'IoT Developer',
							'Automation Engineer',
						]}
						typeSpeed={40}
						backSpeed={60}
						loop
					></Typed>
				</div>

				<Button className="btn-main-hire" href="#" type="link">
					Hire me
				</Button>
			</div>
		</div>
	);
}
