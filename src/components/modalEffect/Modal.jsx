import React from "react";
import "./Modal.scss";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { rows } from "../callHistory/CallHistory";
import { columns } from "../callHistory/CallHistory";

const Modal = ({ close }) => {
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <h1 className="modal__callHistory">Call History</h1>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <div className="callHistory__info callHistory__info--left">
            <div className="callHistory__info__row"></div>
            <div className="callHistory__info__row"></div>
          </div>
          <div
            style={{
              height: 450,
              width: 650,
              paddingBottom: "1rem",
              margin: "auto auto",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={6}
              rowsPerPageOptions={[9]}
              checkboxSelection
              sx={{ borderRadius: "30px" }}
            />
          </div>
        </motion.div>

        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <CloseIcon className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
