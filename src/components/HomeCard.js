import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLinkAction } from '../redux/NavbarDuck';
import { setIsScrollingAction } from '../redux/IsScrollingDuck';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function HomeCard() {
	return (
		<>
			<div className="home-card m-1.5 mt-24 min-h-50 md:mt-1.5 relative max-w-2xl md:w-5/12 md:z-50 lg:max-w-md2 lg:w-98 lg:h-99 text-center flex justify-end items-center flex-col">
				<div className="background-image absolute rounded overflow-hidden top-0 left-0 w-full">
					<img
						className="w-full h-full object-cover object-center"
						src="https://nekomedia.com/sliders/images/web-developer/web-development-neko.jpg"
						alt="Web Development Neko"
					/>
				</div>

				<div className="profile-image w-40 h-40 absolute left-1/2 transform -translate-x-1/2">
					<img
						className="w-full border-backgroundMain border-4 h-full rounded-full relative object-cover"
						src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/119461058_764655414317776_7676399625223353836_o.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_eui2=AeGdja-u8eUSoIw2N9TIujN9jeQ16lbXPnKN5DXqVtc-ch8whrhQGvfMTLCuMReXQxo4eowzXNay6IpsSvKsz_4Q&_nc_ohc=nK8g4gMR2CsAX91YgLO&_nc_ht=scontent-mia3-2.xx&oh=fe4a00e142372aeada6b4238b3133e52&oe=605E6F0C"
						alt="Axel Estrada - Web Developer"
					/>
				</div>

				<div className="name mb-2.5 text-white85">
					<h1 className="text-3xl">Axel Estrada</h1>
				</div>

				<div className="mb-3.5">
					<h2 className="text-greenMain">Web Developer</h2>
				</div>

				<div className="social">
					<SocialNetworkItem href="https://facebook.com/axelestrada1524" icon={faFacebookF} />
					<SocialNetworkItem href="https://twitter.com/axelestrada1524" icon={faTwitter} />
					<SocialNetworkItem href="https://github.com/axelestrada" icon={faGithub} />
					<SocialNetworkItem href="https://linkedin.com/in/axelestrada1524" icon={faLinkedinIn} />
					<SocialNetworkItem href="https://stackoverflow.com/users/12783566/axel-estrada" icon={faStackOverflow} />
				</div>

				<div className="links w-full relative mt-5 lg:mt-7 flex justify-center">
					<a
						className="w-1/2 transition text-xs font-medium uppercase text-white85"
						href="https://live.staticflickr.com/65535/50984197411_9f20524dd8_o.png"
						target="_blank"
						rel="noopener noreferrer"
						download
					>
						<span>Download CV</span>
						<FontAwesomeIcon className="ml-2 text-sm" icon={faDownload} />
					</a>
					<DownButton href="contact" text="Contact Me">
						<span className="modern-arrow ml-2"></span>
					</DownButton>
				</div>
			</div>
			<div className="hid"></div>
		</>
	);
}

function DownButton({ children, text, href }) {
	const dispatch = useDispatch();
	const store = useSelector((store) => store);

	const click = (e) => {
		e.preventDefault();

		const infoCards = document.getElementById('info-cards');
		const cards = ['about', 'services', 'skills', 'works', 'contact'];
		const dataTarget = document.getElementById(href);

		if (window.innerWidth < 870) {
			if (store.isScrolling === false) {
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
		<a className="w-1/2 transition text-xs font-medium uppercase text-white85" href={'#' + href} onClick={click}>
			<span>{text}</span>
			{children}
		</a>
	);
}

function SocialNetworkItem({ href, icon }) {
	return (
		<a
			className="inline-block w-4 h-4 mr-2 ml-2 hover:text-white85"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<FontAwesomeIcon className="icon text-base" icon={icon} />
		</a>
	);
}
