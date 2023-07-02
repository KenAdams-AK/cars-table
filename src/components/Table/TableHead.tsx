import { ComponentProps, useMemo } from "react";

import { useCarPatchedKeys } from "../../hooks/useCarPatchedKeys";

type Props = ComponentProps<"thead">;

export default function TableHead(props: Props) {
  const { patchedKeys } = useCarPatchedKeys();

  const keys = useMemo(() => [...patchedKeys, "actions".toUpperCase()], []);

  return (
    <thead className="TableHead" {...props}>
      <tr className="TableHead__row">{keys && keys.map((key) => <th key={key}>{key}</th>)}</tr>
    </thead>
  );
}
