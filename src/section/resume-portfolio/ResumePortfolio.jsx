import React from 'react';
import { useState } from 'react';
import { Grid, Tab, Tabs } from '@material-ui/core';
import './resumePortfolio.scss';

import ResumeData from 'util/resumeData';

function ResumePortfolio() {
	const [tabValue, setTabValue] = useState('All');

	return (
		<>
			{/* About me */}
			<Grid container className="section">
				<Grid item className="section-title">
					<span></span>
					<h6>Portfolio</h6>
				</Grid>

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
									? 'custon-tabs-item active'
									: 'custon-tabs-item'
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
									tabValue === 'All'
										? 'custon-tabs-item active'
										: 'custon-tabs-item'
								}
							/>
						))}
					</Tabs>
				</Grid>
			</Grid>
		</>
	);
}

export default ResumePortfolio;
