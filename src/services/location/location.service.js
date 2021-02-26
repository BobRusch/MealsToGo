import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  console.log("============locationRequest====================", searchTerm);
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResults = camelize(result);
  console.log("formattedResults ====>", formattedResults);
  const { geometry = {} } = formattedResults.results[0];
  console.log("geometry ====>", geometry);
  const { lat, lng } = geometry.location;
  console.log("location ====>", lat, lng);
  return { lat, lng };
};
