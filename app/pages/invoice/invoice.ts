import { callbackInvoice } from './callback-invoice';

const invoiceFunction = () => {
  //ocultamos respuesta, si existe
  document.querySelector('#invoiceResult')?.classList.add('d-none');

  const invoiceForm = document.querySelector('#invoiceForm');
  if (invoiceForm) {
    invoiceForm.removeEventListener('submit', callbackInvoice);
    invoiceForm.addEventListener('submit', callbackInvoice);
  }
};
export { invoiceFunction };
