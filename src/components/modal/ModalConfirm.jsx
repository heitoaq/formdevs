import React from "react";
import "./ModalConfirm.css";

const ModalConfirm = ({
  confirmModal,
  handleClearForm,
  setConfirmModal,
  setShowModal,
}) => {
  const handleConfirm = () => {
    handleClearForm();
    setShowModal(false);
    setConfirmModal(false);
  };

  return confirmModal ? (
    <div className="backgroundConfirm">
      <div className="modalWrapperConfirm">
        <div className="modalContentConfirm">
          <p>Obrigado por compartilhar sua expêriencia conosco!</p>
          <button onClick={() => handleConfirm()}>Até Mais!</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalConfirm;
