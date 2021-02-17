import React from 'react';
import { useState } from 'react';

import NavItem from './NavItem';
import { faUser, faListAlt, faWrench, faLaptopCode, faSms } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	const [currentLink, setcurrentLink] = useState('about');

	return (
		<header>
			<nav>
				<ul>
					<NavItem href="about" icon={faUser} currentLink={currentLink} setcurrentLink={setcurrentLink} />
					<NavItem href="resume" icon={faListAlt} currentLink={currentLink} setcurrentLink={setcurrentLink} />
					<NavItem href="skills" icon={faWrench} currentLink={currentLink} setcurrentLink={setcurrentLink} />
					<NavItem href="works" icon={faLaptopCode} currentLink={currentLink} setcurrentLink={setcurrentLink} />
					<NavItem href="contact" icon={faSms} currentLink={currentLink} setcurrentLink={setcurrentLink} />
				</ul>
			</nav>
		</header>
	);
}
