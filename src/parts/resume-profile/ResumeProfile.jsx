import { Typography } from '@material-ui/core';
import Button from 'elements/Button';
import React from 'react';
import './resumeProfile.scss';

import CustomeTimeline from 'parts/resume-timeline/ResumeTimeline';

import Profile from 'assets/images/profile.jpg';

function ResumeProfile() {
	return (
		<div className="profile shadow">
			<div className="profile-name">
				<Typography className="name">Edho Dwi Tirwanda</Typography>
				<Typography className="title">Software Engineer</Typography>
			</div>

			<figure className="profile-img">
				<img src={Profile} alt="" />
			</figure>

			<div className="profile-information">
				<CustomeTimeline />
				<br />
				<Button>Download Cv</Button>
			</div>
		</div>
	);
}

export default ResumeProfile;
