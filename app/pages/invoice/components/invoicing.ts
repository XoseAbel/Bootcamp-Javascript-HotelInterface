import { guest, Result } from '../../../types';
import { store } from '../../../store';

export const invoicing = (guest: guest) => {
  const result: Result = {
    resolve: [],
    reject: [],
  };
  //almacenamos idrooms en posicion 0
  result.resolve.push(guest.asignedRoom);
  //sacamos el precio por dia
  const price: number[] = [];
  guest.asignedRoom.forEach(room => {
    let roomPrice = store.rooms.find(value => value.idRoom === room);
    price.push(roomPrice.price);
  });
  //calculamos dias
  const checkOutDate = new Date(guest.checkOutDate);
  const checkInDate = new Date(guest.checkInDate);
  const days: number = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
  //almacenamos precio en posicion 1
  result.resolve.push(price.map(value => value * days));
  // cambiamos estado guest Invoice a TRUE
  store.guests.forEach(value => {
    if (value.idGuest === guest.idGuest) value.invoice = true;
  });
  return result.resolve;
};
