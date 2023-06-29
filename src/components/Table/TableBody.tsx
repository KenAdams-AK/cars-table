import { ComponentProps, useCallback, useMemo } from "react";
import { Car } from "../../models/car.model";

interface Props extends ComponentProps<"table"> {
  data: Car[];
}

export default function TableBody(props: Props) {
  const { data } = props;

  const cutData = data.splice(0, 50);

  const keys = useMemo(() => {
    return Object.keys(data[0]).slice(1) as Array<keyof Car>;
  }, [data]);

  const renderRow = useCallback((car: Car) => {
    return keys.map((key) => {
      if (key === "availability") {
        return car[key] ? <td key={key}>Available</td> : <td key={key}>Not available</td>;
      }
      return <td key={key}>{car[key]}</td>;
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
