import { getFirstEmptyRoom } from './get-assigned-room';
import { actualMaxCapaFree } from './actual-max-capacity-free';

const getRoomSelected = (requestedCapacity: number) => {
  let findEmptyRoom;
  for (let i = requestedCapacity; i <= actualMaxCapaFree(); i++) {
    findEmptyRoom = getFirstEmptyRoom(i);
    if (findEmptyRoom !== undefined) {
      i = actualMaxCapaFree();
    }
  }
  return findEmptyRoom;
};

export { getRoomSelected };
