import { useState } from "react";
import "./koltuklar.css";
const Koltuk = (props) => {
 /* const [koltukNum, setKoltukNum] = useState(false);
  const koltukNumVer = (event) => {
    if (koltukNum === true) setKoltukNum(false);
    else setKoltukNum(true);
  };*/
let koltukID=props.numara;

  return (
    <div className="koltuk">
      <div className="koltuk-numara">
        {props.numara}

        <input
          type="radio"
          id={props.numara}
          name="koltuk-numara"
          value={props.numara}
        ></input>
        <label htmlFor={props.numara}>{koltukID}</label>
        {console.log("koltuk-numara")}
      </div>
    </div>
  );
};
export default Koltuk;
