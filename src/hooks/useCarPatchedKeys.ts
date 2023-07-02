import { useCarsContext } from "./useCarsContext";
import { Car } from "../models/car.model";

function useCarPatchedKeys() {
  const { cars } = useCarsContext();

  const keys = Object.keys(cars[0]) as Array<keyof Car>;

  const patchedKeys = keys.map((key) => {
    const pattern = /car_|_/gi;

    if (key === "car") {
      return "company".toUpperCase();
    }

    if (pattern.test(key)) {
      return key.replace(pattern, " ").toUpperCase().trim();
    }

    return key.toUpperCase();
  });

  patchedKeys.shift();

  return { patchedKeys } as const;
}

export { useCarPatchedKeys };
