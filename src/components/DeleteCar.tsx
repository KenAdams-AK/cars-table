import { Car } from "../models/car.model";

interface Props {
  carData: Car;
}

export default function DeleteCar(props: Props) {
  const { carData } = props;

  return <div>DeleteCarPopup, delete car with Id: {carData.id}</div>;
}
