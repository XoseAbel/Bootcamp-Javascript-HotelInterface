import { getGuestPerRoom } from './components/get-guest-per-room';
import { invoicing } from './components/invoicing';
import { printInvoiceResult } from './components/print-invoice-result';
import { Result } from '../../types';

export const callbackInvoice = event => {
  event.preventDefault();
  const result: Result = {
    resolve: [],
    reject: [],
  };
  //vaciamos result
  result.reject.splice(0, 3);
  result.resolve.splice(0, 3);
  const guest = getGuestPerRoom();
  // habitacion no encontrada
  if (guest === undefined) {
    result.reject.push('Habitacion no encontrada');
  }
  // habitacion ya pagada
  if (guest) {
    guest.invoice
      ? result.reject.push('Habitacion ya pagada, puede hacer CheckIn')
      : (result.resolve = invoicing(guest));
  }
  // imprimimos errores
  if (result.reject.length) {
    printInvoiceResult(result.reject);
  }
  // imprimimos factura
  if (result.resolve.length) {
    printInvoiceResult(result.resolve);
  }
};
