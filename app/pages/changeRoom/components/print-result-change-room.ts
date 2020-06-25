import { hideElements } from '../../../components/hide-elements';
import { showElements } from '../../../components/show-elements';

export const printResultChangeRoom = information => {
  const changeRoomResult = document.querySelector('#changeRoomAreaResult');
  hideElements([changeRoomResult]);
  showElements([changeRoomResult]);
  changeRoomResult?.innerHTML = '';
  if (information.length === 1) {
    changeRoomResult?.insertAdjacentHTML(
      'beforeend',
      `<p>${information}
    </p>`
    );
  }
  if (information.length >= 2) {
    for (let i = 0; i < information.length; i = i + 2) {
      changeRoomResult?.insertAdjacentHTML(
        'beforeend',
        `<li class="p-2">Cambiada habitacion: ${information[i]} por la ${
          information[i + 1]
        }</li>`
      );
    }
    changeRoomResult?.insertAdjacentHTML(
      'beforeend',
      `<p class="p-2">Muchas Gracias</p>`
    );
  }
};
