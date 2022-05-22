import "./koltuklar.css";
const Koltuk = (props) => {
  return (
    <div className="koltuk">
      <div className="koltuk-numara">
        {props.numara}

        {props.disabled == false ? (
          <input
            type="radio"
            id={props.numara}
            name="koltuk-numara"
            value={props.numara}
            onClick={() => props.koltukSec(props.numara)}
          />
        ) : null}
        {/*<label htmlFor={props.numara}>{koltukID}</label>*/}
      </div>
    </div>
  );
};
export default Koltuk;
