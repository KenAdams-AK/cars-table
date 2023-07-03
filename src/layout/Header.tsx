import { useCallback, useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import AddCar from "../components/Popups/AddCar";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <header className="Header">
        Cars Table
        <Button content="Add Car" onClick={handleClick} />
      </header>

      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <AddCar setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}
