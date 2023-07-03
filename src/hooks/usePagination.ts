import { useLocation } from "react-router-dom";
import { useState } from "react";

import { Car } from "../models/car.model";

export function usePagination(cars: Car[], perPage: number) {
  const location = useLocation();
  const initialPage = Number(location.pathname.split("/").pop() || 1);

  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(cars.length / perPage); i += 1) {
    pages.push(i);
  }

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentCars = cars.slice(firstIndex, lastIndex);

  return { currentCars, pages, setCurrentPage };
}
