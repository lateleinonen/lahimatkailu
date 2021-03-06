import { apiHost } from '../_helpers';

/* eslint-disable no-undef */

async function fetchData() {
  return fetch(apiHost)
    .then(response => response.json())
    .then(responseJson => responseJson.kohteet);
}

async function fetchDataByLocation(region) {
  const radius = (region.latitudeDelta + region.longitudeDelta) * 0.3;

  return fetch(
    `${apiHost}?location[lat]=${region.latitude}&location[long]=${
      region.longitude
    }&location[dist]=${radius}`
  )
    .then(response => response.json())
    .then(responseJson => responseJson.kohteet);
}

async function getIconList() {
  return fetch('http://topiniskala.com:3000/v1/iconList.json')
    .then(response => response.json())
    .then(responseJson => responseJson.symbols);
}

export const dataService = {
  fetchData,
  fetchDataByLocation,
  getIconList
};
