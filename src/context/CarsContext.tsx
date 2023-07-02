import { Dispatch, ReactNode, createContext, useMemo } from "react";

import { useCars } from "../hooks/useCars";
import { Car } from "../models/car.model";

interface Props {
  children: ReactNode;
}

type CarsContextType = {
  cars: Car[];
  setCars: Dispatch<React.SetStateAction<Car[]>>;
  error: string;
  addCar: (car: Car) => void;
  editCar: (car: Car) => void;
  deleteCar: (carId: number) => void;
};

const CarsContext = createContext({} as CarsContextType);

function CarsProvider(props: Props) {
  const { children } = props;
  const { cars, setCars, error } = useCars();

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

  const context = useMemo(
    () => ({
      cars,
      setCars,
      error,
      addCar,
      editCar,
      deleteCar,
    }),
    [cars, error],
  );

  return <CarsContext.Provider value={context}>{children}</CarsContext.Provider>;
}

export { CarsContext, CarsProvider };
