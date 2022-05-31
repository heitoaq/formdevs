import React from "react";
import Front from "./Front";
import Back from "./Back";

const Responsibility = (props) => {
  const handleTec = (props) => {
    if (props.resp === "front")
      return (
        <Front
          handleTecnoChange={props.handleTecnoChange}
          checked={props.checked}
          setChecked={props.setChecked}
        />
      );
    if (props.resp === "back")
      return (
        <Back
          handleTecnoChange={props.handleTecnoChange}
          checked={props.checked}
          setChecked={props.setChecked}
        />
      );
    if (props.resp === "fullstack") {
      return (
        <>
          <Front
            handleTecnoChange={props.handleTecnoChange}
            checked={props.checked}
            setChecked={props.setChecked}
          />
          <Back
            handleTecnoChange={props.handleTecnoChange}
            checked={props.checked}
            setChecked={props.setChecked}
          />
        </>
      );
    }
  };

  return <>{handleTec(props)}</>;
};

export default Responsibility;
