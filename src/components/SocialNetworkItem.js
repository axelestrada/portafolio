import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialNetworkItem(props) {
	return (
		<a className="inline-block w-4 h-4 mr-1.5 ml-1.5" href={props.href} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon className="icon" icon={props.icon} />
		</a>
	);
}
