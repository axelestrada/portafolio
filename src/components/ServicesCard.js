import React from 'react';
import CardContent from './CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

export default function ServicesCard() {
	return (
		<div className="services-card m-1.5 mt-2.5 p-7 overflow-hidden" id="services">
			<CardContent title="Services">
				<div className="content relative">
					<div className="flex flex-wrap">
						<Service icon={faCode} name="Web Development">
							Modern website that can help you get new customers and thus generate a greater number of sales.
						</Service>

						<Service icon={faSearchengin} name="Seo Optimization">
							You have a website but you do not get the expected number of visitors, we optimize your website so that it
							appears in the first google results.
						</Service>

						<Service icon={faMobileAlt} name="Mobile Development">
							Attracts the attention of many more potential customers with a mobile application that reflects your
							potential and superiority over the competition.
						</Service>

						<Service icon={faHeadset} name="Customer Support">
							Support to all our clients to clear each of their doubts and be able to make a better decision about what
							they really need.
						</Service>
					</div>
				</div>
			</CardContent>
		</div>
	);
}


function Service({ children, icon, name }) {
	return (
		<div className="service w-full flex justify-center flex-col pt-5 pb-5 relative">
			<div className="icon w-16 h-16 flex justify-center items-center rounded-full">
				<FontAwesomeIcon className="text-3xl text-greenMain" icon={icon} />
			</div>

			<h4 className="name mt-4 mb-2 font-medium uppercase text-usm text-white85">{name}</h4>

			<p>{children}</p>
		</div>
	);
}
