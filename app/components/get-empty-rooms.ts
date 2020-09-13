import { room } from '../types';
const getEmptyRooms = store => {
  let result;
  result = store.rooms.filter(value => value.guest === '');
  return result;
};

export { getEmptyRooms };
