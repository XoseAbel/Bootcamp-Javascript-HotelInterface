import { Result } from '../../types';
import { getNewMember } from './components/get-new-member';
import { getNewGuest } from './get-new-guest';
import { store } from '../../store';

export const registerGuestInStore = () => {
  let result: Result = {
    resolve: [],
    reject: [],
  };
  const form = document.querySelector('#formCheckIn');
  const resultArea = document.querySelector('.resultCheckInArea');
  const resultAreaResolve = document.querySelector('.resultCheckInAreaResolve');
  const resultAreaReject = document.querySelector('.resultCheckInAreaReject');

  form?.addEventListener('submit', function submitCheckIn(event) {
    event.preventDefault();
    let counter = result.resolve.length;
    resultAreaResolve?.innerHTML = '';
    resultAreaReject?.innerHTML = '';
    const newMembers = getNewMember();
    if (newMembers.reject.length) {
      result.reject.push(newMembers.reject);
    }
    const newGuest = getNewGuest(newMembers.resolve);
    if (newGuest.resolve.length !== 0) {
      result.resolve.push(newGuest.resolve[0]);
    }
    if (newGuest.reject.length !== 0) {
      result.reject.push(newGuest.reject);
    }
    if (newGuest.reject.length === 0) {
      store.guests.push(newGuest.resolve[0]);
    }
    console.log(result.resolve[counter]);
    resultArea?.classList.remove('d-none');
    result.reject.length
      ? (resultAreaReject.classList.remove('d-none'),
        (resultAreaReject.innerHTML = ``),
        (resultAreaReject.innerHTML = `<p class="bg-white rounded px-2 py-1 mt-2">${result.reject}
      </p>`))
      : (resultAreaResolve.classList.remove('d-none'),
        (resultAreaReject.innerHTML = ``),
        (resultAreaResolve.innerHTML = `<p class="bg-white rounded px-2 py-1 mt-2">Habitacion asignada: ${result.resolve[counter].asignedRoom}<br>
      IdGuest: ${result.resolve[counter].idGuest}<br>
      CheckIn Date: ${result.resolve[counter].checkInDate}<br>
      CheckOut Date: ${result.resolve[counter].checkOutDate}
      </p>`));
    // console.log(submitCheckIn);
  });
  return result;
};
