import React from 'react';
import CardContent from './CardContent';
import Card from './Card';

export default function WorksCard() {
	return (
		<Card cardId="works">
			<CardContent title="Works">
				<div className="content relative">
					<div className="works flex flex-wrap">
						<div className="left sm:w-1/2 sm:pr-2">
							<Work
								name="Calculator with React Native"
								category="Mobile Development"
								image="https://myresume.icu/ryancv/images/works/work1.jpg"
								imageAlt="Modern Calculator in React Native"
							/>
							<Work
								name="Social Website"
								category="Web Development"
								image="https://myresume.icu/ryancv/images/works/work4.jpg"
								imageAlt="Social Website Using HTML, CSS and JavaScript"
							/>
							<Work
								name="MP3 Player"
								category="Web Development"
								image="https://myresume.icu/ryancv/images/works/work8.jpg"
								imageAlt="MP3 Player Using Only HTML, CSS & JavaScript"
							/>
							<Work
								name="Social Website"
								category="Web Development"
								image="https://myresume.icu/ryancv/images/works/work7.jpg"
								imageAlt="Social Website Using HTML, CSS and JavaScript"
							/>
						</div>

						<div className="right sm:w-1/2 sm:pl-2">
							<Work
								name="Calculator with React Native"
								category="Mobile Development"
								image="https://myresume.icu/ryancv/images/works/work2.jpg"
								imageAlt="Modern Calculator in React Native"
							/>
							<Work
								name="Social Website"
								category="Web Development"
								image="https://myresume.icu/ryancv/images/works/work8.jpg"
								imageAlt="Social Website Using HTML, CSS and JavaScript"
							/>
							<Work
								name="Social Website"
								category="Web Development"
								image="https://myresume.icu/ryancv/images/works/work4.jpg"
								imageAlt="Social Website Using HTML, CSS and JavaScript"
							/>
							<Work
								name="MP3 Player"
								category="Web Development"
								image="https://myresume.icu/ryancv/images/works/work6.jpg"
								imageAlt="MP3 Player Using Only HTML, CSS & JavaScript"
							/>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function Work({ name, category, image, imageAlt }) {
	return (
		<div className="pb-5 sm:pb-0 pt-5 text-center text-usm uppercase text-white85 font-medium">
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
