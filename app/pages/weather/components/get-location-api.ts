const APIKEY: Readonly<string> = 'w42UjDijls6DictTC5GWNzehDFloFKJD';
const BASEURL: Readonly<string> = `http://dataservice.accuweather.com/locations/v1/cities/search`;

const getLocationApi = async (location: string) => {
  const resultLocation = await fetch(
    `${BASEURL}?apikey=${APIKEY}&q=${location}&details=true`
  );
  const dataLocation = await resultLocation.json();
  return dataLocation;
};
export { getLocationApi };
