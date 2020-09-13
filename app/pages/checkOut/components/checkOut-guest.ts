import { store } from '../../../store';
export const checkOutGuest = guest => {
  const { asignedRoom } = guest;
  //vaciamos store room de guest
  store.rooms.forEach(room => {
    if (asignedRoom.some(value => value === room.idRoom)) {
      room.guest = '';
    }
  });
  //quitamos guest del hotel
  const index = store.guests.findIndex(
    value => value.idGuest === guest.idGuest
  );
  store.guests.splice(index, 1);
  guest.members.forEach(member => store.previousCustomers.push(member));
  return asignedRoom;
};
