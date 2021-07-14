import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ResumeFooter from 'parts/resume-footer/ResumeFooter';
import ResumeHeader from 'parts/resume-header/ResumeHeader';
import ResumePortfolio from 'section/resume-portfolio/ResumePortfolio';
import ResumeProfile from 'parts/resume-profile/ResumeProfile';
import React from 'react';
import './resume.scss';
import Cv from 'section/resume-cv/ResumeCv';

function Resume() {
	return (
		<div className="resume">
			<Container>
				<Grid container>
					<Grid item xs={12} sm={12} md={2} lg={2}>
						<ResumeProfile />
					</Grid>
					<Grid item xs>
						<ResumeHeader />
						<Router>
							<Switch>
								<Route
									exact
									path="/resume/portfolio/"
									component={ResumePortfolio}
								/>
								<Route exact path="/resume/" component={Cv} />
							</Switch>
						</Router>
						<ResumeFooter />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Resume;
