import Button from 'elements/Button';
import SectionTitle from 'elements/Title';
import Header from 'parts/Header';
import React from 'react';

import aboutFoto from 'assets/images/hero_1.png';

export default function About() {
	return (
		<div className="about">
			<Header />
			<div className="wrapper">
				<div className="container">
					<div className="about-left">
						<SectionTitle
							className="section-title"
							heading="About me"
							subheading="Let me introduce my self"
						/>

						<p>
							I started programming with C in 2016 (still I love C
							& *Pointer) then I jumped to Node.js & React.js for
							Web Development and React native for Mobile App
							development and now I am working with Java,
							React.js, React Native.
						</p>
						<div className="about-btn">
							<Button className="btn-works" href="#" type="link">
								Works
							</Button>
							<Button className="btn-read" href="#" type="link">
								Read More
							</Button>
						</div>
					</div>

					<div className="about-right">
						<img src={aboutFoto} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
