import { store } from '../../../store';

export const getGuestPerRoom = (roomsSelected: string) => {
  //buscamos el huesped de la primera hbitacion selecionada (parametro)
  const result = store.guests.find(guest =>
    guest.asignedRoom.some(room => room === parseInt(roomsSelected))
  );
  return result;
};
