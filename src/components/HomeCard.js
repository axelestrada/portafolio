import React from 'react';
import profile from '../images/profile.png';
import bg from '../images/bg.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialNetworkItem from './SocialNetworkItem';

import { faFacebookF, faGithub, faLinkedinIn, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function HomeCard() {
	return (
		<div className="home-card m-1.5 mt-24 relative text-center flex justify-end items-center flex-col">
			<div className="background-image absolute rounded overflow-hidden top-0 left-0 w-full">
				<img className="w-full h-full object-cover" src={bg} alt="Axel Estrada" />
			</div>

			<div className="profile-image absolute left-1/2 transform -translate-x-1/2 rounded-full">
				<img className="rounded-full w-full h-full border-4 relative" src={profile} alt="Axel Estrada" />
			</div>

			<div className="name mb-2.5">
				<h1 className="text-3xl">Axel Estrada</h1>
			</div>

			<div className="occupation mb-3.5">
				<h2>Web Developer</h2>
			</div>

			<div className="social">
				<SocialNetworkItem href="https://facebook.com/" icon={faFacebookF} />
				<SocialNetworkItem href="https://twitter.com/" icon={faTwitter} />
				<SocialNetworkItem href="https://github.com/" icon={faGithub} />
				<SocialNetworkItem href="https://linkedin.com/" icon={faLinkedinIn} />
				<SocialNetworkItem href="https://stackoverflow.com/" icon={faStackOverflow} />
			</div>

			<div className="links w-full relative mt-5 flex justify-center">
				<DownButton href="#download" text="Download CV">
					<FontAwesomeIcon className="ml-2 text-sm" icon={faDownload} />
				</DownButton>

				<DownButton href="#contact" text="Contact Me">
					<span className="modern-arrow ml-2"></span>
				</DownButton>
			</div>
		</div>
	);
}

function DownButton({ children, text, href }) {
	return (
		<a className="w-1/2 transition text-xs font-medium uppercase" href={href}>
			<span>{text}</span>
			{children}
		</a>
	);
}