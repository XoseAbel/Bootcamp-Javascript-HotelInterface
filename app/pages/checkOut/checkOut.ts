import { callbackCheckOut } from './components/callback-checkOut';
import { hideElements } from '../../components/hide-elements';
const checkOut = () => {
  //ocultamos respuesta, si existe
  hideElements([document.querySelector('#CheckOutResult')]);

  const checkOutForm = document.querySelector('#checkOutForm');
  if (checkOutForm) {
    checkOutForm.removeEventListener('submit', callbackCheckOut);
    checkOutForm.addEventListener('submit', callbackCheckOut);
  }
};
export { checkOut };
