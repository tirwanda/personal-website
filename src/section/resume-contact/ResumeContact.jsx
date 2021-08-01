import React from 'react';
import './resumeContact.scss';

import ResumeData from 'util/resumeData';

import Button from 'elements/resume-button/ResumeButton';

import { Grid, TextField, Typography } from '@material-ui/core';
import BackupRoundedIcon from '@material-ui/icons/BackupRounded';

function ResumeContact() {
	return (
		<Grid container className="section">
			<Grid item xs={12} lg={7}>
				<Grid container>
					<Grid item className="section-title">
						<span></span>
						<h6 variant="h6">Contact Form</h6>
					</Grid>

					<Grid xs={12} item className="contact-form">
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField fullWidth name="name" label="Name" />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									name="email"
									label="Email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									multiline
									rows={3}
									fullWidth
									name="message"
									label="Message"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									className="btn-download"
									text="Submit"
									icon={<BackupRoundedIcon />}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} lg={5}>
				<Grid container>
					<Grid item className="section-title">
						<span></span>
						<h6 variant="h6">Contact Information</h6>
					</Grid>

					<Grid item xs={12}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography className="contact-info">
									<span>Address: </span> {ResumeData.address}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography className="contact-info">
									<span>Phone: </span> {ResumeData.phone}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography className="contact-info">
									<span>Email: </span> {ResumeData.email}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography className="contact-info">
									<span>Job: </span> {ResumeData.title}
								</Typography>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12}>
						<Grid container className="contact-socials-container">
							{Object.keys(ResumeData.socials).map((key) => (
								<Grid item className="social-icon">
									<a href={ResumeData.socials[key].link}>
										{ResumeData.socials[key].icon}
									</a>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ResumeContact;
