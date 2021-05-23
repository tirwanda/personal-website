import React from 'react';
import './index.scss';

export default function SectionTitle(props) {
	return (
		<div className="title">
			<p>{props.subheading}</p>
			<h2>{props.heading}</h2>
		</div>
	);
}
