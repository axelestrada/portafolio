import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem({ href, icon }) {
	const dispatch = useDispatch();
	const currentLink = useSelector((store) => store.currentLink);

	const click = (e) => {
		e.preventDefault();
		dispatch(setCurrentLinkAction(href));

		const offset = document.getElementById(href).offsetTop;
		window.scrollTo(0, offset - 90);
	};

	return (
		<li className="list-none">
			<a
				href={'#' + href}
				className="flex hover:text-greenMain text-uxs justify-center items-center flex-col uppercase font-medium transition"
				style={{ color: currentLink === href ? '#18e77c' : '#ffffffd9' }}
				onClick={click}
			>
				<FontAwesomeIcon className="mb-1.5 text-lg" icon={icon} />
				<span>{href}</span>
			</a>
		</li>
	);
}
