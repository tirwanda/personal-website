import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './resumeCv.scss';

import data from 'util/resumeData';

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
				<div className="section-left">
					<Grid item className="section-title">
						<span></span>
						<h6 variant="h6">Working History</h6>
					</Grid>
				</div>
				<div className="section-right">
					<Grid item className="section-title">
						<span></span>
						<h6 variant="h6">Education History</h6>
					</Grid>
				</div>
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
