import pointInPolygon from "point-in-polygon";

export const polygonFilter = (data, polygon) => {
  return data.filter((item) => pointInPolygon(item.latlng, polygon));
};
