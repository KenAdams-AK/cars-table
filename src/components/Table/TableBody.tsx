import { ComponentProps, useCallback, useMemo } from "react";

import { Car } from "../../models/car.model";

import Actions from "../Actions";
import { useCarOriginalKeys } from "../../hooks/useCarOriginalKeys";

interface Props extends ComponentProps<"tbody"> {
  cars: Car[];
}

export default function TableBody(props: Props) {
  const { cars, ...rest } = props;
  const { originalKeys } = useCarOriginalKeys();

  const keys = useMemo(() => [...originalKeys, "actions"] as Array<keyof Car | "actions">, []);

  const renderRow = useCallback((car: Car) => {
    return keys.map((key) => {
      switch (key) {
        case "id":
          return null;

        case "availability":
          return String(car[key]) === "true" ? (
            <td key={key}>Available</td>
          ) : (
            <td key={key}>Not available</td>
          );

        case "actions":
          return (
            <td key={key} data-car-id={car.id}>
              <Actions carData={car} />
            </td>
          );

        default:
          return <td key={key}>{car[key]}</td>;
      }
    });
  }, []);

  return (
    <tbody className="TableBody" {...rest}>
      {cars.map((car) => (
        <tr key={car.id} className="TableBody__row">
          {renderRow(car)}
        </tr>
      ))}
    </tbody>
  );
}
