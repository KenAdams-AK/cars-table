import { ChangeEvent, ComponentProps, Dispatch, FormEvent, useEffect, useState } from "react";

import { useCarsContext } from "../hooks/useCarsContext";
import { useCarOriginalKeys } from "../hooks/useCarOriginalKeys";
import { useCarPatchedKeys } from "../hooks/useCarPatchedKeys";
import { Car } from "../models/car.model";
import { disabledFields } from "../constants/DisabledFields";

import Button from "../layout/Button";

interface CarFormProps extends ComponentProps<"form"> {
  formType: "create" | "update";
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
  car?: Car;
}

export default function CarForm(props: CarFormProps) {
  const { formType, car, setIsModalOpen, ...rest } = props;

  const { cars, addCar, editCar } = useCarsContext();

  const { originalKeys } = useCarOriginalKeys();
  const { patchedKeys } = useCarPatchedKeys();

  const [newCar, setNewCar] = useState({} as Car);

  useEffect(() => {
    if (car) {
      setNewCar(car);
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    setNewCar({ ...newCar, [target.name]: target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formType === "create") {
      const lastIndex = cars.length - 1;
      const nextId = { id: cars[lastIndex].id + 1 };
      addCar({ ...nextId, ...newCar });
    }

    if (formType === "update") {
      editCar(newCar);
    }

    setIsModalOpen(false);
  }

  return (
    <form className="CarForm" onSubmit={handleSubmit} {...rest}>
      <fieldset className="CarForm__fieldset">
        <legend className="CarForm__legend">Car details:</legend>

        {patchedKeys.map((key, index) => (
          <label htmlFor={key} key={key}>
            {key}:
            <input
              type="text"
              id={key}
              name={originalKeys[index]}
              value={(newCar[originalKeys[index]] as keyof Car) ?? ""}
              onChange={handleChange}
              required
              disabled={formType === "update" && disabledFields.includes(key)}
            />
          </label>
        ))}

        <div className="CarForm__actions">
          <Button type="submit" content="Save" />
          <Button content="Exit" onClick={() => setIsModalOpen(false)} />
        </div>
      </fieldset>
    </form>
  );
}
