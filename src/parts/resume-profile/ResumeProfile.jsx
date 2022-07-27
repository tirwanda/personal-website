import { Typography } from '@material-ui/core';
import React from 'react';
import './resumeProfile.scss';

import Button from 'elements/resume-button/ResumeButton';
import CustomeTimeline, {
	CustomTimelineSeparator,
} from 'parts/resume-timeline/ResumeTimeline';
import Profile from 'assets/images/profile.jpg';
import myCv from 'assets/files/resume-web.pdf';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import resumeData from 'util/resumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

const CustomTimelineItem = ({ title, text, link }) => {
	return (
		<TimelineItem className={'timeline'}>
			<CustomTimelineSeparator />
			<TimelineContent>
				{link ? (
					<Typography className="content">
						<span className="title">{title}</span>
						{' : '}
						<a href={link} target="_blank" rel="noreferrer">
							<span className="text">{text}</span>
						</a>
					</Typography>
				) : (
					<Typography className="content">
						<span className="title">{title}</span>
						{' :'} <span className="text">{text}</span>
					</Typography>
				)}
			</TimelineContent>
		</TimelineItem>
	);
};

function ResumeProfile() {
	return (
		<div className="profile container-shadow">
			<div className="profile-name">
				<Typography className="name">{resumeData.name}</Typography>
				<Typography className="title">{resumeData.title}</Typography>
			</div>

			<figure className="profile-img">
				<img src={Profile} alt="" />
			</figure>

			<div className="profile-information">
				<CustomeTimeline icon={<AccountCircleIcon />}>
					<CustomTimelineItem title="Name" text={resumeData.name} />
					<CustomTimelineItem
						title="Birthday"
						text={resumeData.birthday}
					/>
					<CustomTimelineItem title="Email" text={resumeData.email} />
					{Object.keys(resumeData.socials).map((key) => (
						<CustomTimelineItem
							key={key}
							title={key}
							text={resumeData.socials[key].username}
							link={resumeData.socials[key].link}
						/>
					))}
				</CustomeTimeline>

				<div className="btn-container">
					<a href={myCv} target="_blank" rel="noopener noreferrer">
						<Button
							className="btn-download"
							text="Download CV"
							icon={<GetAppIcon />}
						></Button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default ResumeProfile;
