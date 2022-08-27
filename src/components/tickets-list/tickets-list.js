import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/tickets/tickets-action';
import Ticket from '../ticket';

import { PriceSorter, TransferSorter } from './tickets-sorter';

import './tickets-list.scss';

const TicketsList = ({ tickets, start }) => {
  useEffect(() => {
    start();
  }, []);
  const list = tickets.map(({ ...props }, index) => {
    return <Ticket key={index} {...props} />;
  });
  return (
    <div className="tickets-list" onClick={() => start()}>
      {list}
    </div>
  );
};

const mapDispatchToProps = ({ transfersReducer, pricerReducer, ticketReducer }) => {
  return {
    tickets: TransferSorter(transfersReducer, PriceSorter(pricerReducer, ticketReducer)),
  };
};
export default connect(mapDispatchToProps, action)(TicketsList);
