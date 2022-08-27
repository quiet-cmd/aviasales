import AviasaleServices from '../../services/service';

const services = new AviasaleServices();

export const saveTicket = (value) => ({ type: 'NEW', value: value });

export function start() {
  return async (dispatch) => {
    const token = await services.createSearchId();
    const res = await services.getTickets(token);
    dispatch(saveTicket(res));
  };
}
