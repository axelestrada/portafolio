import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem({href, icon}) {
	const dispatch = useDispatch();
    const currentLink = useSelector(store => store.currentLink);

	return (
		<li className="list-none">
			<a
				href={'#' + href}
				className="flex justify-center items-center flex-col uppercase font-medium transition"
				style={{ color: currentLink === href ? '#18e77c' : '#ffffffd9' }}
				onClick={() => dispatch(setCurrentLinkAction(href))}
			>
				<FontAwesomeIcon className="icon mb-1.5" icon={icon} />
				<span>{href}</span>
			</a>
		</li>
	);
}
