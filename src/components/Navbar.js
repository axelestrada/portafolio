import React from 'react';
import NavItem from './NavItem';

import { faUser, faWrench, faLaptopCode, faSms, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	return (
		<header className="navbar fixed top-0 left-0 bg-backgroundMain rounded m-1.5">
			<nav>
				<ul className="flex justify-evenly items-center">
					<NavItem href="about" icon={faUser} />
					<NavItem href="education" icon={faGraduationCap} />
					<NavItem href="skills" icon={faWrench} />
					<NavItem href="works" icon={faLaptopCode} />
					<NavItem href="contact" icon={faSms} />
				</ul>
			</nav>
		</header>
	);
}
