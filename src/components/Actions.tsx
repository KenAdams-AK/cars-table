import { ChangeEvent, useCallback, useState } from "react";

import { Car } from "../models/car.model";

import Modal from "../layout/Modal";
import EditCar from "./Popups/EditCar";
import DeleteCar from "./Popups/DeleteCar";

interface Props {
  carData: Car;
}

export default function Actions(props: Props) {
  const { carData } = props;
  const [action, setAction] = useState<"edit" | "delete" | null>(null);

  const handleSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { target } = e;

    if (target.value === "edit") {
      setAction("edit");
      target.value = "DEFAULT";
      return;
    }

    setAction("delete");
    target.value = "DEFAULT";
  }, []);

  return (
    <>
      <div className="Actions">
        <select
          className="Actions__menu"
          defaultValue="DEFAULT"
          name="actions"
          onChange={handleSelect}
        >
          <option value="DEFAULT" disabled>
            Select...
          </option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>

      <Modal isOpen={Boolean(action)} handleClose={() => setAction(null)}>
        {action === "edit" ? (
          <EditCar carData={carData} setIsModalOpen={() => setAction(null)} />
        ) : null}

        {action === "delete" ? (
          <DeleteCar car={carData} setIsModalOpen={() => setAction(null)} />
        ) : null}
      </Modal>
    </>
  );
}
