import React from 'react';
import './footer.scss';

import resumeData from 'util/resumeData';

function Footer() {
	return (
		<div className="home-footer">
			<div className="container section-footer">
				<p>
					I makeas soon as possibale.You really like my work,if you
					don&#8217;t i change this until you like I give you
					seticfaction result
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
