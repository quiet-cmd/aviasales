import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/tickets/tickets-action';
import { addFive } from '../../redux/show-more/show-more-actions';
import Ticket from '../ticket';
import Loader from '../loader/loader';

import { PriceSorter, TransferSorter } from './tickets-sorter';
import classes from './tickets-list.module.scss';

const TicketsList = ({ tickets, start, loader, addFive }) => {
  useEffect(() => {
    start();
  }, []);
  const list = tickets.map(({ ...props }) => {
    const {
      segments: [segment],
    } = props;
    return <Ticket key={segment.date + segment.stops} {...props} />;
  });
  const empty = list.length === 0;
  return (
    <>
      <div>
        {loader && <Loader />}
        {list}
        {!loader && empty && 'Рейсов, подходящих под заданные фильтры, не найдено'}
      </div>
      {!empty && (
        <input type="button" className={classes['btn-more']} defaultValue="Показать еще 5 билетов!" onClick={addFive} />
      )}
    </>
  );
};

const mapStateToProps = ({ transfersReducer, pricerReducer, ticketReducer, showMoreReducer }) => {
  const filtredArr = PriceSorter(pricerReducer, TransferSorter(transfersReducer, ticketReducer.tickets));
  return {
    loader: ticketReducer.loader,
    tickets: filtredArr.slice(0, showMoreReducer),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFive: () => dispatch(addFive()),
    start: () => dispatch(action.start()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
