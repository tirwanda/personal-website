import React from 'react';
import Typed from 'react-typed';
import './about.scss';

import elforza18 from 'assets/images/elforza18.jpg';

function About() {
	return (
		<div className="about" id="about">
			<div className="container container-px container-py">
				<h2 className="title">About Me.</h2>
				<div className="about-content">
					<div className="column left">
						<img src={elforza18} alt="" />
					</div>
					<div className="column right">
						<div className="text">
							I'am Edho Dwi Tirwanda and I'm a{' '}
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
						<p>
							High-quality professional with 1+ years of IT
							experiences in development, implementation and
							testing of Client-Server, Web Applications using
							JAVA/J2EE technologies, Spring Framework. Interested
							in a challenging career in web application
							development environment. Skilled in JAVA/J2EE,
							Mongodb, MySQL, PostgreSql Reactjs, React Native,
							Nodejs/Expressjs.
						</p>
						<a href="/">Download CV</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default About;
