import React from "react";
import "./tecnologies.css";

const Back = (props) => {
  const checkList = [
    "JavaScript",
    "NodeJS",
    "Ruby",
    "Kotlin",
    "PHP",
    "Phyton",
    "SQL",
    "Rust",
    "C/C++",
    "Outros",
  ];

  const handleChange = (e) => {
    props.handleTecnoChange(e);
  };

  return (
    <div className="containerTec">
      <fieldset className="tec">
        <legend>Back-End</legend>

        {checkList.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name="tecno"
              value={item}
              onChange={handleChange}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default Back;
