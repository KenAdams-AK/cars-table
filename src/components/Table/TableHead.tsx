import { ComponentProps, useMemo } from "react";

import { Car } from "../../models/car.model";
import { patchCarObjectKeys } from "../../helpers/patchCarObjectKeys";

interface Props extends ComponentProps<"table"> {
  data: Car[];
}

export default function TableHead(props: Props) {
  const { data } = props;

  const keys = useMemo(() => patchCarObjectKeys(data[0]).slice(1), []);

  return (
    <thead className="TableHead">
      <tr className="TableHead__row">{keys && keys.map((key) => <th key={key}>{key}</th>)}</tr>
    </thead>
  );
}
