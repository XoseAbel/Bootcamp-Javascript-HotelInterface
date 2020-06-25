import { listRoom } from './pages/rooms';
import { checkInFunction } from './pages/checkIn';
import { listGuests } from './pages/guest';
import { invoiceFunction } from './pages/invoice';
import { weather } from './pages/weather';
import { checkOut } from './pages/checkOut';
import { hideElements } from './components/hide-elements';
import { showElements } from './components/show-elements';
import { changeRoom } from './pages/changeRoom';

// Panel de seleccion
const areaButtonsButton = document.querySelector('#areaButtons');
const goBackButton = document.querySelector('#goBack');
let area: any;

areaButtonsButton?.addEventListener('click', (event: any) => {
  area = document.querySelector(`#${event.target.id}Area`);
  //Cheack null
  if (area && goBackButton) {
    hideElements([areaButtonsButton]);
    showElements([area, goBackButton]);
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
      case 'checkOutArea':
        checkOut();
        break;
      case 'changeRoomArea':
        changeRoom();
        break;
    }
  }
});
//reset button
//Cheack null
if (goBackButton && areaButtonsButton) {
  goBackButton.addEventListener('click', () => {
    showElements([areaButtonsButton]);
    hideElements([area, goBackButton]);
  });
}
