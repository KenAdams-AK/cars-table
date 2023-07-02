import { useContext } from "react";
import { CarsContext } from "../context/CarsContext";

function useCarsContext() {
  return useContext(CarsContext);
}

export { useCarsContext };
