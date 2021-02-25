import React from 'react';

export default function Card({ children, cardId, otherClasses }) {
	return (
		<div
			className={
				cardId + '-card m-1.5 mt-2.5 p-7 overflow-hidden max-w-2xl md:absolute md:top-0 md:left-0 md:w-full md:m-0 md:pl-10 ' + (otherClasses !== undefined ? otherClasses : '')
			}
			id={cardId}
		>
			{children}
		</div>
	);
}
