import React from 'react';
import CardContent from './CardContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMusic, faGamepad, faBullhorn } from '@fortawesome/free-solid-svg-icons';

export default function AboutCard() {
	return (
		<div className="about-card m-1.5 mt-2.5 p-7 overflow-hidden" id="about">
			<CardContent title="About Me">
				<div className="content relative">
					<div className="pt-5 pb-5 font-medium">
						<p>
							I am Axel Estrada, web developer from Tegucigalpa, Honduras and currently i am studying computer
							engineering. I have experience in development of websites an web applications using frameworks like React,
							Vue and Angular. also i am good in Node.js, PHP and MySql. I would love to talk if you have any project in
							mind.
						</p>
					</div>

					<div className="info">
						<ul className="flex flex-wrap">
							<div className="w-full">
								<InfoItem title="Age" value="18" />
								<InfoItem title="Residence" value="Honduras" />
							</div>

							<div className="w-full">
								<InfoItem title="Freelance" value="Available" />
								<InfoItem title="Address" value="Tegucigalpa, Honduras" />
							</div>
						</ul>
					</div>
				</div>
			</CardContent>

			<CardContent title="Services">
				<div className="content relative">
					<div className="flex flex-wrap">
						<Service icon={faCode} name="Web Development">
							Modern and mobile-ready website that will help you reach all of your potential customers.
						</Service>

						<Service icon={faMusic} name="Music Writing">
							Music copying, transcription, arranging and composition services
						</Service>

						<Service icon={faBullhorn} name="Advertising">
							Advertising services include television, radio, print, mail and web.
						</Service>

						<Service icon={faGamepad} name="Game Development">
							Developing memorable and unique mobile android, ios games.
						</Service>
					</div>
				</div>
			</CardContent>
		</div>
	);
}

function InfoItem({ title, value }) {
	return (
		<li className="font-medium">
			<span className="font-semibold uppercase">{title + ' . . . . '}</span>
			{value}
		</li>
	);
}

function Service({ children, icon, name }) {
	return (
		<div className="service w-full flex justify-center flex-col pt-5 pb-5 relative">
			<div className="icon w-16 h-16 flex justify-center items-center rounded-full">
				<FontAwesomeIcon className="text-3xl" icon={icon} />
			</div>

			<h4 className="name mt-4 mb-2 font-medium uppercase">{name}</h4>

			<p>{children}</p>
		</div>
	);
}
