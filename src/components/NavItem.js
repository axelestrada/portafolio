import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';
import { setIsScrollingAction } from '../redux/IsScrollingDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavItem({ href, icon }) {
	const dispatch = useDispatch();
	const store = useSelector((store) => store);
	const cards = ['about', 'services', 'skills', 'works', 'contact'];	

	const click = (e) => {
		e.preventDefault();

		const infoCards = document.getElementById('info-cards');
		const dataTarget = document.getElementById(href);

		if (window.innerWidth < 870) {
			if (!store.isScrolling) {
				dispatch(setIsScrollingAction(true));
				dispatch(setCurrentLinkAction(href));

				if (dataTarget) {
					const startLocation = window.pageYOffset;
					const endLocation = dataTarget.offsetTop - 90;
					const distance = endLocation - startLocation;

					const duration = (Math.abs(distance) / 100) * 10;
					const increments = distance / duration;

					let runAnimation = setInterval(() => {
						if (distance >= 0) {
							if (window.pageYOffset >= dataTarget.offsetTop - 90) {
								dispatch(setIsScrollingAction(false));
								clearInterval(runAnimation);
							}
						} else {
							if (window.pageYOffset <= dataTarget.offsetTop - 90) {
								dispatch(setIsScrollingAction(false));
								clearInterval(runAnimation);
							}
						}

						window.scrollBy(0, increments);
					}, 1);
				}
			}
		} else if (!infoCards.classList.contains('animate') && href !== store.currentLink) {
			dispatch(setCurrentLinkAction(href));
			infoCards.classList.add('animate');

			setTimeout(() => {
				cards.forEach((card) => {
					if (card !== href) {
						document.getElementById(card).classList.remove('active');
					} else {
						document.getElementById(card).classList.add('active');
						document.getElementById(card).scrollTo(0, 0);
					}
				});
			}, 1000);

			setTimeout(() => {
				document.getElementById('info-cards').classList.remove('animate');
				dispatch(setIsScrollingAction(false));
			}, 2000);
		}
	};

	return (
		<li className="list-none">
			<a
				href={'#' + href}
				className="flex hover:text-greenMain text-uxs justify-center items-center flex-col uppercase font-medium transition"
				style={{ color: store.currentLink === href ? '#18e77c' : '#ffffffd9' }}
				onClick={click}
			>
				<FontAwesomeIcon className="mb-1.5 text-lg" icon={icon} />
				<span>{href}</span>
			</a>
		</li>
	);
}
