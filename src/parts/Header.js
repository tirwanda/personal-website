import React, { useState } from 'react';
import Button from 'elements/Button';
import Icon from 'parts/BrandIcon';

export default function Header(props) {
	const [clicked, setClicked] = useState(false);

	const getNavLinkClass = (path) => {
		console.log('propsnya: ', props);
		return props.location.pathname === path ? ' active' : '';
	};

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<header className="spacing-sm">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
					<Icon />
					<ul
						className={
							clicked
								? 'navbar-nav ml-auto active'
								: 'navbar-nav ml-auto'
						}
					>
						<li className={`nav-item${getNavLinkClass('/')}`}>
							<Button className="nav-link" type="link" href="/">
								Home
							</Button>
						</li>
						<li
							className={`nav-item${getNavLinkClass(
								'/portfolio'
							)}`}
						>
							<Button
								className="nav-link"
								type="link"
								href="/portfolio"
							>
								Portfolio
							</Button>
						</li>
						<li className={`nav-item${getNavLinkClass('/about')}`}>
							<Button
								className="nav-link"
								type="link"
								href="/about"
							>
								About me
							</Button>
						</li>
						<li className={`nav-item${getNavLinkClass('/skill')}`}>
							<Button
								className="nav-link"
								type="link"
								href="/skill"
							>
								Skills
							</Button>
						</li>
						<li
							className={`nav-item${getNavLinkClass('/contact')}`}
						>
							<Button
								className="nav-link"
								type="link"
								href="/contact"
							>
								Contact
							</Button>
						</li>
					</ul>

					<div className="menu-icon" onClick={handleClick}>
						<i
							className={clicked ? 'fas fa-times' : 'fas fa-bars'}
						></i>
					</div>
				</nav>
			</div>
		</header>
	);
}
