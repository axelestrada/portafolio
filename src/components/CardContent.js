import React from 'react';

export default function CardContent({ children, title }) {
	return <div className="card-content">
        <div className="title mb-4 pb-1.5 relative">
			<h3 className="text-lg font-medium">{title}</h3>
		</div>

        {children}
    </div>;
}
