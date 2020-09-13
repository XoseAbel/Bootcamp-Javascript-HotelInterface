import { getGuestPerRoom } from './get-guest-per-room';
import { checkOutGuest } from './checkOut-guest';
import { printCheckOutResult } from './print-checkOut-result';
import { Result } from '../../../types';

export const callbackCheckOut = event => {
  event.preventDefault();
  const result: Result = {
    resolve: [],
    reject: [],
  };
  const guest = getGuestPerRoom();
  if (guest === undefined) {
    result.reject.push('La habitacion no esta alquilada');
  }
  if (guest?.invoice === false) {
    result.reject.push('La habitacion no esta facturada');
  }
  if (guest?.invoice === true) {
    result.resolve = checkOutGuest(guest);
  }
  printCheckOutResult(result);
};
