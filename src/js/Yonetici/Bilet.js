import { seferler } from "../Seferler";

const Bilet = (props) => {
  //console.log("----------",props.secilenUcus, props.iletisim, props.yolcuBilgi);
  //
  return (
    <div>
        {/* <label>{seferler[props.secilenUcus?.ucusID]?.Marka}</label> <br/>
      <label className="Adim">{props.yolcuBilgi?.ad}</label>
      <label className="Soyadim"> {props.yolcuBilgi?.soyad}</label>
      <br />
      <label className="kalkisH">
        {seferler[props.secilenUcus?.ucusID]?.KHavaalani}
      </label>
      <br />
      <label className="inisH">
        {seferler[props.secilenUcus?.ucusID]?.IHavaalani}
      </label>
      <br />
      <label className="pnr">{}</label>
      <br />
      <label className="koltugum">{props.secilenUcus?.secilenKoltuk}</label>
      <br />
      <label className="tarhim">
        {seferler[props.secilenUcus?.ucusID]?.KalkisTarih}&#8594;
        {seferler[props.secilenUcus?.ucusID]?.InisTarih}
      </label>
      <br />
      <label className="kalkis-inis__saat">{seferler[props.secilenUcus?.ucusID]?.KSaat } &#8594; {seferler[props.secilenUcus?.ucusID]?.ISaat}</label>
      <br />
      <button className="iptal-button">İptal Et</button>
      <br /> */}
      <label>{props.bilet?.Marka}</label> <br/>
    </div>
  );
};
export default Bilet;
