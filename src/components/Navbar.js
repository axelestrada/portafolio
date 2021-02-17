import React from 'react';

export default function Navbar() {
	const navLinkClick = (e) => {
		const links = document.querySelectorAll('header nav ul li a');

		links.forEach((link) => {
			link.classList.remove('active');
		});

		e.target.classList.add('active');
	};

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="#about" onClick={navLinkClick}>
							<span className="fa fa-user"></span>
							<span className="link">About</span>
						</a>
					</li>

					<li>
						<a href="#resume" onClick={navLinkClick}>
							<span className="fa fa-list-alt"></span>
							<span className="link">Resume</span>
						</a>
					</li>

					<li>
						<a href="#skills" onClick={navLinkClick}>
							<span className="fa fa-wrench"></span>
							<span className="link">Skills</span>
						</a>
					</li>

					<li>
						<a href="#works" onClick={navLinkClick}>
							<span className="fa fa-paint-brush"></span>
							<span className="link">Works</span>
						</a>
					</li>

					<li>
						<a href="#contact" onClick={navLinkClick}>
							<span className="fa fa-sms"></span>
							<span className="link">Contact</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
