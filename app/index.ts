import { listRoom } from './pages/rooms';
import { checkInFunction } from './pages/checkIn';
import { listGuests } from './pages/guest';
import { invoiceFunction } from './pages/invoice';
import { weather } from './pages/weather';
import { news } from './pages/newYorkTimes';
import { checkOut } from './pages/checkOut';
import { hideElements } from './components/hide-elements';
import { showElements } from './components/show-elements';
import { changeRoom } from './pages/changeRoom';

// Panel de seleccion
const areaButtonsButton = document.querySelector('#areaButtons');
const goBackButton = document.querySelector('#goBack');
let area: any;

//PRUEBA STRATEGY MANAGER
// const strategies = {
//   listRoom,
//   listGuests,
//   checkInFunction,
//   checkOut,
//   invoiceFunction,
//   news,
//   weather,
//   changeRoom,
// };
// function setStrategy(strategy) {
// return strategies[strategy]();
// }
//
// areaButtonsButton?.addEventListener('click', (event: any) => {
//   area = document.querySelector(`#${event.target.id}Area`);
//   strategyToImplement = event.target.id;
//   //Cheack null
//   if (area && goBackButton) {
//     hideElements([areaButtonsButton]);
//     showElements([area, goBackButton]);
//     //strategy mamagement
//     setStrategy(strategyToImplement);
//   }
// });
//PRUEBA STRATEGY MANAGER

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
      case 'newsArea':
        news();
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
