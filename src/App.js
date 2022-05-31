import React, { useState } from "react";
import Responsibility from "./components/responsability/Responsibility";
import Modal from "./components/modal/Modal";
import "./App.css";

const initialValues = {
  name: "",
  email: "",
  age: "",
  resp: "",
  seniority: "Selecione",
  tecno: [],
  text: "",
};

const errorsInitial = {
  name: false,
  email: false,
  age: false,
  resp: false,
  seniority: false,
  tecno: false,
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(null);

  const [errorInput, setErrorInput] = useState(errorsInitial);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (e.target.value) {
      setErrorInput({ ...errorInput, [name]: false });
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleTecnoChange = (e) => {
    const removeItem = formValues.tecno.filter(
      (item) => item !== e.target.value
    );

    if (!e.target.checked && formValues.tecno.includes(e.target.value)) {
      setFormValues(() => ({ ...formValues, tecno: removeItem }));
    }

    if (e.target.checked && !formValues.tecno.includes(e.target.value)) {
      setErrorInput({ ...errorInput, tecno: false });
      setFormValues((previous) => ({
        ...formValues,
        tecno: [...previous.tecno, e.target.value],
      }));
    }
  };

  const handleClearForm = () => {
    setFormValues(initialValues);
    setSelectedRadioBtn(null);
  };

  const isRadioSelected = (radioBtn) => {
    return selectedRadioBtn === radioBtn;
  };

  const handleSelectResponsibility = (e) => {
    setErrorInput({ ...errorInput, resp: false });
    setSelectedRadioBtn(e.target.value);
    setFormValues({ ...formValues, resp: e.target.value, tecno: [] });
  };

  const validateForm = (e) => {
    e.preventDefault();

    let nameError = false;
    let emailError = false;
    let ageError = false;
    let respError = false;
    let seniorityError = false;
    let tecnoError = false;

    if (!formValues.name) nameError = true;
    if (!formValues.email) emailError = true;
    if (!formValues.age) ageError = true;
    if (!formValues.resp) respError = true;
    if (formValues.seniority === "Selecione") seniorityError = true;
    if (formValues.tecno.length <= 0) tecnoError = true;

    setErrorInput({
      name: nameError,
      email: emailError,
      age: ageError,
      resp: respError,
      seniority: seniorityError,
      tecno: tecnoError,
    });

    if (
      !nameError &&
      !emailError &&
      !ageError &&
      !seniorityError &&
      !tecnoError
    )
      setShowModal((prev) => !prev);
  };

  return (
    <form className="container" onSubmit={validateForm}>
      <div className="containerForm">
        <div className="title">
          <h2>Cadastro de DEVs</h2>
        </div>

        <div className="form">
          <p htmlFor="name">Nome Completo</p>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          ></input>
          {errorInput.name ? <span>Preencha o campo</span> : ""}

          <p htmlFor="email">Email</p>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          ></input>
          {errorInput.email ? <span>Preencha o campo</span> : ""}

          <p htmlFor="age">
            Com quantos anos teve o primeiro contato com a área em que trabalha?
          </p>
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleInputChange}
          ></input>
          {errorInput.age ? <span>Preencha o campo</span> : ""}
          <p htmlFor="resp">Qual area você desenvolve?</p>
          <div>
            <label>
              <input
                type="radio"
                value="front"
                name="resp"
                checked={isRadioSelected("front")}
                onChange={handleSelectResponsibility}
              />
              Front-End
            </label>
            <label>
              <input
                type="radio"
                value="back"
                name="resp"
                checked={isRadioSelected("back")}
                onChange={handleSelectResponsibility}
              />
              Back-End
            </label>
            <label>
              <input
                type="radio"
                value="fullstack"
                name="resp"
                checked={isRadioSelected("fullstack")}
                onChange={handleSelectResponsibility}
              />
              Fullstack
            </label>
          </div>
          {errorInput.resp ? <span>Selecione um campo</span> : ""}

          <p>Senioridade</p>
          <select
            value={formValues.seniority}
            name="seniority"
            onChange={handleInputChange}
          >
            <option disabled>Selecione</option>
            <option>Trainee</option>
            <option>Junior</option>
            <option>Pleno</option>
            <option>Senior</option>
          </select>
          {errorInput.seniority ? <span>Selecione o campo</span> : ""}

          {formValues.resp ? (
            <p>Selecione as tecnologias/linguagens que utiliza:</p>
          ) : (
            ""
          )}

          <Responsibility
            resp={formValues.resp}
            handleTecnoChange={handleTecnoChange}
          />
          {!errorInput.resp && errorInput.tecno ? (
            <span>Marque um campo</span>
          ) : (
            ""
          )}

          <p>
            Conte um pouco da sua experiencia com as tecnologias. Se você usar
            alguma não listada, conte para nós! (Máximo de 600 caractéres.)
          </p>
          <div className="formText">
            <textarea
              maxLength={600}
              rows="5"
              name="text"
              value={formValues.text}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="buttonForm">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>

      <Modal
        handleClearForm={handleClearForm}
        formValues={formValues}
        setFormValues={setFormValues}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </form>
  );
}

export default App;
