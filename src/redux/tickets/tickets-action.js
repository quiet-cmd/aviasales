import AviasaleServices from '../../services/service';

const services = new AviasaleServices();

export const saveTicket = (value) => ({ type: 'ADD-TICKETS', value: value });
export const loaded = () => ({ type: 'SET-LOADED' });

export function start() {
  return async (dispatch) => {
    const token = await services.createSearchId();
    const res = await services.getTickets(token);
    dispatch(saveTicket(res));
    dispatch(loaded());
  };
}
