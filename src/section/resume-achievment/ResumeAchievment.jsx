import React, { useState } from 'react';
import './resumeAchievment.scss';

import ResumeData from 'util/resumeData';
import {
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Grow,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
} from '@material-ui/core';
import { Card } from 'react-bootstrap';
import ImageGallery from 'elements/ImageGallery/ImageGallery';

function ResumeAchievment() {
	const [achievmentDialog, setAchievmentDialog] = useState(false);

	return (
		<>
			<Grid container className="section">
				<Grid item className="section-title">
					<span></span>
					<h6>Achievment</h6>
				</Grid>
			</Grid>

			<Grid container className="section-card">
				<Grid item xs={12}>
					<Grid container spacing={2}>
						{ResumeData.achievment?.map((achievment) => (
							<Grid
								item
								key={achievment.title}
								xs={12}
								sm={6}
								md={4}
							>
								<Grow in timeout={1000}>
									<Card
										className="custom-card"
										onClick={() =>
											setAchievmentDialog(achievment)
										}
									>
										<CardActionArea>
											<CardMedia
												className="custom-card-image"
												image={achievment.image}
												title={achievment.title}
											/>
											<CardContent>
												<Typography className="custom-card-title">
													{achievment.title}
												</Typography>
												<Typography
													variant="caption"
													className="custom-card-caption"
												>
													{' '}
													<span>From: </span>
													{achievment.organizer}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grow>
							</Grid>
						))}
					</Grid>
				</Grid>
				<Dialog
					open={achievmentDialog}
					onClose={() => setAchievmentDialog(false)}
					className="project-dialog"
					maxWidth={'lg'}
				>
					<DialogTitle onClose={() => setAchievmentDialog(false)}>
						{achievmentDialog.title}
					</DialogTitle>
					<DialogContent style={{ heigh: '80vh' }}>
						{achievmentDialog.image && (
							<ImageGallery images={achievmentDialog.image} />
						)}
						<Typography className="project-dialog-description">
							{achievmentDialog.description}
						</Typography>
					</DialogContent>
					<DialogActions className="project-dialog-actions">
						{achievmentDialog?.links?.map((link) => (
							<a
								key={link.link}
								href={link.link}
								targer="_blank"
								className="action-icon"
							>
								{link.icon}
							</a>
						))}
					</DialogActions>
				</Dialog>
			</Grid>
		</>
	);
}

export default ResumeAchievment;
