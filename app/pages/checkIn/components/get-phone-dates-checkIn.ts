import { Result } from '../../../types';

export const getPhoneDatesCheckIn = () => {
  let result: Result = {
    resolve: [],
    reject: [],
  };
  const newPhone = document.querySelector('#phone').value;
  if (newPhone === '') {
    result.reject.push('movil incorrecto');
  }
  const newCheckInDate = document.querySelector('#checkInDate').value;
  if (newCheckInDate === '') {
    result.reject.push('Fecha Check In incorrecto');
  }
  const newCheckOutDate = document.querySelector('#checkOutDate').value;
  if (newCheckOutDate === '') {
    result.reject.push('Fecha Check Out incorrecto');
  }
  result.resolve.push(newPhone, newCheckInDate, newCheckOutDate);
  return result;
};
