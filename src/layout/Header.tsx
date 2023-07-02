import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import AddCar from "../components/Popups/AddCar";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <header className="Header">
        Cars Table
        <Button
          content="Add Car"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </header>

      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <AddCar setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
}
