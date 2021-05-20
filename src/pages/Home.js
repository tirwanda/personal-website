import React from 'react';
import heroImg from 'assets/images/hero-2-bw.png';
import Button from 'elements/Button';

export default function Home() {
	return (
		<div className="container">
			<div className="hero">
				<h1 className="hero-heading">
					<span>Hello, This is</span>
					<div className="hero-name">Edho Dwi Tirwanda</div>
				</h1>
				<div className="hero-img">
					<img src={heroImg} alt="My Foto" />
				</div>
				<div className="hero-info">
					<p>
						I am working as full stack developer with 1+ years of
						hands of experience designing, developing and
						implementing application and solutions using a range of
						technology and programming language.
					</p>
					<Button className="button" href="/portfolio" type="link">
						See My Works
					</Button>
				</div>
			</div>
		</div>
	);
}
