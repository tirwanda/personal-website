import React from 'react';
import './homeTitle.scss';

import { Grid } from '@material-ui/core';
import Separator from 'elements/separator/Separator';

function HomeTitle({ title }) {
	return (
		<Grid item xs={12} className="elements-title">
			<Separator />
			<label className="section-title">{title}</label>
		</Grid>
	);
}

export default HomeTitle;
