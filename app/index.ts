import { listRoom } from './pages/rooms';
import { checkInFunction } from './pages/checkIn';
// Panel de seleccion
const areaButtonsButton = document.querySelector('#areaButtons');
const goBackButton = document.querySelector('#goBack');
let area: any;

areaButtonsButton?.addEventListener('click', (event: any) => {
  area = document.querySelector(`#${event.target.id}Area`);
  //Cheack null
  console.log(area.id);
  if (area && goBackButton) {
    areaButtonsButton.classList.add('d-none');
    area.classList.remove('d-none');
    goBackButton.classList.remove('d-none');
    switch (area.id) {
      case 'listRoomsArea':
        listRoom();
        break;
      case 'checkInArea':
        checkInFunction();
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
