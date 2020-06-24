import { store } from '../../../store';

export const getGuestPerRoom = () => {
  const roomToInvoice = document.querySelector('#roomToInvoice');
  const result = store.guests.find(value => {
    //+1 ya que si no encuentra el indice será -1 y si esta en la primera posicion es 0. El objetivo es obtener un true/false
    if (value.asignedRoom.indexOf(roomToInvoice.valueAsNumber) + 1)
      return value;
  });
  return result;
};
