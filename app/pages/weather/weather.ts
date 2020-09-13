import { getLocationApi } from './components/get-location-api';
import { getWeatherApi } from './components/get-weather-api';
import { printResultWeather } from './components/print-result-weather';

const weather = () => {
  const locationForm = document.querySelector('#cityToFindForm');
  const locationInput = document.querySelector('#cityToFind');
  const showCardResult = document.querySelector('#weatherResult');

  showCardResult?.classList.add('d-none');

  locationForm?.addEventListener('submit', event => {
    event.preventDefault();
    //clausula guarda, input vacio
    if (locationInput) {
      const locationData = getLocationApi(locationInput.value);
      locationData.then(data => {
        // console.log(data);
        const weatherData = getWeatherApi(data[0].Key);
        weatherData.then(data => {
          // console.log(data);
          showCardResult?.classList.remove('d-none');
          printResultWeather(data);
        });
      });
    }
  });
};
export { weather };
