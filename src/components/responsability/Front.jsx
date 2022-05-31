import React from "react";
import "./tecnologies.css";

const Front = (props) => {
  const handleChange = (e) => {
    props.handleTecnoChange(e);
  };

  const checkList = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "Vue",
    "TypeScript",
    "Angular",
    "SASS",
    "JQuery",
    "Outros",
  ];

  return (
    <div className="containerTec">
      <fieldset className="tec" onChange={handleChange}>
        <legend>Front-End</legend>

        {checkList.map((item, index) => (
          <div key={index}>
            <input type="checkbox" name="tecno" value={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default Front;
