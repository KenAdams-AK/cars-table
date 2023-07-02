import { useEffect, useState } from "react";

import { fetchData } from "../helpers/fetchData";
import { apiRouts } from "../routes/apiRouts";

import { useLocalStorage } from "./useLocalStorage";
import { TTL } from "../constants/TimeToLive";
import { Car } from "../models/car.model";

export function useCars() {
  const [error, setError] = useState<string>("");
  const [cars, setCars] = useLocalStorage<Car[]>("cars", [], TTL.cars);

  useEffect(() => {
    if (cars.length > 0) {
      return undefined;
    }

    const controller = new AbortController();

    fetchData<{ cars: Car[] }>(apiRouts.FETCH_CARS, controller.signal)
      .then((data) => {
        if (data && data.cars.length > 0) {
          setCars(data.cars.slice(0, 35));
        }
      })
      .catch((err: Error) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { error, cars, setCars } as const;
}
