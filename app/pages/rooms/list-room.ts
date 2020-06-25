import { store } from '../../store';
import { printListRooms } from './print-list-rooms';
const listRoom = () => {
  printListRooms(store.rooms);
};

export { listRoom };
