import Koltuklar from "./Ucak/koltuklar";
import "../css/UcusKart.css"
const UcusKart = (props) => {
  const kartlar = [];
  props.ucusSeferleri.map((sefer) =>
    kartlar.push(<Kart yolculukRota={sefer} yolculukKapasite={sefer.yolcuSayisi} />)
  ); {/*koltuk*/}//seferden sonra yazıyordu
//yukarıda gelen bilgileri aşağıdaki kart nesnesine map ederek gönderiyorum
//koltuk sayısı gönderiliyor ama hepsinde 156 adet niye olduğunu çöz
  return <div>{kartlar}</div>;
};

 const Kart=(props)=> {
   let kapasite=props.yolculukKapasite
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
      <Koltuklar yolculukKapasite={kapasite}/>
    </div>
  );
}
export default UcusKart;
