import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/tickets/tickets-action';
import Ticket from '../ticket';
import Loader from '../loader/loader';

import { PriceSorter, TransferSorter } from './tickets-sorter';

import './tickets-list.scss';

const TicketsList = ({ tickets, start, loader }) => {
  useEffect(() => {
    start();
  }, []);
  const list = tickets.map(({ ...props }, index) => {
    return <Ticket key={index} {...props} />;
  });
  return (
    <div className="tickets-list">
      {loader && <Loader />}
      {list}
      {!loader && !list.length && 'Рейсов, подходящих под заданные фильтры, не найдено'}
    </div>
  );
};

const mapDispatchToProps = ({ transfersReducer, pricerReducer, ticketReducer, showMoreReducer }) => {
  const filtredArr = PriceSorter(pricerReducer, TransferSorter(transfersReducer, ticketReducer.tickets));
  return {
    loader: ticketReducer.loader,
    tickets: filtredArr.slice(0, showMoreReducer),
  };
};
export default connect(mapDispatchToProps, action)(TicketsList);
