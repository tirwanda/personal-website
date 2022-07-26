import React from 'react';
import './footer.scss';

import resumeData from 'util/resumeData';

function Footer() {
	return (
		<div className="home-footer">
			<div className="container section-footer">
				<p>
					I can complete projects quickly according to needs, and if
					the results are not suitable, I will correct them until the
					client gets a satisfactory result
				</p>
				<div className="social-icons">
					{Object.keys(resumeData.socials).map((key) => (
						<a
							key={key}
							href={resumeData.socials[key].link}
							target="_blank"
							rel="noreferrer"
						>
							{resumeData.socials[key].icon}
						</a>
					))}
				</div>
				<p className="copyright">&copy;Copyright by Tirwanda</p>
			</div>
		</div>
	);
}

export default Footer;
