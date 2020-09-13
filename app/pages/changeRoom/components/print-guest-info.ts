import { showElements } from '../../../components/show-elements';

const printGuestInfo = (guest, selectRooms) => {
  const areaGuestInfo = document.querySelector('#changeRoomAreaGuestInfo');

  showElements([areaGuestInfo]);
  areaGuestInfo?.innerHTML = '';
  areaGuestInfo?.insertAdjacentHTML(
    'beforeend',
    `<h6 class="p-2 ">Id Guest: ${guest.idGuest}</h6>
    <p class="p-1 mb-2">Asign room: ${guest.asignedRoom}</p>
    <p class="py-1 ">Change rooms: ${selectRooms}</p>
    <button class="btn btn-success mt-2 " id="confirmChange">Confirm</button>`
  );
};
export { printGuestInfo };
