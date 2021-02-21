import React from 'react';
import CardContent from './CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function EducationCard() {
	return (
		<div className="education-card m-1.5 mt-2.5 p-7 overflow-hidden" id="education">
			<CardContent title="Education">
				<div className="content relative">
					<EducationItem date="February 2021" name="Database Course In MySQL" company="Código Facilito">
						Learn to manage databases through one of the most popular drivers, MySQL.
					</EducationItem>

					<EducationItem date="December 2020" name="Angular Course" company="Tomas Ruiz Diaz">
						Learn to develop modern applications with Angular from scratch with this powerful Google framework! (Angular
						+11).
					</EducationItem>

					<EducationItem date="October 2020" name="React Course" company="Bluuweb!">
						Learn React JS step by step this 2020, Creating SPA projects with Login, React Hooks, Redux, Context API &
						Firebase.
					</EducationItem>

					<EducationItem date="September 2020" name="Full Javascript Course" company="Yoney Gallardo">
						Learn JavaScript in depth, the most used programming language in the world behind the ancestral C and Java.
					</EducationItem>

					<EducationItem date="Agost 2020" name="CSS Course" company="Soy Dalto">
						Learn the basics and advanced concepts of CSS to create amazing interfaces using HTML5 and CSS.
					</EducationItem>

					<EducationItem date="July 2020" name="HTML5 Course" company="Soy Dalto">
						Everything you need to know to create a website using HTML5 in 2020 from the most basic concepts to the most
						advanced.
					</EducationItem>
				</div>
			</CardContent>
		</div>
	);
}

function EducationItem({ date, name, company, children }) {
	return (
		<div className="education-item w-full relative flex justify-center flex-col pt-5 pb-5">
			<div className="date flex items-center text-uxs">
				<FontAwesomeIcon className="text-greenMain" icon={faClock} />
				<h4 className="ml-1 text-white66">{date}</h4>
			</div>
			<div className="pb-3 pt-3 text-usm font-medium uppercase">
				<h4 className="text-white85">{name}</h4>
				<h4 className="text-white66 font-light text-uxs">{company}</h4>
			</div>
			<div className="description">
				<p>{children}</p>
			</div>
		</div>
	);
}
