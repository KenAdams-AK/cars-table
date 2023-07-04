import { useLocation } from "react-router-dom";

export function usePagination<Car>(data: Car[], perPage: number) {
  const location = useLocation();
  const page = Number(location.pathname.split("/").pop() || 1);
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(data.length / perPage); i += 1) {
    pages.push(i);
  }

  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const currentCars = data.slice(firstIndex, lastIndex);

  return { currentCars, pages } as const;
}
