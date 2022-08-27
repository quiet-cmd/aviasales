import React from 'react';
import { format } from 'date-fns';
import './ticket-fragment.scss';

const transferTitle = (value) => {
  if (value === 1) return '1 пересадка';
  if (value % 5 === 0) return `${value} пересадoк`;
  return `${value} пересадки`;
};

const DateFormat = (duration, date) => {
  const start = new Date(date);
  const stop = new Date(new Date(date).getTime() + new Date(duration * 60000).getTime());
  return `${format(start, 'HH:mm')} - ${format(stop, 'HH:mm')}`;
};

const TicketFragment = ({ origin, destination, stops, duration, date }) => {
  return (
    <div className="ticket__info">
      <div className="ticket__route">
        <h3>
          {origin} – {destination}
        </h3>
        <p>{DateFormat(duration, date)}</p>
      </div>
      <div className="ticket__length">
        <h3>В пути</h3>
        <p>
          {Math.trunc(duration / 60)}ч – {duration % 60}м
        </p>
      </div>
      <div className="ticket__stops">
        <h3>{transferTitle(stops.length)}</h3>
        <p>{stops.join(' ')}</p>
      </div>
    </div>
  );
};

export default TicketFragment;
