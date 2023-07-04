import { useCarsContext } from "../../hooks/useCarsContext";
import { usePagination } from "../../hooks/usePagination";
import { CarsPagination } from "../../constants/CarsPagination";
import { Car } from "../../models/car.model";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Loader from "../Loader";
import ErrorContainer from "../ErrorContainer";
import Pagination from "../Pagination";
import Search from "../Search";

export default function Table() {
  const { error, cars, searchResult } = useCarsContext();
  const { currentCars, pages } = usePagination<Car>(
    searchResult.length > 0 ? searchResult : cars,
    CarsPagination.PER_PAGE,
  );

  return (
    <>
      <Loader isLoading={!cars.length} />
      <ErrorContainer error={error} />

      <Search />

      <table className="Table">
        {cars.length > 0 ? (
          <>
            <TableHead />
            <TableBody cars={currentCars} />
          </>
        ) : null}
      </table>

      <Pagination pages={pages} />
    </>
  );
}
