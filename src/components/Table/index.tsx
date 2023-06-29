import { useCars } from "../../hooks/useCars";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Loader from "../Loader";
import ErrorContainer from "../ErrorContainer";

export default function Table() {
  const { isLoading, error, cars } = useCars();

  return (
    <>
      <Loader isLoading={isLoading} />
      <ErrorContainer error={error} />

      <table>
        <TableHead data={cars} />
        <TableBody data={cars} />
      </table>
    </>
  );
}
