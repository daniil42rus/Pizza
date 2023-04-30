import React, { useContext, useEffect, useState } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { PizzaBlock } from '../components/PizzaBlock';
import axios from 'axios';
import { AppContext } from '../App';
import { Pagination } from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  // const categoryId = useSelector((state) => state.filterSlice.categoryId);
  // const sortType = useSelector((state) => state.filterSlice.sort);
  const { categoryId, sortType } = useSelector((state) => state.filterSlice);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [categoryId, setCategoryId] = useState(0);
  // const setCategoryId = 0;
  // const [sortType, setSortType] = useState({
  //   name: 'популярности (DESC)',
  //   sortProperty: 'rating',
  // });

  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue } = useContext(AppContext);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    try {
      setIsLoading(true);

      const fetchData = async () => {
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sortProperty.replace('-', '');
        const category = categoryId && `category=${categoryId}`;
        const search = searchValue && `q=${searchValue}`;

        const pizzasItem = await axios.get(
          `http://localhost:3004/pizzas?${category}&_sort=${sortBy}&_order=${order}&${search}&_limit=4&_page=${currentPage}`
        );

        setPizzas(pizzasItem.data);
        setIsLoading(false);
      };
      fetchData();
      window.scrollTo(0, 0);
    } catch (error) {
      alert('Ошибка получения данных');
      console.log(error);
    }
  }, [categoryId, sortType, searchValue, currentPage]);

  // const filteritems = pizzas.filter((item) =>
  //   item.title.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const skeleton = [...Array(8)].map((_, index) => <Skeleton key={index} />);
  const pizzasAll = pizzas.map((obj) => (
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
  ));

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        {/* <Sort value={sortType} onClickSort={(obj) => setSortType(obj)} /> */}
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzasAll}</div>
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
};
