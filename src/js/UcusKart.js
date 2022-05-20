import Koltuklar from "./Ucak/koltuklar";
import "../css/UcusKart.css"
const UcusKart = (props) => {
  //console.log(props.nereden)
  //console.log(props.yolculukRota.nereden);
  const kartlar = [];
  props.ucusSeferleri.map((sefer) =>
    kartlar.push(<Kart yolculukRota={sefer} />)
  );

  return <div>{kartlar}</div>;
};

function Kart(props) {
  return (
    <div className="sefer-kart">
      <div>
        <div>
          {props.yolculukRota.Marka}<br/>
          {props.yolculukRota.KHavaalani}
          &#8594; {props.yolculukRota.IHavaalani}
        </div>
        <div>{props.yolculukRota.KSaat} &#8594; {props.yolculukRota.ISaat}</div>
      </div>
      <Koltuklar />
    </div>
  );
}
export default UcusKart;
