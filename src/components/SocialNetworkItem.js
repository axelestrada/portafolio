import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialNetworkItem({href, icon}) {
	return (
		<a className="inline-block w-4 h-4 mr-1.5 ml-1.5" href={href} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon className="icon" icon={icon} />
		</a>
	);
}
