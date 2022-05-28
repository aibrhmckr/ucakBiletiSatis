import BiletAra from "./js/BiletAra";
import React, { useEffect, useState } from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from "@mui/material/Box";
import KartBilgileri from "./js/KullanıcıBilgiAl/Odeme/KartBilgileri";
import Yonetici from "./js/Yonetici/Yonetici";
import "./css/AppJS.css";
 import { seferler } from "./js/Seferler";

function App() {
  const biletim = [];
  const [secilenUcus, setSecilenUcus] = useState();
  const [iletisim, setIletisim] = useState();
  const [yolcuBilgi, setYolcuBilgi] = useState();
  const [biletler, setBiletler] = useState(biletim);
  const [yoneticiGiris,setYoneticiGiris]=useState(false)
  //console.clear();
  console.log(biletler);
  const bilet={
    ucusID:secilenUcus?.ucusID,
    marka:seferler[secilenUcus?.ucusID]?.Marka,
    ad: yolcuBilgi?.ad,
    soyad: yolcuBilgi?.soyad,
    KHavaalani: seferler[secilenUcus?.ucusID]?.KHavaalani,
    IHavaalani: seferler[secilenUcus?.ucusID]?.IHavaalani,
    koltuk: secilenUcus?.secilenKoltuk,
    KalkisTarih: seferler[secilenUcus?.ucusID]?.KalkisTarih,
    InisTarih: seferler[secilenUcus?.ucusID]?.InisTarih,
    KSaat: seferler[secilenUcus?.ucusID]?.KSaat,
    ISaat: seferler[secilenUcus?.ucusID]?.ISaat,
  }
  return (
    <div className="ekran" >
      <div className="ekran-sol" >
        <BiletAra
          secilenUcus={secilenUcus}
          setSecilenUcus={setSecilenUcus}
          biletler={biletler}
        />
        <IletisimBilgileri iletisim={iletisim} setIletisim={setIletisim} />
        <YolcuBilgileri yolcuBilgi={yolcuBilgi} setYolcuBilgi={setYolcuBilgi} />
      </div>
      <div className="ekran-sag">
        <div className="kredi-karti__yonetic-al">
          {yoneticiGiris===false ?(
          <KartBilgileri
          secilenUcus={secilenUcus}
          setSecilenUcus={setSecilenUcus}
          iletisim={iletisim}
          yolcuBilgi={yolcuBilgi}
          biletler={biletler}
          setBiletler={setBiletler}
        />):(<button 
          className="yonetici_biletAl"
          onClick={()=>{
            setSecilenUcus({
              ...secilenUcus,
              satinalindi: true,
            })
            alert("Sefer Oluşturuldu");
            setBiletler([
              ...biletler,
              { PNR: Math.round(Math.random() * 1000), bilet:bilet },
            ])
          }}
        >Bilet Al</button>)}

        </div>
      </div>
      <div>
        <Yonetici
          secilenUcus={secilenUcus}
          iletisim={iletisim}
          yolcuBilgi={yolcuBilgi}
          biletler={biletler}
          setBiletler={setBiletler}
          yoneticiGiris={yoneticiGiris}
          setYoneticiGiris={setYoneticiGiris}
        />
      </div>
      
    </div>
  );
}

export default App;
