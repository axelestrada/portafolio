import React from 'react';
import CardContent from './CardContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons';

export default function SkillsCard() {
	return (
		<div className="skills-card m-1.5 mt-2.5 p-7 overflow-hidden" id="skills">
			<CardContent title="My Skills">
				<div className="content relative">
					<div className="skills-list">
						<SkillsTitle name="Frontend" icon={faLaptopCode} />
						<ul>
							<SkillListItem name="HTML5" progress="90" />
							<SkillListItem name="SCSS / CSS3" progress="95" />
							<SkillListItem name="Bootstrap" progress="85" />
							<SkillListItem name="JavaScript" progress="80" />
							<SkillListItem name="JQuery" progress="90" />
							<SkillListItem name="React" progress="75" />
							<SkillListItem name="Angular" progress="15" />
							<SkillListItem name="Vue" progress="10" />
						</ul>
					</div>
				</div>

				<div className="content relative mt-5">
					<div className="skills-circle">
						<SkillsTitle name="Backend" icon={faServer} />
						<ul className="flex flex-wrap">
							<SkillCircleItem name="PHP" progress="70" />
							<SkillCircleItem name="Laravel" progress="30" />
							<SkillCircleItem name="Python" progress="20" />
							<SkillCircleItem name="Django" progress="5" />
							<SkillCircleItem name="MySql" progress="65" />
							<SkillCircleItem name="NodeJs" progress="25" />
							<SkillCircleItem name="Express" progress="15" />
							<SkillCircleItem name="MongoDB" progress="10" />
						</ul>
					</div>
				</div>
			</CardContent>
		</div>
	);
}

function SkillsTitle({ icon, name }) {
	return (
		<div className="skills-title flex items-center pt-5 text-usm">
			<FontAwesomeIcon className="text-2xl text-greenMain" icon={icon} />
			<h4 className="text-white85 uppercase font-medium ml-2">{name}</h4>
		</div>
	);
}

function SkillListItem({ name, progress }) {
	return (
		<li className="skill relative pb-5 pt-5 text-white85 font-medium">
			<h4>{name}</h4>
			<div className="w-full mt-1 bg-backgroundSecondary h-1.5 rounded overflow-hidden">
				<div className="h-full bg-greenMain rounded" style={{ width: progress + '%' }}></div>
			</div>
		</li>
	);
}

function SkillCircleItem({ name, progress }) {
	const dashOffset = 245.044 - (245.044 * progress) / 100;

	return (
		<li className="skill-circle text-base font-medium text-white85 w-1/2 flex justify-center items-center flex-col pt-5 pb-5">
			<div className="relative pb-2">
				<svg class="progress-ring" height="90" width="90">
					<circle stroke="#0d1d26" stroke-width="8" fill="transparent" r="39" cx="45" cy="45" />
					<circle
						class="progress-ring__circle"
						stroke="#18e77c"
						stroke-width="8"
                        stroke-dashoffset={dashOffset}
						stroke-linecap="round"
						fill="transparent"
						r="39"
						cx="45"
						cy="45"
					/>
				</svg>
				<span className="absolute text-lg top-1/2 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2">
					{progress + '%'}
				</span>
			</div>
			<h4>{name}</h4>
		</li>
	);
}
