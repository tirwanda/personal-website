import { Typography } from '@material-ui/core';
import Button from 'elements/Button';
import React from 'react';

function ResumeProfile() {
	return (
		<div className="profile shadow">
			<div className="profile-name">
				<Typography className="name">Edho Dwi Tirwanda</Typography>
				<Typography className="title">Software Engineer</Typography>
			</div>

			<figure className="profile-imn">
				<img src="" alt="" />
			</figure>

			<div className="profile-information">
				Insert Timeline
				<br />
				<Button>Download Cv</Button>
			</div>
		</div>
	);
}

export default ResumeProfile;
