import React from 'react';
import { connect } from 'react-redux';

import PriceFilter from '../price-filter';
import FilterTransfers from '../filter-transfers';
import TicketsList from '../tickets-list';
import * as action from '../../redux/show-more/show-more-actions';

import './app.scss';
import logo from './Logo.svg';

const App = ({ addFive }) => {
  return (
    <main className="content">
      <img className="aviasales-logo" src={logo} alt="logo" />
      <PriceFilter />
      <FilterTransfers />
      <TicketsList />
      <input type="button" className="btn-more" defaultValue="Показать еще 5 билетов!" onClick={addFive} />
    </main>
  );
};

export default connect(null, action)(App);
