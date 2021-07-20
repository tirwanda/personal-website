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
		<div className="resume top-60">
			<Container>
				<Grid container spacing={7}>
					<Grid item xs={12} sm={12} md={3} lg={3}>
						<ResumeProfile />
					</Grid>
					<Grid item xs>
						<ResumeHeader />
						<Switch>
							<Route exact path="/resume" component={Cv} />
							<Route
								exact
								path="/resume/portfolio"
								component={ResumePortfolio}
							/>
						</Switch>
						<ResumeFooter />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Resume;
