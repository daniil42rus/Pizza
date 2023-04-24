import React from 'react';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { Sort } from './components/Sort';
import { PizzaBlock } from './components/PizzaBlock';

import pizzass from './assets/pizzas.json';

import './scss/app.scss';

console.log(pizzass);

export const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{pizzass.map((obj) => (
							<PizzaBlock
								// id={obj.id}
								// imageUrl={obj.imageUrl}
								// title={obj.title}
								// types={obj.types}
								// sizes={obj.sizes}
								// price={obj.price}
								// category={obj.category}
								// rating={obj.rating}
								{...obj}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
