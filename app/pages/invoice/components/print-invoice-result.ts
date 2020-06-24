export const printInvoiceResult = information => {
  const areaPrint = document.querySelector('#invoiceResult');
  areaPrint?.classList.add('d-none');
  areaPrint?.classList.remove('d-none');
  //imprimir errores
  if (information.length === 1) {
    areaPrint?.innerHTML = '';
    areaPrint?.insertAdjacentHTML(
      'beforeend',
      `<p class="rounded bg-white py-2 px-2">${information}</p><p class="py-2 px-2">
      Muchas gracias por la visita</p>`
    );
  }
  //imprimir factura
  if (information.length === 2) {
    areaPrint?.innerHTML = '';
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
};
