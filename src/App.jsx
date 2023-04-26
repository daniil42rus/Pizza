import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

import './scss/app.scss';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';

export const AppContext = createContext({});

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};
