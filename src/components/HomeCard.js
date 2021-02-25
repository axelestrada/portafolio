import React from 'react';
import profile from '../images/profile.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import SmoothScrolling from './SmoothScrolling';

export default function HomeCard() {
	return (
		<div className="home-card m-1.5 mt-24 md:mt-1.5 relative max-w-2xl md:w-5/12 md:z-50 lg:max-w-md2 lg:w-98 lg:h-99 text-center flex justify-end items-center flex-col">
			<div className="background-image absolute rounded overflow-hidden top-0 left-0 w-full">
				<img
					className="w-full h-full object-cover"
					src="https://myresume.icu/ryancv/images/bg.jpg"
					alt="Axel Estrada"
				/>
			</div>

			<div className="profile-image absolute left-1/2 transform -translate-x-1/2 rounded-full">
				<img
					className="rounded-full w-full h-full border-backgroundMain border-4 relative"
					src={profile}
					alt="Axel Estrada"
				/>
			</div>

			<div className="name mb-2.5 text-white85">
				<h1 className="text-3xl">Axel Estrada</h1>
			</div>

			<div className="mb-3.5">
				<h2 className="text-greenMain">Web Developer</h2>
			</div>

			<div className="social">
				<SocialNetworkItem href="https://facebook.com/" icon={faFacebookF} />
				<SocialNetworkItem href="https://twitter.com/" icon={faTwitter} />
				<SocialNetworkItem href="https://github.com/" icon={faGithub} />
				<SocialNetworkItem href="https://linkedin.com/" icon={faLinkedinIn} />
				<SocialNetworkItem href="https://stackoverflow.com/" icon={faStackOverflow} />
			</div>

			<div className="links w-full relative mt-5 lg:mt-7 flex justify-center">
				<DownButton href="#download" text="Download CV">
					<FontAwesomeIcon className="ml-2 text-sm" icon={faDownload} />
				</DownButton>

				<DownButton href="contact" text="Contact Me">
					<span className="modern-arrow ml-2"></span>
				</DownButton>
			</div>
		</div>
	);
}

function DownButton({ children, text, href }) {
	const click = (e) => {
		e.preventDefault();

		const dataTarget = document.getElementById(href);
		SmoothScrolling(dataTarget);
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
			className="inline-block w-4 h-4 mr-1.5 ml-1.5 hover:text-white85"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<FontAwesomeIcon className="icon text-base" icon={icon} />
		</a>
	);
}
