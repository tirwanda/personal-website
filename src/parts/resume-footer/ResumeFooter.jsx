import { Typography } from '@material-ui/core';
import React from 'react';
import './resumeFooter.scss';

function ResumeFooter() {
	return (
		<div className="footer">
			<div className="footer-left">
				<Typography className="name">Edho Dwi Tirwanda</Typography>
			</div>
			<div className="footer-right">
				<Typography className="copyright">
					Design and Develop by{' '}
					<a href="/" target="_blank">
						@tirwanda
					</a>
				</Typography>
			</div>
		</div>
	);
}

export default ResumeFooter;
