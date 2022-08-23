import React from 'react';

import Ticket from '../ticket';

import './tickets-list.scss';

const TicketsList = () => {
  return (
    <div className="tickets-list">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;
