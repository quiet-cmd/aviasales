import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/price/price-action';

import './price-filter.scss';

const PriceFilter = ({ cheap, fast, optimal }) => {
  return (
    <div className="price-filter">
      <label className="price-filter__filter">
        <input
          type="radio"
          name="price"
          defaultChecked={true}
          className="price-filter__input"
          onClick={() => cheap()}
        />
        <span className="price-filter__text">Самый дешевый</span>
      </label>
      <label className="price-filter__filter">
        <input type="radio" name="price" className="price-filter__input" onClick={() => fast()} />
        <span className="price-filter__text">Самый быстрый</span>
      </label>
      <label className="price-filter__filter">
        <input type="radio" name="price" className="price-filter__input" onClick={() => optimal()} />
        <span className="price-filter__text">Оптимальный</span>
      </label>
    </div>
  );
};

export default connect(null, action)(PriceFilter);
