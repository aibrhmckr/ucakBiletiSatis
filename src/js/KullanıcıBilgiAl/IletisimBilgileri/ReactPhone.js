//import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "./ReactPhone.css"
const ReactPhone = (props) => {
  // const [value, setvalue] = useState();
  return (
    <div>
      <NumberFormat
        className="react-phone"
        format="+90 (###) ### ## ##"
        allowEmptyFormatting
        mask="_"
        onValueChange={props.telNo}
      />
    </div>
  );
};
export default ReactPhone;
