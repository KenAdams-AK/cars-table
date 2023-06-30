import { useCars } from "../../hooks/useCars";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Loader from "../Loader";
import ErrorContainer from "../ErrorContainer";

export default function Table() {
  const { error, cars } = useCars();

  return (
    <>
      <Loader isLoading={cars.length <= 0} />
      <ErrorContainer error={error} />

      <table className="Table">
        {cars && cars.length > 0 ? (
          <>
            <TableHead data={cars} />
            <TableBody data={cars} />
          </>
        ) : null}
      </table>
    </>
  );
}
