import { ComponentProps, useCallback, useMemo } from "react";

import { Car } from "../../models/car.model";

import Actions from "../Actions";

interface Props extends ComponentProps<"table"> {
  data: Car[];
}

export default function TableBody(props: Props) {
  const { data } = props;
  const cutData = data.splice(0, 25);

  const keys = useMemo(
    () => Object.keys(data[0]).concat(["actions"]) as Array<keyof Car | "actions">,
    [],
  );

  const renderRow = useCallback((car: Car) => {
    return keys.map((key) => {
      switch (key) {
        case "id":
          return null;

        case "availability":
          return car[key] ? <td key={key}>Available</td> : <td key={key}>Not available</td>;

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
    <tbody className="TableBody">
      {cutData.map((car) => {
        return (
          <tr key={car.id} className="TableBody__row">
            {renderRow(car)}
          </tr>
        );
      })}
    </tbody>
  );
}
