import { store } from '../store';
import { getEmptyRooms } from './get-empty-rooms';

export const getFirstEmptyRoom = (capacity: number) => {
  let emptyRooms;
  emptyRooms = getEmptyRooms(store);
  const result = emptyRooms.find(value => {
    if (value.maxCapacity === capacity) return value;
  });
  return result;
};
