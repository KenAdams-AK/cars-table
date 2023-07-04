import { Dispatch, ReactNode, createContext, useMemo, useState } from "react";

import { useCars } from "../hooks/useCars";
import { Car } from "../models/car.model";

interface Props {
  children: ReactNode;
}

type CarsContextType = {
  error: string;
  cars: Car[];
  setCars: Dispatch<React.SetStateAction<Car[]>>;

  addCar: (car: Car) => void;
  editCar: (car: Car) => void;
  deleteCar: (carId: number) => void;

  search: (query: string) => void;
  searchResult: Car[];
  searchReset: () => void;
};

const CarsContext = createContext({} as CarsContextType);

function CarsProvider(props: Props) {
  const { children } = props;
  const { cars, setCars, error, setError } = useCars();
  const [searchResult, setSearchResult] = useState<Car[]>([]);

  function addCar(newCar: Car) {
    setCars([newCar, ...cars]);
  }

  function editCar(editedCar: Car) {
    const carsCopy = [...cars];
    const index = carsCopy.findIndex((car) => car.id === editedCar.id);
    carsCopy.splice(index, 1, editedCar);

    setCars(carsCopy);
  }

  function deleteCar(carId: number) {
    const newCarsList = cars.filter((car) => car.id !== carId);
    setCars(newCarsList);
  }

  function search(query: string) {
    setError("");

    const newCarsList = cars.filter((car) => {
      const values = Object.values(car).map((value) => {
        if (typeof value === "object") {
          return "";
        }
        return String(value).toLowerCase();
      });

      return values.includes(query.toLowerCase());
    });

    if (!newCarsList.length) {
      setError("Nothing was found. Please, try another query.");
      return;
    }

    setSearchResult(newCarsList);
  }

  function searchReset() {
    setError("");
    setSearchResult([]);
  }

  const context = useMemo(
    () => ({
      error,
      cars,
      setCars,
      addCar,
      editCar,
      deleteCar,
      search,
      searchResult,
      searchReset,
    }),
    [cars, error, searchResult],
  );

  return <CarsContext.Provider value={context}>{children}</CarsContext.Provider>;
}

export { CarsContext, CarsProvider };
