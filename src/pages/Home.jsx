import React, { useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { PizzaBlock } from '../components/PizzaBlock';
import axios from 'axios';

export const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      setIsLoading(true);

      const fetchData = async () => {
        const pizzasItem = await axios.get('http://localhost:3004/pizzas');

        setPizzas(pizzasItem.data);

        setIsLoading(false);
      };
      fetchData();
      window.scrollTo(0, 0);
    } catch (error) {
      alert('Ошибка получения данных');
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((obj) => (
              <PizzaBlock
                key={obj.id}
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
    </>
  );
};
