import React from 'react';

export default function Preloader() {
	window.onload = () => {
		document.querySelector('.preloader').classList.add("hide");
	};

	return (
		<div className="preloader fixed top-0 left-0 w-full h-full flex justify-center items-center">
			<div className="spinner relative w-10 h-10 inline-block">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
		</div>
	);
}
