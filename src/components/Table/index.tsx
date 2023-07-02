import { useCarsContext } from "../../hooks/useCarsContext";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Loader from "../Loader";
import ErrorContainer from "../ErrorContainer";

export default function Table() {
  const { error, cars } = useCarsContext();

  return (
    <>
      <Loader isLoading={cars.length <= 0} />
      <ErrorContainer error={error} />

      {cars && cars.length > 0 ? (
        <table className="Table">
          <TableHead />
          <TableBody cars={cars} />
        </table>
      ) : null}
    </>
  );
}
