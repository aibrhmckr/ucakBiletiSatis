import Koltuklar from "./Ucak/koltuklar";
import "../css/UcusKart.css"
import { useState } from "react";
const UcusKart = (props) => {
  const kartlar = [];
  props.ucusSeferleri.map((sefer) =>
    kartlar.push(<Kart yolculukRota={sefer} yolculukKapasite={sefer.yolcuSayisi} secilenUcus={props.secilenUcus} setSecilenUcus={props.setSecilenUcus}/>)
  ); {/*koltuk*/}//seferden sonra yazıyordu
//yukarıda gelen bilgileri aşağıdaki kart nesnesine map ederek gönderiyorum
//koltuk sayısı gönderiliyor ama hepsinde 156 adet niye olduğunu çöz
  return <div>{kartlar}</div>;
};

 const Kart=(props)=> {
   let kapasite=props.yolculukKapasite

   //
   /* Burada secilen koltuğun numarasını alt ekemandan almaya 
   çalışıyoruz */
   const[koltukNumara,setKoltukNumara]=useState(0);
  
//console.log(koltukNumara)
  return (
    <div className="sefer-kart" >
      <div className="resim">
        <div>
          {props.yolculukRota.Marka}<br/>
          {props.yolculukRota.KHavaalani}
          &#8594; {props.yolculukRota.IHavaalani}
        </div>
        <div>{props.yolculukRota.KSaat} &#8594; {props.yolculukRota.ISaat}</div>
      </div>
      <Koltuklar yolculukKapasite={kapasite} 
      secilenKoltuk={koltukNumara=>setKoltukNumara(koltukNumara)}
      ucusID={props.yolculukRota.id}
      secilenUcus={props.secilenUcus} setSecilenUcus={props.setSecilenUcus}
      />
      {/*{koltukNumara!==null ? (<button>İlerle</button>):(<div/>)}*/}
    </div>
  );
}
export default UcusKart;
