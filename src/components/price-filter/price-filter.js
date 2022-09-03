import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/price/price-action';
import { resetBtn } from '../../redux/show-more/show-more-actions';

import classes from './price-filter.module.scss';

const PriceFilter = ({ cheap, fast, optimal, resetBtn }) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.filter}>
        <input
          type="radio"
          name="price"
          defaultChecked={true}
          className={classes.input}
          onClick={() => {
            cheap();
            resetBtn();
          }}
        />
        <span className={classes.text}>Самый дешевый</span>
      </label>
      <label className={classes.filter}>
        <input
          type="radio"
          name="price"
          className={classes.input}
          onClick={() => {
            fast();
            resetBtn();
          }}
        />
        <span className={classes.text}>Самый быстрый</span>
      </label>
      <label className={classes.filter}>
        <input
          type="radio"
          name="price"
          className={classes.input}
          onClick={() => {
            optimal();
            resetBtn();
          }}
        />
        <span className={classes.text}>Оптимальный</span>
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
