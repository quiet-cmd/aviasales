import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/transfers/transfers-actions';

import classes from './filter-item.module.scss';

const FilterItem = ({ name, action, state, filter }) => {
  const flag = state[action];
  return (
    <label className={classes.check}>
      <input onChange={() => filter(action, flag)} checked={flag} className={classes.input} type="checkbox" />
      <span className={classes.box}></span>
      {name}
    </label>
  );
};

const mapStateToProps = ({ transfersReducer: state }) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, action)(FilterItem);
