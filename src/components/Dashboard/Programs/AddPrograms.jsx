import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddProgramForm from "./AddProgramForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddProgram() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="bg-orange-500 hover:bg-orange-600 p-primary text-white text-sm"
        onClick={handleOpen}
      >
        Add Program
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-primary my-2 font-semibold text-center text-2xl">
            Add Program Form
          </p>
          <AddProgramForm props={{handleClose}}/>
        </Box>
      </Modal>
    </div>
  );
}
