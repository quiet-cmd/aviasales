import React from 'react';

import './ticket.scss';

const Ticket = () => {
  return (
    <div className="ticket">
      <header className="ticket__top">
        <h2 className="ticket__price">13 400P</h2>
        <img className="ticket__logo" src="//pics.avs.io/99/36/1.png" alt="avia-logo" />
      </header>
      <div className="ticket__info">
        <div className="ticket__route">
          <h3>MOW – HKT</h3>
          <p>10:45 – 08:00</p>
        </div>
        <div className="ticket__length">
          <h3>В пути</h3>
          <p>21ч – 15м</p>
        </div>
        <div className="ticket__stops">
          <h3>2 пересадки</h3>
          <p>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
