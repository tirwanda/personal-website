import React from 'react';
import './resumeAchievment.scss';

import ResumeData from 'util/resumeData';
import { CardActionArea, CardMedia, Grid, Grow } from '@material-ui/core';
import { Card } from 'react-bootstrap';

function ResumeAchievment() {
	return (
		<Grid container className="section">
			<Grid item className="section-title">
				<span></span>
				<h6>Achievment</h6>
			</Grid>

			<Grid item xs={12} sm={6} md={4}>
				<Grid container spacing={2}>
					{ResumeData.achievment?.map((achievment) => (
						<Grid item key={achievment.title} xs={12} sm={6} md={4}>
							<Grow in timeout={1000}>
								<Card className="custom-card">
									<CardActionArea>
										<CardMedia
											className="custom-card-image"
											image={achievment.image}
											title={achievment.title}
										></CardMedia>
									</CardActionArea>
								</Card>
							</Grow>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ResumeAchievment;
