import camelize from "camelize";

import { host, isMock } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));
};

export const locationTransform = (result) => {
  const formattedResults = camelize(result);
  const { geometry = {} } = formattedResults.results[0];
  const { lat, lng } = geometry.location;
  const { viewport } = geometry;
  return { lat, lng, viewport };
};
