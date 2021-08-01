import { Grid, Icon, Typography } from '@material-ui/core';
import React from 'react';
import './resumeCv.scss';

import CustomeTimeline, {
	CustomTimelineSeparator,
} from 'parts/resume-timeline/ResumeTimeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import resumeData from 'util/resumeData';
import { SkillsData } from 'data/skills';

import { Work, School } from '@material-ui/icons';

function Cv() {
	return (
		<>
			{/* About me */}
			<Grid container className="section">
				<Grid item className="section-title">
					<span></span>
					<h6 variant="h6">About me</h6>
				</Grid>

				<Grid item xs={12}>
					<Typography className="section-text">
						{resumeData.about}
					</Typography>
				</Grid>
			</Grid>

			{/* Education and Experience */}
			<Grid container className="section">
				<Grid item className="section-title">
					<span></span>
					<h6 variant="h6">Resume</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container>
						<Grid item sm={12} md={6}>
							<CustomeTimeline
								title="Working Hitory"
								icon={<Work />}
							>
								{resumeData.experiences.map((experience) => (
									<TimelineItem key={experience.title}>
										<CustomTimelineSeparator />
										<TimelineContent>
											<Typography className="timeline-title">
												{experience.title}
											</Typography>
											<Typography
												variant="caption"
												className="timeline-date"
											>
												{experience.date}
											</Typography>
											<Typography
												variant="body2"
												className="timeline-desc"
											>
												{experience.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomeTimeline>
						</Grid>

						<Grid item sm={12} md={6}>
							<CustomeTimeline
								title="Education Hitory"
								icon={<School />}
							>
								{resumeData.educations.map((edu) => (
									<TimelineItem key={edu.title}>
										<CustomTimelineSeparator />
										<TimelineContent>
											<Typography className="timeline-title">
												{edu.title}
											</Typography>
											<Typography
												variant="caption"
												className="timeline-date"
											>
												{edu.date}
											</Typography>
											<Typography
												variant="body2"
												className="timeline-desc"
											>
												{edu.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomeTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Service */}
			<Grid container className="section">
				<Grid item className="section-title">
					<span></span>
					<h6 variant="h6">My Services</h6>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						{resumeData.services.map((service) => (
							<Grid
								key={service.title}
								item
								xs={12}
								sm={6}
								md={3}
							>
								<div className="service">
									<Icon className="service-icon">
										{service.icon}
									</Icon>
									<Typography
										variant="h6"
										className="service-title"
									>
										{service.title}
									</Typography>
									<Typography
										variant="body2"
										className="service-description"
									>
										{service.description}
									</Typography>
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			{/* Skills */}
			<Grid container className="section">
				<Grid item className="section-title">
					<span></span>
					<h6 variant="h6">My Skills</h6>
				</Grid>

				<Grid container className="skill-content">
					{SkillsData.map((item, index) => {
						return (
							<div key={index} className="skill-icon-div">
								<img
									src={item.icon}
									className="skill-icon"
									alt={item.platform}
								/>
							</div>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
}

export default Cv;
