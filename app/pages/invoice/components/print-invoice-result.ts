import { hideElements } from '../../../components/hide-elements';
import { showElements } from '../../../components/show-elements';

export const printInvoiceResult = information => {
  const areaPrint = document.querySelector('#invoiceResult');
  hideElements([areaPrint]);
  showElements([areaPrint]);
  //imprimir errores
  if (information.length === 1) {
    areaPrint?.innerHTML = '';
    areaPrint?.insertAdjacentHTML(
      'beforeend',
      `<p class="py-2 px-2">${information}</p><p class="py-2 px-2">
      Muchas gracias por la visita</p>`
    );
  }
  //imprimir factura
  if (information.length >= 2) {
    areaPrint?.innerHTML = '';
    if (!information[2]) {
      information[0].forEach((value, index) => {
        areaPrint?.insertAdjacentHTML(
          'beforeend',
          `
      <li class="py-2 px-2">Por la habitacion ${value} debe pagar ${information[1][index]} €</li>
      `
        );
      });
      areaPrint?.insertAdjacentHTML(
        'beforeend',
        `<h6 class="py-2 px-2">La factura total asciende a ${information[1].reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )} €</h6><p class="py-2 px-2">Muchas gracias por la visita</p>`
      );
    }
    if (information[2]) {
      areaPrint?.insertAdjacentHTML(
        'beforeend',
        `<h6 class="py-2 px-2">Es usted cliente previo
         </h6>`
      );
      information[0].forEach((value, index) => {
        areaPrint?.insertAdjacentHTML(
          'beforeend',
          `
      <li class="py-2 px-2">Por la habitacion ${value} debe pagar ${
            information[1][index] * 0.9
          } €</li>
      `
        );
      });
      areaPrint?.insertAdjacentHTML(
        'beforeend',
        `<h6 class="py-2 px-2">La factura total asciende a ${
          0.9 *
          information[1].reduce(
            (accumulator, currentValue) => accumulator + currentValue
          )
        } €</h6><p class="py-2 px-2">Muchas gracias por volver a nuestro hotel</p>`
      );
    }
  }
};
