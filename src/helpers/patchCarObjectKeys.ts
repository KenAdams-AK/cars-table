import { Car } from "../models/car.model";

export function patchCarObjectKeys(carObject: Car) {
  return Object.keys(carObject)
    .slice(1)
    .map((key) => {
      const pattern = /car_|_/gi;

      if (pattern.test(key)) {
        return key.replace(pattern, " ").toUpperCase();
      }

      return key.toUpperCase();
    }) as Array<keyof Car>;
}
