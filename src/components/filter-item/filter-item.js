import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/transfers/transfers-actions';

import './filter-item.scss';

const FilterItem = ({ name, action, state, filter }) => {
  const flag = state[action];
  return (
    <label className="check">
      <input onChange={() => filter(action, flag)} checked={flag} className="check__input" type="checkbox" />
      <span className="check__box"></span>
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
