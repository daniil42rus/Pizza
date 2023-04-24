import React, { useState } from 'react';

export const Categories = () => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => (
					<li
						onClick={() => setActiveIndex(index)}
						className={activeIndex === index ? 'active' : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
