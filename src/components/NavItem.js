import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem(props) {
	const dispatch = useDispatch();
    const navbarDuck = useSelector(store => store);

	return (
		<li>
			<a
				href={'#' + props.href}
				className={navbarDuck.currentLink === props.href ? 'link active' : 'link'}
				onClick={() => dispatch(setCurrentLinkAction(props.href))}
			>
				<FontAwesomeIcon className="icon" icon={props.icon} />
				<span>{props.href}</span>
			</a>
		</li>
	);
}
