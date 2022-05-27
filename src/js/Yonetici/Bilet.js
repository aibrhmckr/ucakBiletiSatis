import { seferler } from "../Seferler";
import "./Bilet.css";

const Bilet = (props) => {
  //console.log("----------",props.secilenUcus, props.iletisim, props.yolcuBilgi);
  //
  return (
    <div className="kart">
      <div className="iptal-et">
        <div className="iptal-butonu-disi">
        <label>{props.bilet?.bilet?.marka}</label> <br />
        <div className="ad-soyad">
          <label className="Adim-Soyadim">{props.bilet?.bilet?.ad} {props.bilet?.bilet?.soyad}</label>
        </div>
        <div className="nerden-nereye">
          <label className="kalkisH">{props.bilet?.bilet?.KHavaalani}</label>
          &#8594;
          <label className="inisH">{props.bilet?.bilet?.IHavaalani}</label>
        </div>
        <label className="pnr">PNR: {props.bilet?.PNR}</label><br />
        <label className="koltugum">KOLTUK: {props.bilet?.bilet?.koltuk}</label><br />
        <div className="tarhim">
          <div></div>
          <label className="KTarhim">{props.bilet?.bilet?.KalkisTarih}</label>
          &#8594;
          <label className="ITarhim">{props.bilet?.bilet?.InisTarih}</label>
        </div>
        <label className="kalkis-inis__saat">
          {props.bilet?.bilet?.KSaat} &#8594; {props.bilet?.bilet?.ISaat}
        </label><br />
        </div>
        <button className="iptal-button">İptal Et</button><br />
      </div>
    </div>
  );
};
export default Bilet;
