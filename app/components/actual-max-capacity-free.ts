import { getEmptyRooms } from './get-empty-rooms';
import { store } from '../store';

const actualMaxCapaFree = (): number => {
  const result: number[] = [];
  const emptyRooms = getEmptyRooms(store);
  emptyRooms.forEach(value => result.push(value.maxCapacity));
  return Math.max(...result);
};
export { actualMaxCapaFree };
