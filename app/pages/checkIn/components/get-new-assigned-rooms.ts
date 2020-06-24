import { person, Result } from '../../../types';
import { store } from '../../../store';
import { getCapacityPerRoom } from './get-capacity-per-room';
import { getRoomSelected } from '../../../components/bucle-find-empty-room';

export const getNewAssignedRooms = (newMembers: person[], guestId: string) => {
  let result: Result = {
    resolve: [],
    reject: [],
  };
  // clausula guarda capacidad
  if (!newMembers.length) {
    result.reject.push('No hay personas para registrar');
    return result;
  }
  let capaRequested;
  if (newMembers.length) {
    capaRequested = newMembers[0].length;
  }
  let quantityRoomsRequested: any = document.querySelector(
    '#selectNumberRooms'
  );
  quantityRoomsRequested = +quantityRoomsRequested.value;
  // clausula guarda habitaciones requeridas
  if (!quantityRoomsRequested) {
    result.reject.push('No hay habitaciones selecionadas');
    return result;
  }
  // calculo array de capacidad por habitacion
  let capacityPerRoom = getCapacityPerRoom(
    quantityRoomsRequested,
    capaRequested
  );
  //buscar habitaciones requeridas con el bucle
  capacityPerRoom.forEach(value => {
    const asssignedRoon = getRoomSelected(value);
    result.resolve.push(asssignedRoon.idRoom);
    //asignar huesped a la habitacion, para no buscar 2 iguales
    store.rooms.forEach(room => {
      if (room.idRoom === asssignedRoon.idRoom) room.guest = guestId;
    });
  });
  return result;
};
