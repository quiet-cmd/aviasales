import React from 'react';

import './price-filter.scss';

const PriceFilter = () => {
  return (
    <div className="price-filter">
      <label className="price-filter__filter">
        <input type="radio" name="price" className="price-filter__input" />
        <span className="price-filter__text">Самый дешевый</span>
      </label>
      <label className="price-filter__filter">
        <input type="radio" name="price" className="price-filter__input" />
        <span className="price-filter__text">Самый быстрый</span>
      </label>
      <label className="price-filter__filter">
        <input type="radio" name="price" className="price-filter__input" />
        <span className="price-filter__text">Оптимальный</span>
      </label>
    </div>
  );
};

export default PriceFilter;
