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

		const dataTarget = document.getElementById(href);
		const startLocation = window.pageYOffset;
		const endLocation = dataTarget.offsetTop - 90;
		const distance = endLocation - startLocation;
		let increments = distance / 500;

		if (distance >= 0) {
			if(increments < 1){
				increments = 1;
			}
		}else{
			if (increments > -1) {
				increments = -1;
			}
		}

		console.log(increments);

		let inter = setInterval(() => {
			if (distance >= 0) {
				if (window.pageYOffset >= dataTarget.offsetTop - 90) {
					clearInterval(inter);
				}

				window.scrollBy(0, increments);
			} else {
				if (window.pageYOffset <= dataTarget.offsetTop - 90) {
					clearInterval(inter);
				}

				window.scrollBy(0, increments);
			}
		}, 1);
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
