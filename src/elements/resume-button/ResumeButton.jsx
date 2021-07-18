import React from 'react';
import { Button } from '@material-ui/core';

import './resumeButton.scss';

const ResumeButton = ({ text, icon }) => {
	return (
		<Button
			className="btn"
			endIcon={icon ? <div className="icon-container">{icon}</div> : null}
		>
			<span className="btn-text">{text}</span>
		</Button>
	);
};

export default ResumeButton;
