import { Result } from '../../types';
import { getNewMember } from './get-New-Member';

export const registerGuestInStore = () => {
  let result: Result = {
    resolve: [],
    reject: [],
  };
  const form = document.querySelector('#formCheckIn');
  // queda pendiente removeEventListener

  form?.addEventListener('submit', event => {
    event.preventDefault();
    const newMembers = getNewMember();
    console.log(newMembers);
  });
  return result;
};
