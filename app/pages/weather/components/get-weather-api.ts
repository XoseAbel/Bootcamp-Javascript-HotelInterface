const APIKEY: Readonly<string> = 'w42UjDijls6DictTC5GWNzehDFloFKJD';
const BASEURL: Readonly<string> = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;

const getWeatherApi = async (locationKey: string) => {
  const resultWeather = await fetch(
    `${BASEURL}${locationKey}?apikey=${APIKEY}&language=es-ES&details=true&metric=true`
  );
  const dataWeather = await resultWeather.json();
  return dataWeather;
};
export { getWeatherApi };
