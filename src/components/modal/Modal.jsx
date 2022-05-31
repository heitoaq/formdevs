import React, { useState } from "react";
import "./Modal.css";
import ModalConfirm from "./ModalConfirm";

const Modal = ({ formValues, handleClearForm, showModal, setShowModal }) => {
  const [confirmModal, setConfirmModal] = useState(false);

  const formattedResp = {
    front: "Front-End",
    back: "Back-End",
    fullstack: "Fullstack",
  };

  return (
    <>
      {showModal ? (
        <div className="background">
          <div className="modalWrapper">
            <div className="modal-header">
              <h4>Confirmar Informações</h4>
            </div>
            <div className="modalContent">
              <div>
                Nome:<label>{formValues.name}</label>
              </div>
              <div>
                Email:<label>{formValues.email}</label>
              </div>
              <div>
                Idade do primeiro contato:<label>{formValues.age}</label>
              </div>
              <div>
                Área de Desenvolvimento:
                <label>{formattedResp[formValues.resp]}</label>
              </div>
              <div>
                Senioridade:<label>{formValues.seniority}</label>
              </div>
              <div className="tecno_div">
                Tecnologias/Linguagens utilizadas:
                <div>
                  {formValues.tecno.map((item, index) => {
                    return (
                      <span key={index}>{(index ? ", " : "") + item}</span>
                    );
                  })}
                </div>
              </div>
              <div>
                Um pouco da experiência:
                <div className="text-area">
                  <label>{formValues.text}</label>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-close" onClick={() => setShowModal(false)}>
                Voltar
              </button>
              <button
                className="btn-confirm"
                onClick={() => setConfirmModal(true)}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <ModalConfirm
        handleClearForm={handleClearForm}
        setShowModal={setShowModal}
        confirmModal={confirmModal}
        setConfirmModal={setConfirmModal}
      />
    </>
  );
};

export default Modal;
