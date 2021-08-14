import React from 'react';
import './home.scss';

import Hero from 'section/hero/Hero';
import About from 'section/about/About';
import Footer from 'parts/footer/Footer';
import Projects from 'section/projects/Projects';
import Skills from 'section/skills/Skills';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Footer />
		</>
	);
}
