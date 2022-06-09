import UcusKart from "./UcusKart";
import "../css/Ucuslar.css";
import { seferler } from "./Seferler";

const Ucuslar = (props) => {
  
  const secili = [];
  const seciliUcakYolcu = [];
  seferler.forEach((Havalimani) => {
    if (Havalimani.KHavaalani === props.yolculukRota.nereden) {
      if (Havalimani.IHavaalani === props.yolculukRota.nereye) {
        if (Havalimani.KalkisTarih === props.yolculukRota.neZaman) {
          secili.push(Havalimani);
          seciliUcakYolcu.push(Havalimani.yolcuSayisi);
        } else {
        }
      } else {
      }
    }
  });
  
  return (
    <div className="ucus-liste">
      
      <UcusKart
        ucusSeferleri={secili}
        ucusKapasite={seciliUcakYolcu}
        secilenUcus={props.secilenUcus} 
        setSecilenUcus={props.setSecilenUcus}
        biletler={props.biletler}
      ></UcusKart>
    </div>
  );
};

export default Ucuslar;
