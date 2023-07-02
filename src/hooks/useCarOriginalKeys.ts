import { useCarsContext } from "./useCarsContext";
import { Car } from "../models/car.model";

function useCarOriginalKeys() {
  const { cars } = useCarsContext();
  const originalKeys = Object.keys(cars[0]) as Array<keyof Car>;

  originalKeys.shift();

  return { originalKeys } as const;
}

export { useCarOriginalKeys };
