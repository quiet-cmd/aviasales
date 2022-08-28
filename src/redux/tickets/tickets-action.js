import AviasaleServices from '../../services/service';

const services = new AviasaleServices();

export const saveTicket = (value) => ({ type: 'ADD-TICKETS', value: value });
export const loaded = () => ({ type: 'SET-LOADED' });

export function start() {
  return async (dispatch) => {
    const token = await services.createSearchId();
    const someTicket = await services.getOneTicketsPackage(token);
    dispatch(saveTicket(someTicket));
    const allTickets = await services.getAllTickets(token);
    dispatch(saveTicket(allTickets));
    dispatch(loaded());
  };
}
