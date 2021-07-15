import React from 'react';
import './timeline.scss';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

const ResumeTimeline = ({ title, icon, children }) => {
	return (
		<Timeline className={'timeline'}>
			<TimelineItem className={'timeline-first'}>
				<TimelineSeparator>
					<TimelineDot className={'timeline-dot-header'}>
						{<AccountCircleIcon />}
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Typography variant="h6" className={'timeline-header'}>
						{title}
					</Typography>
				</TimelineContent>
			</TimelineItem>

			{children}

			<TimelineItem className="timeline-content">
				<CustomTimelineSeparator />
				<TimelineContent>Code</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export const CustomTimelineSeparator = () => {
	return (
		<TimelineSeparator className={'timeline-padding'}>
			<TimelineDot variant={'outlined'} className={'timeline-dot'} />
			<TimelineConnector />
		</TimelineSeparator>
	);
};

export default ResumeTimeline;
