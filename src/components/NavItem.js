import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmoothScrolling from './SmoothScrolling';

export default function NavItem({ href, icon }) {
	const dispatch = useDispatch();
	const currentLink = useSelector((store) => store.currentLink);

	const click = (e) => {
		e.preventDefault();

		const infoCards = document.getElementById('info-cards');
		const cards = ['about', 'services', 'skills', 'works', 'contact'];
		const dataTarget = document.getElementById(href);

		if (window.innerWidth < 870) {
			dispatch(setCurrentLinkAction(href));
			SmoothScrolling(dataTarget);
		} else if (!infoCards.classList.contains('animate')) {
			dispatch(setCurrentLinkAction(href));
			infoCards.classList.add('animate');

			setTimeout(() => {
				cards.forEach((card) => {
					if (card !== href) {
						document.getElementById(card).classList.remove('active');
					} else {
						document.getElementById(card).classList.add('active');
					}
				});
			}, 1000);

			setTimeout(() => {
				document.getElementById('info-cards').classList.remove('animate');
			}, 2000);
		}
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
