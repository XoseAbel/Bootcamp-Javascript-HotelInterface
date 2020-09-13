import { callbackChangeRoom } from './components/callback-change-room';
import { hideElements } from '../../components/hide-elements';

const changeRoom = () => {
  hideElements([
    document.querySelector('#changeRoomAreaGuestInfo'),
    document.querySelector('#changeRoomAreaResult'),
  ]);
  const changeRoomForm = document.querySelector('#changeRoomForm');
  if (changeRoomForm) {
    changeRoomForm.removeEventListener('submit', callbackChangeRoom);
    changeRoomForm.addEventListener('submit', callbackChangeRoom);
  }
};
export { changeRoom };
