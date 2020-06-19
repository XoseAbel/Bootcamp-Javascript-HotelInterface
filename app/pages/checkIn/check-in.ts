import { addInputForMember, onclickCallback } from './add-member-button';
import { resetMemberArea } from './reset-member-area';
import { registerGuestInStore } from './register-guest-in-store';

const checkInFunction = () => {
  //añadir todos los remove y extraer, queda pendiente el de regsiter
  const addMemberButton = document.querySelector('#addMemberButton');
  addMemberButton?.removeEventListener('click', onclickCallback, false);

  resetMemberArea();
  addInputForMember();
  registerGuestInStore();
};
export { checkInFunction };
