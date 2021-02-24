import React from 'react';
import NavItem from './NavItem';

import { faUser, faTools, faHammer, faSms, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	return (
		<header className="navbar max-w-xl fixed top-0 left-1/2 bg-backgroundMain rounded m-1.5">
			<nav>
				<ul className="flex justify-evenly items-center">
					<NavItem href="about" icon={faUser} />
					<NavItem href="services" icon={faCog} />
					<NavItem href="skills" icon={faTools} />
					<NavItem href="works" icon={faHammer} />
					<NavItem href="contact" icon={faSms} />
				</ul>
			</nav>
		</header>
	);
}
