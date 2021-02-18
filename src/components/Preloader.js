import React from 'react';
import { useState } from 'react';

export default function Preloader() {
	const [preloaderStyle, setPreloaderStyle] = useState({ opacity: '1' });

	window.onload = () => {
		setPreloaderStyle({ opacity: '0' });
	};

	return (
		<div
			className="preloader fixed top-0 left-0 w-full h-full flex justify-center items-center transition"
			style={preloaderStyle}
		>
			<div className="spinner relative w-10 h-10 inline-block">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
		</div>
	);
}
