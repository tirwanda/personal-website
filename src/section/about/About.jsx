import React from 'react';
import Typed from 'react-typed';
import './about.scss';

import myCv from 'assets/files/resume-web.pdf';

import elforza18 from 'assets/images/elforza18.jpg';
import { Grid } from '@material-ui/core';

import resumeData from 'util/resumeData';
import HomeTitle from 'elements/home-title/HomeTitle';

function About() {
	return (
		<Grid container className="home-about container" id="about">
			<HomeTitle title="About Me" />

			<Grid item xs={12}>
				<Grid container spacing={3}>
					<Grid item sm={12} md={6}>
						<div className="about-image">
							<img src={elforza18} alt="El-Forza-18" />
						</div>
					</Grid>

					<Grid item sm={12} md={6}>
						<div className="about-right">
							<div className="about-text">
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
							<p>{resumeData.about}</p>
							<a
								href={myCv}
								download="Edho-Dwi-Tirwanda_CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Download Cv
							</a>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default About;
