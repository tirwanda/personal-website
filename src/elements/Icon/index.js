import React from 'react';

import './index.scss';
import Button from 'elements/Button';

export default function IconText() {
	return (
		<Button className="brand-text-icon" href="/" type="link">
			@Tir<span className="text-crimson">wanda.</span>
		</Button>
	);
}
