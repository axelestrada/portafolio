import React from 'react';

export default function ButtonHomeCard({ children, text, href }) {
	return (
		<a className="w-1/2 transition text-xs font-medium uppercase" href={href}>
			<span>{text}</span>
			{children}
		</a>
	);
}
