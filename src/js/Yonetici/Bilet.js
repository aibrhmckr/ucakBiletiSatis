import { seferler } from "../Seferler";
import "./Bilet.css";

const Bilet = (props) => {
  //console.log("----------",props.secilenUcus, props.iletisim, props.yolcuBilgi);
  //
  return (
    <div className="kart">
      <div>
        <label>{props.bilet?.bilet?.marka}</label> <br />
        <div className="ad-soyad">
          <label className="Adim">{props.bilet?.bilet?.ad}</label>
          <label className="Soyadim">{props.bilet?.bilet?.soyad}</label>
        </div>
        <div className="nerden-nereye">
          <label className="kalkisH">{props.bilet?.bilet?.KHavaalani}</label>
          <label className="inisH">{props.bilet?.bilet?.IHavaalani}</label>
        </div>
        <label className="pnr">{props.bilet?.PNR}</label>
        <label className="koltugum">{props.bilet?.bilet?.koltuk}</label>
        <div className="tarhim">
          <label className="KTarhim">{props.bilet?.bilet?.KalkisTarih}</label>
          &#8594;
          <label className="ITarhim">{props.bilet?.bilet?.InisTarih}</label>
        </div>
        <label className="kalkis-inis__saat">
          {props.bilet?.bilet?.KSaat} &#8594; {props.bilet?.bilet?.ISaat}
        </label>
        <button className="iptal-button">İptal Et</button>
      </div>
    </div>
  );
};
export default Bilet;
