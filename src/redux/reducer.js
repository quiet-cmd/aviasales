import { combineReducers } from 'redux';

import transfersReducer from './transfers/transfers-reducer';
import pricerReducer from './price/price-reducer';
import ticketReducer from './tickets/tickets-reducer';

const reducer = combineReducers({
  transfersReducer,
  pricerReducer,
  ticketReducer,
});

export default reducer;
