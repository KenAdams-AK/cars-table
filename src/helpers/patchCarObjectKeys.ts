import { Car } from "../models/car.model";

export function patchCarObjectKeys(carObject: Car) {
  const keys = Object.keys(carObject) as Array<keyof Car>;

  const newKeys = keys.map((key) => {
    const pattern = /car_|_/gi;

    if (key === "car") {
      return "company".toUpperCase();
    }

    if (pattern.test(key)) {
      return key.replace(pattern, " ").toUpperCase();
    }

    return key.toUpperCase();
  });

  newKeys.push("actions".toLocaleUpperCase());

  return newKeys;
}
