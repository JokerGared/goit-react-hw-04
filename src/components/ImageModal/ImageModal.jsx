import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderRadius: "20px",
    border: "none",
    overflow: "hidden",
  },
};
Modal.setAppElement("#root");

export const ImageModal = ({ modalIsOpen, closeModal, modalItem }) => {
  if (!modalItem) return null;
  return (
    <Modal
      className={s.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img className={s.image} src={modalItem.src} alt={modalItem.alt} />
    </Modal>
  );
};
