import React, { useState } from "react";
import NumberFormat from "react-number-format";

const ReactPhone = () => {
  const [value, setvalue] = useState();
  return (
    <div>
      <NumberFormat
        format="+90 (###) ### ## ##"
        allowEmptyFormatting
        mask="_"
      />
    </div>
  );
};
export default ReactPhone;
