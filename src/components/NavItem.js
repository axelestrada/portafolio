import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem(props) {
	const dispatch = useDispatch();
    const currentLink = useSelector(store => store.currentLink);

	return (
		<li className="list-none">
			<a
				href={'#' + props.href}
				className={currentLink === props.href ? 'active' : ''}
				onClick={() => dispatch(setCurrentLinkAction(props.href))}
			>
				<FontAwesomeIcon className="icon mb-1.5" icon={props.icon} />
				<span>{props.href}</span>
			</a>
		</li>
	);
}
