import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './header.scss';
import BrandIcon from 'parts/BrandIcon';
import Hamburger from 'parts/Hamburger';

function Header({ history }) {
	// State for menu button
	const [state, setState] = useState({
		initial: false,
		clicked: null,
		menuName: 'Menu',
	});

	// State for disabled button
	const [disabled, setDisabled] = useState(false);

	// State for Scrolle
	const [isScrooled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => window.onscroll == null;
	};

	console.log(window.pageYOffset);

	// State for page changes
	useEffect(() => {
		history.listen(() => {
			setState({
				clicked: false,
				menuName: 'Menu',
			});
		});
	});

	const handleMenu = () => {
		disableMenu();
		if (state.initial === false) {
			setState({
				initial: null,
				clicked: true,
				menuName: 'Close',
			});
		} else if (state.clicked === true) {
			setState({
				clicked: !state.clicked,
				menuName: 'Menu',
			});
		} else if (state.clicked === false) {
			setState({
				clicked: !state.clicked,
				menuName: 'Close',
			});
		}
	};

	const disableMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	};

	return (
		<header className={isScrooled ? 'scrolled' : ''}>
			<div className="container">
				<div className="wrapper">
					<div className="inner-header">
						<div className="logo">
							<BrandIcon />
						</div>

						<div className="menu">
							<button disabled={disabled} onClick={handleMenu}>
								{state.menuName}
							</button>
						</div>
					</div>
				</div>
			</div>
			<Hamburger state={state} />
		</header>
	);
}

export default withRouter(Header);
