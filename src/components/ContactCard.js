import React, { useState } from 'react';
import CardContent from './CardContent';
import Card from './Card';

import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function ContactCard() {
	const { register, handleSubmit } = useForm();
	const [result, setResult] = useState('');

	const onSubmit = (data, e) => {
		setResult('Sending Message...');

		emailjs.send('service_za4zxg6', 'template_uis5qye', data, 'user_yjvVCwCMVKDiAdqs01kjt').then(
			(result) => {
				setResult(result.text === 'OK' ? '¡Message Sent Successfully!' : result.text);
				e.target.reset();

				setTimeout(() => {
					setResult('');
				}, 3000);
			},
			(error) => {
				setResult(error.text);
			}
		);
	};

	return (
		<Card cardId="contact">
			<CardContent title="Get in Touch">
				<div className="content relative">
					<div className="map pt-5 pb-3">
						<iframe
							className="w-full h-48 sm:h-56 lg:h-60"
							title="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.6107009450134!2d-87.18397834195653!3d14.22576759747105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEzJzMyLjgiTiA4N8KwMTAnNTguNCJX!5e1!3m2!1sen!2shn!4v1613948105668!5m2!1sen!2shn"
							style={{ border: 0 }}
							loading="lazy"
						></iframe>
					</div>
					<div className="info">
						<ul className="flex flex-wrap">
							<div className="w-full sm:w-1/2 sm:pr-1">
								<InfoItem title="Address" value="Tegucigalpa, Honduras" />
								<InfoItem title="Email" value="axele1524@gmail.com" />
							</div>

							<div className="w-full sm:w-1/2 sm:pl-1">
								<InfoItem title="Phone" value="+504 8897-9728" />
								<InfoItem title="Freelance" value="Available" />
							</div>
						</ul>
					</div>
				</div>
			</CardContent>

			<CardContent title="Contact Form">
				<div className="content relative">
					<div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="flex flex-wrap">
								<FormInput
									type="text"
									name="from_name"
									placeholder="Full Name"
									register={register}
									message="Enter Your Name"
								/>
								<FormInput
									type="email"
									name="from_email"
									placeholder="Email Address"
									register={register}
									message="Enter Your Email Address"
								/>
								<FormTextarea
									name="message"
									placeholder="Your Message"
									register={register}
									message="Enter Your Message"
								/>
							</div>
							<DownButton text="Send Message" />
						</form>
					</div>

					<span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white85 font-normal text-usm">
						{result}
					</span>
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

function FormInput({ name, placeholder, type, register, message }) {
	return (
		<div className="form-input w-full pt-8 sm:w-1/2">
			<input
				autoComplete="off"
				className="w-full bg-backgroundMain border-b border-white66 text-white85 outline-none text-usm pb-5 focus:border-greenMain hover:border-greenMain"
				type={type}
				name={name}
				placeholder={placeholder}
				ref={register({
					required: {
						value: true,
						message: message,
					},
				})}
			/>
		</div>
	);
}

function FormTextarea({ name, placeholder, register, message }) {
	return (
		<div className="w-full pt-8">
			<textarea
				className="w-full resize-none bg-backgroundMain border-b border-white66 text-white85 outline-none text-usm pb-5 focus:border-greenMain hover:border-greenMain"
				name={name}
				placeholder={placeholder}
				ref={register({
					required: {
						value: true,
						message: message,
					},
				})}
			/>
		</div>
	);
}

function DownButton({ text }) {
	return (
		<button type="submit" className="mt-8 transition text-xs font-medium uppercase outline-none focus:outline-none text-white85">
			<span>{text}</span>
			<span className="modern-arrow ml-2"></span>
		</button>
	);
}
