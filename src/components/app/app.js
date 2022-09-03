import React from 'react';

import PriceFilter from '../price-filter';
import FilterTransfers from '../filter-transfers';
import TicketsList from '../tickets-list';

import classes from './app.module.scss';
import logo from './logo.svg';

const App = () => {
  return (
    <main className={classes.content}>
      <img className={classes['aviasales-logo']} src={logo} alt="logo" />
      <PriceFilter />
      <FilterTransfers />
      <TicketsList />
    </main>
  );
};

export default App;
