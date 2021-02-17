import React from 'react';
import profile from '../images/profile.png';

export default function HomeCard() {
	return (
		<div className="home-card" id="home-card">
			<div className="background-image"></div>

			<div className="profile-image">
				<img src={profile} alt="Axel Estrada" />
			</div>

			<div className="name">
				<h1>Axel Estrada</h1>
			</div>

			<div className="occupation">
				<h2>Software Developer</h2>
			</div>

			<div className="social">
				<a href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
					<span className="fab fa-facebook-f"></span>
				</a>

				<a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
					<span class="fab fa-twitter"></span>
				</a>

				<a target="_blank" href="https://instagram.com/" rel="noopener noreferrer">
					<span class="fab fa-instagram"></span>
				</a>

				<a target="_blank" href="https://github.com/" rel="noopener noreferrer">
					<span class="fab fa-github"></span>
				</a>

				<a target="_blank" href="https://stackoverflow.com/" rel="noopener noreferrer">
					<span class="fab fa-stack-overflow"></span>
				</a>
			</div>

			<div className="links">
				<a className="link" href="#download">
					<span className="text">Download CV</span>
					<span className="fa fa-download"></span>
				</a>

				<a className="link" href="#contact">
					<span className="text">Contact me</span>
					<span className="arrow"></span>
				</a>
			</div>
		</div>
	);
}


// clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);