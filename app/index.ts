import { listRoom } from './pages/rooms';
import { checkInFunction } from './pages/checkIn';
import { listGuests } from './pages/guest';
import { invoiceFunction } from './pages/invoice';
import { weather } from './pages/weather/weather';

// Panel de seleccion
const areaButtonsButton = document.querySelector('#areaButtons');
const goBackButton = document.querySelector('#goBack');
let area: any;

areaButtonsButton?.addEventListener('click', (event: any) => {
  area = document.querySelector(`#${event.target.id}Area`);
  //Cheack null
  if (area && goBackButton) {
    areaButtonsButton.classList.add('d-none');
    area.classList.remove('d-none');
    goBackButton.classList.remove('d-none');
    switch (area.id) {
      case 'listRoomsArea':
        listRoom();
        break;
      case 'listGuestsArea':
        listGuests();
        break;
      case 'checkInArea':
        checkInFunction();
        break;
      case 'invoiceArea':
        invoiceFunction();
        break;
      case 'weatherArea':
        weather();
        break;
    }
  }
});
//reset button
//Cheack null
if (goBackButton && areaButtonsButton) {
  goBackButton.addEventListener('click', () => {
    areaButtonsButton.classList.remove('d-none');
    area.classList.add('d-none');
    goBackButton.classList.add('d-none');
  });
}
