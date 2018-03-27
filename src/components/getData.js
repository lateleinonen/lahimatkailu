const apiHost = 'http://topiniskala.com:3000/v1/kohteet.json';

export async function fetchData() {
  return fetch(apiHost)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      return responseJson.kohteet;
    })
}

export async function fetchDataByLocation(region) {
  const radius = (region.latitudeDelta + region.longitudeDelta) * 0.3;

  return fetch(apiHost + `?location[lat]=${region.latitude}&location[long]=${region.longitude}&location[dist]=${radius}`)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      return responseJson.kohteet;
    })
}