import React from 'react';
import { useState } from 'react';
import './projects.scss';

import {
	Grid,
	Tab,
	Tabs,
	Grow,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@material-ui/core';

import ResumeData from 'util/resumeData';
import ImageGallery from 'elements/ImageGallery/ImageGallery';
import HomeTitle from 'elements/home-title/HomeTitle';
import { Fragment } from 'react';

function Projects() {
	const [tabValue, setTabValue] = useState('All');
	const [projectDialog, setProjectDialog] = useState(false);

	return (
		<>
			<Grid
				id="projects"
				container
				className="home-project container section"
			>
				<HomeTitle title="My Projects" />
				<Grid item xs={12}>
					<Tabs
						value={tabValue}
						indicatorColor="primary"
						className="custom-tabs"
						onChange={(event, newValue) => setTabValue(newValue)}
					>
						<Tab
							label="All"
							value="All"
							className={
								tabValue === 'All'
									? 'custom-tabs-item active'
									: 'custom-tabs-item'
							}
						/>

						{[
							...new Set(
								ResumeData.portfolio.map((item) => item.tag)
							),
						].map((tag) => (
							<Tab
								key={tag}
								label={tag}
								value={tag}
								className={
									tabValue === tag
										? 'custon-tabs-item active'
										: 'custon-tabs-item'
								}
							/>
						))}
					</Tabs>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						{ResumeData.portfolio.map((project, index) => (
							<Fragment key={index}>
								{tabValue === project.tag ||
								tabValue === 'All' ? (
									<Grid
										item
										key={project.title}
										xs={12}
										md={6}
										lg={4}
									>
										<Grow in timeout={1000}>
											<Card
												className="custom-card"
												onClick={() =>
													setProjectDialog(project)
												}
											>
												<CardActionArea>
													<CardMedia
														className="custom-card-image"
														image={project.image[0]}
														title={project.title}
													/>
													<CardContent>
														<Typography className="custom-card-title">
															{project.title}
														</Typography>
														<Typography
															variant="caption"
															className="custom-card-caption"
														>
															{project.caption}
														</Typography>
													</CardContent>
												</CardActionArea>
											</Card>
										</Grow>
									</Grid>
								) : null}
							</Fragment>
						))}
					</Grid>
				</Grid>
				<Dialog
					open={projectDialog}
					onClose={() => setProjectDialog(false)}
					className="project-dialog"
					maxWidth={'lg'}
				>
					<DialogTitle onClose={() => setProjectDialog(false)}>
						{projectDialog.title}
					</DialogTitle>
					<DialogContent style={{ heigh: '80vh' }}>
						{projectDialog.image && (
							<ImageGallery images={projectDialog.image} />
						)}
						<Typography className="project-dialog-description">
							{projectDialog.description}
						</Typography>
					</DialogContent>
					<DialogActions className="project-dialog-actions">
						{projectDialog?.links?.map((link) => (
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

export default Projects;
