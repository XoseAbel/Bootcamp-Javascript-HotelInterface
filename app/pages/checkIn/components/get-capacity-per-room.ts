import { store } from '../../../store';

export const getCapacityPerRoom = (
  qtyRooms: number,
  capaRequested: number
): number[] => {
  // calculamos la capacidad asignada para cada habitacion
  let roomsToFind = [];
  for (let i = 0; i < qtyRooms - 1; i++) {
    roomsToFind.push(Math.round(capaRequested / (qtyRooms - i)));
    capaRequested = capaRequested - Math.round(capaRequested / (qtyRooms - i));
  }
  roomsToFind.push(capaRequested);
  return roomsToFind;
};
