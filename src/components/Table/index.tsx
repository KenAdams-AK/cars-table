import { useCarsContext } from "../../hooks/useCarsContext";
import { usePagination } from "../../hooks/usePagination";
import { CarsPagination } from "../../constants/CarsPagination";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Loader from "../Loader";
import ErrorContainer from "../ErrorContainer";
import Pagination from "../Pagination";

export default function Table() {
  const { error, cars } = useCarsContext();
  const { currentCars, pages, setCurrentPage } = usePagination(cars, CarsPagination.PER_PAGE);

  return (
    <>
      <Loader isLoading={cars.length <= 0} />
      <ErrorContainer error={error} />

      {cars && cars.length > 0 ? (
        <>
          <table className="Table">
            <TableHead />
            <TableBody cars={currentCars} />
          </table>

          <Pagination pages={pages} setCurrentPage={setCurrentPage} />
        </>
      ) : null}
    </>
  );
}
