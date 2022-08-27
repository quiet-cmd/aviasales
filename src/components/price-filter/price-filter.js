import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/price/price-action';
import { resetBtn } from '../../redux/show-more/show-more-actions';

import './price-filter.scss';

const PriceFilter = ({ cheap, fast, optimal, resetBtn }) => {
  return (
    <div className="price-filter">
      <label className="price-filter__filter">
        <input
          type="radio"
          name="price"
          defaultChecked={true}
          className="price-filter__input"
          onClick={() => {
            cheap();
            resetBtn();
          }}
        />
        <span className="price-filter__text">Самый дешевый</span>
      </label>
      <label className="price-filter__filter">
        <input
          type="radio"
          name="price"
          className="price-filter__input"
          onClick={() => {
            fast();
            resetBtn();
          }}
        />
        <span className="price-filter__text">Самый быстрый</span>
      </label>
      <label className="price-filter__filter">
        <input
          type="radio"
          name="price"
          className="price-filter__input"
          onClick={() => {
            optimal();
            resetBtn();
          }}
        />
        <span className="price-filter__text">Оптимальный</span>
      </label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    cheap: () => dispatch(action.cheap()),
    fast: () => dispatch(action.fast()),
    optimal: () => dispatch(action.optimal()),
    resetBtn: () => dispatch(resetBtn()),
  };
};

export default connect(null, mapDispatchToProps)(PriceFilter);
