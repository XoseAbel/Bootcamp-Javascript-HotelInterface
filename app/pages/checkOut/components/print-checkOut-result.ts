import { showElements } from '../../../components/show-elements';
import { hideElements } from '../../../components/hide-elements';

export const printCheckOutResult = information => {
  const resultArea = document.querySelector('#CheckOutResult');
  hideElements([resultArea]);
  showElements([resultArea]);
  //imprimir reject
  if (information.reject.length) {
    resultArea?.innerHTML = '';
    resultArea?.insertAdjacentHTML(
      'beforeend',
      `<p class="p-2">${information.reject}
    </p>
    <p class="p-2">Muchas Gracias</p>
    `
    );
  }
  //imprimir resolve
  if (information.resolve.length) {
    resultArea?.innerHTML = '';
    information.resolve.forEach(value => {
      resultArea?.insertAdjacentHTML(
        'beforeend',
        `<li class="p-2">Check Out habitacion: ${value}</li>     
        `
      );
    });
    resultArea?.insertAdjacentHTML(
      'beforeend',
      `<p class="p-2">Muchas gracias por la visita</p>`
    );
  }
};
