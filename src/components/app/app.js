import React from 'react';

import PriceFilter from '../price-filter';
import FilterTransfers from '../filter-transfers';
import TicketsList from '../tickets-list';

import './app.scss';
import logo from './Logo.svg';

const App = () => {
  return (
    <main className="content">
      <img className="aviasales-logo" src={logo} alt="logo" />
      <PriceFilter />
      <FilterTransfers />
      <TicketsList />
      <input type="button" className="btn-more" defaultValue="Показать еще 5 билетов!" />
    </main>
  );
};

export default App;
