import { getEmptyRooms } from '../../components/get-empty-rooms';
import { store } from '../../store';
import { printListRooms } from './print-list-rooms';
const listRoom = () => {
  const listToPrint = getEmptyRooms(store);

  printListRooms(listToPrint);
};

export { listRoom };
