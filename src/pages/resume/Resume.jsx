import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './resume.scss';

import ResumeHeader from 'parts/resume-header/ResumeHeader';
import ResumeProfile from 'parts/resume-profile/ResumeProfile';
import ResumePortfolio from 'section/resume-portfolio/ResumePortfolio';
import Cv from 'section/resume-cv/ResumeCv';
import ResumeFooter from 'parts/resume-footer/ResumeFooter';

const Resume = () => {
	return (
		<div className="resume top-60">
			<Container>
				<Grid container spacing={7}>
					<Grid item xs={12} sm={12} md={3} lg={3}>
						<ResumeProfile />
					</Grid>
					<Grid item xs>
						<ResumeHeader />
						<div className="main-content container-shadow">
							<Switch>
								<Route exact path="/resume" component={Cv} />
								<Route
									exact
									path="/resume/portfolio"
									component={ResumePortfolio}
								/>
								<Route path="/resume" component={Cv} />
							</Switch>
						</div>
						<ResumeFooter />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Resume;
