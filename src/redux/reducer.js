import { combineReducers } from 'redux';

import transfersReducer from './transfers/transfers-reducer';
import pricerReducer from './price/price-reducer';
import ticketReducer from './tickets/tickets-reducer';
import showMoreReducer from './show-more/show-more-reducer';

const reducer = combineReducers({
  transfersReducer,
  pricerReducer,
  ticketReducer,
  showMoreReducer,
});

export default reducer;
