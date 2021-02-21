import React from 'react';
import CardContent from './CardContent';
import work1 from '../images/works/work1.jpg';
import work2 from '../images/works/work2.jpg';
import work3 from '../images/works/work3.jpg';

export default function WorksCard() {
	return (
		<div className="works-card m-1.5 mt-2.5 p-7 overflow-hidden" id="works">
			<CardContent title="Works">
				<div className="content relative">
					<Work
						name="Calculator with React Native"
						category="Mobile Development"
						image={work1}
						imageAlt="Modern Calculator in React Native"
					/>
					<Work
						name="Social Website"
						category="Web Development"
						image={work2}
						imageAlt="Social Website Using HTML, CSS and JavaScript"
					/>
					<Work
						name="MP3 Player"
						category="Web Development"
						image={work3}
						imageAlt="MP3 Player Using Only HTML, CSS & JavaScript"
					/>
					<Work
						name="Calculator with React Native"
						category="Mobile Development"
						image={work1}
						imageAlt="Modern Calculator in React Native"
					/>
					<Work
						name="Social Website"
						category="Web Development"
						image={work2}
						imageAlt="Social Website Using HTML, CSS and JavaScript"
					/>
					<Work
						name="MP3 Player"
						category="Web Development"
						image={work3}
						imageAlt="MP3 Player Using Only HTML, CSS & JavaScript"
					/>
				</div>
			</CardContent>
		</div>
	);
}

function Work({ name, category, image, imageAlt }) {
	return (
		<div className="pb-5 pt-5 text-center text-usm uppercase text-white85 font-medium">
			<div className="image">
				<img src={image} alt={imageAlt} />
			</div>
			<div className="description pt-3">
				<h4>{name}</h4>
				<h5 className="text-white66 font-light text-uxs">{category}</h5>
			</div>
		</div>
	);
}
