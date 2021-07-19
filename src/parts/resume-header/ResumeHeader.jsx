import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import resumeData from 'util/resumeData';
import ResumeButton from 'elements/resume-button/ResumeButton';
import './resumeHeader.scss';

import TelegramIcon from '@material-ui/icons/Telegram';

import {
	Button,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from 'react-bootstrap';
import {
	HomeRounded,
	SchoolRounded,
	Facebook,
	LinkedIn,
	GitHub,
	Instagram,
} from '@material-ui/icons';

function ResumeHeader(props) {
	const pathName = props?.location?.pathname;

	return (
		<Navbar expand="lg" sticky="top" className="header">
			<Nav.Link as={NavLink} to="/">
				<Navbar.Brand className="header-home">
					<HomeRounded />
				</Navbar.Brand>
			</Nav.Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="header-left">
					<Nav.Link
						as={NavLink}
						to="/resume"
						className={
							pathName === '/resume'
								? 'header-link-active'
								: 'header-link'
						}
					>
						Resume
					</Nav.Link>

					<Nav.Link
						as={NavLink}
						to="/resume/portfolio"
						className={
							pathName === '/resume/portfolio'
								? 'header-link-active'
								: 'header-link'
						}
					>
						Portfolio
					</Nav.Link>

					<Nav.Link
						as={NavLink}
						to="/resume/blog"
						className={
							pathName === '/resume/blog'
								? 'header-link-active'
								: 'header-link'
						}
					>
						Blog
					</Nav.Link>

					<Nav.Link
						as={NavLink}
						to="/resume/contact"
						className={
							pathName === '/resume/contact'
								? 'header-link-active'
								: 'header-link'
						}
					>
						Contact
					</Nav.Link>
				</Nav>

				<div className="header-right">
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
					<ResumeButton
						className="btn-download"
						text="Hire Me"
						icon={<TelegramIcon />}
					></ResumeButton>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default withRouter(ResumeHeader);
