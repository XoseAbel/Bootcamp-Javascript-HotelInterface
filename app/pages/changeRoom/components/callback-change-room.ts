import { Result } from '../../../types';
import { store } from '../../../store';
import { getGuestPerRoom } from './get-guest-per-room';
import { printGuestInfo } from './print-guest-info';
import { printResultChangeRoom } from './print-result-change-room';
import { getFirstEmptyRoom } from '../../../components/get-assigned-room';
import { hideElements } from '../../../components/hide-elements';

export const callbackChangeRoom = event => {
  event.preventDefault();

  const result: Result = {
    //alternando, primer elemento antigua, segundo nueva
    resolve: [],
    reject: [],
  };
  const changeRoomSelect = document.querySelectorAll(
    '#changeRoomSelect option:checked'
  );
  const roomsSelected = Array.from(changeRoomSelect).map(el => el.value);
  // buscar huesped por habitacion
  const guest = getGuestPerRoom(roomsSelected[0]);
  // clausula guarda, habitacion no asignada
  if (guest === undefined) {
    result.reject.push('Esa habitacion esta vacia');
    //print result reject
    hideElements([document.querySelector('#changeRoomAreaGuestInfo')]);
    printResultChangeRoom(result.reject);
  }
  // print para segunda confirmacion
  if (guest !== undefined) {
    printGuestInfo(guest, roomsSelected);
  }
  // definimos funcion del segundo boton

  const confirmChangeRoom = () => {
    roomsSelected.forEach(value => {
      store.rooms.find(room => {
        if (parseInt(value) === room.idRoom) {
          const requestedCapacity = room.maxCapacity;
          //si estan ocupadas mensaje error
          const allOcupped = store.rooms.find(value => value.guest === '');
          if (allOcupped === undefined) {
            result.reject.push('No disponemos de otra habitacion libre');
            printResultChangeRoom(result.reject);
            return;
          }
          let findEmptyRoom = getFirstEmptyRoom(requestedCapacity);
          store.rooms.filter(element => {
            if (findEmptyRoom.idRoom === element.idRoom) {
              element.guest = guest?.idGuest;
            }
          });
          // quitar habitacion previa en store Room
          store.rooms.forEach(element => {
            if (parseInt(value) === element.idRoom) {
              element.guest = '';
            }
          });
          // quitar cambiar habitacion guest
          const index = guest.asignedRoom.findIndex(
            element => element === parseInt(value)
          );
          const oldRoom = guest.asignedRoom.splice(
            index,
            1,
            findEmptyRoom.idRoom
          );
          result.resolve.push(parseInt(value));
          result.resolve.push(findEmptyRoom.idRoom);
        }
      });
    });
    //print result resolve
    printResultChangeRoom(result.resolve);
  };

  // obtenemos el nuevo boton y ejecutamos cambio
  const confirmChangeButton = document.querySelector('#confirmChange');
  if (confirmChangeButton) {
    confirmChangeButton.removeEventListener('click', confirmChangeRoom);
    confirmChangeButton.addEventListener('click', confirmChangeRoom);
  }
};
