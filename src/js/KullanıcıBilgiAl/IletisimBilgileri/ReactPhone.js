//import React, { useState } from "react";
import NumberFormat from "react-number-format";
import "./ReactPhone.css"
const ReactPhone = () => {
  // const [value, setvalue] = useState();
  return (
    <div>
      <NumberFormat
        className="react-phone"
        format="+90 (###) ### ## ##"
        allowEmptyFormatting
        mask="_"
      />
    </div>
  );
};
export default ReactPhone;
