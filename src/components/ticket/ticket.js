import React from 'react';

import TicketFragment from '../ticket-fragment';

import classes from './ticket.module.scss';

const Ticket = ({ price, carrier, segments }) => {
  const fragment = segments.map(({ ...props }) => {
    return <TicketFragment key={props.date + props.stops} {...props} />;
  });
  return (
    <div className={classes.ticket}>
      <header className={classes.top}>
        <h2 className={classes.price}>{price}P</h2>
        <img className={classes.logo} src={`//pics.avs.io/99/36/${carrier}.png`} alt="avia-logo" />
      </header>
      {fragment}
    </div>
  );
};

export default Ticket;
