import { useState } from "react";
import "./koltuklar.css";
const Koltuk = (props) => {


  return (
    <div className="koltuk">
      <div className="koltuk-numara">
        {props.numara}

        <input
          type="radio"
          id={props.numara}
          name="koltuk-numara"
          value={props.numara}
          onClick={()=>props.koltukSec(props.numara)}
        ></input>
        {/*<label htmlFor={props.numara}>{koltukID}</label>*/}
      </div>
    </div>
  );
};
export default Koltuk;
