import React from 'react';

import TicketFragment from '../ticket-fragment';

import './ticket.scss';

const Ticket = ({ price, carrier, segments }) => {
  const fragment = segments.map(({ ...props }, index) => {
    return <TicketFragment key={index} {...props} />;
  });
  return (
    <div className="ticket">
      <header className="ticket__top">
        <h2 className="ticket__price">{price}P</h2>
        <img className="ticket__logo" src={`//pics.avs.io/99/36/${carrier}.png`} alt="avia-logo" />
      </header>
      {fragment}
    </div>
  );
};

export default Ticket;
