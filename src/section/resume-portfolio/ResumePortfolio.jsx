import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function ResumePortfolio() {
	return (
		<>
			<>
				{/* About me */}
				<Grid container className="section">
					<Grid item className="section-title">
						<span></span>
						<h6>Portfolio</h6>
					</Grid>

					<Grid item xs={12}>
						<Typography className="section-text"></Typography>
					</Grid>
				</Grid>

				{/* Education and Experience */}
				<Grid container className="section"></Grid>

				{/* Service */}
				<Grid container className="section"></Grid>

				{/* Skills */}
				<Grid container className=""></Grid>

				{/* Contact */}
				<Grid container className=""></Grid>
			</>
		</>
	);
}

export default ResumePortfolio;
