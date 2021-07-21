import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './resumeCv.scss';

import CustomeTimeline, {
	CustomTimelineSeparator,
} from 'parts/resume-timeline/ResumeTimeline';
import data from 'util/resumeData';

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
						{data.about}
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
							></CustomeTimeline>
						</Grid>
						<Grid item sm={12} md={6}>
							<CustomeTimeline
								title="Working Hitory"
								icon={<School />}
							></CustomeTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Service */}
			<Grid container className="section"></Grid>

			{/* Skills */}
			<Grid container className=""></Grid>

			{/* Contact */}
			<Grid container className=""></Grid>
		</>
	);
}

export default Cv;
