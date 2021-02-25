import React from 'react';
import CardContent from './CardContent';
import Card from './Card';

export default function AboutCard() {
	return (
		<Card cardId="about" otherClasses="active">
			<CardContent title="About Me">
				<div className="content relative">
					<div className="pt-5 pb-5 font-medium">
						<p>
							I am Axel Estrada, web developer from Tegucigalpa, Honduras and currently i am studying computer
							engineering. I have experience in development of websites and web applications using technologies like
							React, Vue and Angular. also i am good in Node.js, PHP and MySql. I would love to talk if you have any
							project in mind.
						</p>
						<p className="hidden md:block">
							<br />I am constantly learning new technologies that allow me to increase my efficiency and speed when
							developing a project, large or small.
						</p>
						<p className="hidden md:block">
							<br />
							Recently I have been studying frontend technologies like Angular, Vue and React and now I want to
							specialize more in the backend technologies like NodeJs, Python and MongoDB
						</p>
					</div>

					<div className="info">
						<ul className="flex flex-wrap overflow-hidden">
							<div className="w-full sm:w-1/2">
								<InfoItem title="Age" value="18" />
								<InfoItem title="Residence" value="Honduras" />
							</div>

							<div className="w-full sm:w-1/2">
								<InfoItem title="Freelance" value="Available" />
								<InfoItem title="Address" value="Tegucigalpa, Honduras" />
							</div>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function InfoItem({ title, value }) {
	return (
		<li className="font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
			<span className="font-semibold uppercase text-white85">{title + ' . . . . '}</span>
			{value}
		</li>
	);
}
