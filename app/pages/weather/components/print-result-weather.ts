const printResultWeather = data => {
  // console.log(data);
  //selecionar campos a cambiar
  const weatherTitle = document.querySelector('.weatherTitle');
  const weatherTemperatureMax = document.querySelector(
    '.weatherTemperatureMax'
  );
  const weatherTemperatureMin = document.querySelector(
    '.weatherTemperatureMin'
  );
  const weatherImg = document.querySelector('.weatherImg');
  // primero vacias campos y despues pintar los nuevos datos
  weatherTitle.textContent = '';
  weatherTitle.textContent = `${data.Headline.Text}`;
  weatherTemperatureMax.textContent = '';
  weatherTemperatureMax.textContent = `${data.DailyForecasts[0].Temperature.Maximum.Value} ºC`;
  weatherTemperatureMin.textContent = '';
  weatherTemperatureMin.textContent = `${data.DailyForecasts[0].Temperature.Minimum.Value} ºC`;
  weatherImg.src = `./weather/${data.DailyForecasts[0].Day.Icon}-s.png`;
  weatherImg.alt = `${data.DailyForecasts[0].Day.Icon}`;
};
export { printResultWeather };
