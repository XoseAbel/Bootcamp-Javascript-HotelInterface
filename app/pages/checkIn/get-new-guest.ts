import { Result, person, guest } from '../../types';
import { getPhoneDatesCheckIn } from './components/get-phone-dates-checkIn';
import { Guest } from '../../components/constructor-functions';
import { getNewAssignedRooms } from './components/get-new-assigned-rooms';

const getNewGuest = (newMembers: person[]) => {
  // El parametro newMembers son los guest a registrar
  let result: Result = {
    resolve: [],
    reject: [],
  };
  // obtenemos phone + CheckInDate + CheckOutDate -> En este orden dentro de result.resolve
  const phoneDatesCheckInOut = getPhoneDatesCheckIn();
  if (phoneDatesCheckInOut.reject.length) {
    result.reject.push(phoneDatesCheckInOut.reject);
    return result;
  }
  // Generar id Ramdom
  const newIdGuest = `${Math.floor(Math.random() * 99999)}`;
  // le facilitamos los newMembers para que nos devuelva las habitaciones
  const newAssignedRooms: Result = getNewAssignedRooms(newMembers, newIdGuest);
  if (newAssignedRooms.reject.length) {
    result.reject.push(newAssignedRooms.reject);
    return result;
  }
  // funcion constructora para el nuevo Guest
  const newGuest: guest = new Guest(
    newIdGuest,
    newMembers[0],
    phoneDatesCheckInOut.resolve[0],
    newAssignedRooms.resolve,
    phoneDatesCheckInOut.resolve[1],
    phoneDatesCheckInOut.resolve[2],
    false
  );
  result.resolve.push(newGuest);
  return result;
};
export { getNewGuest };
