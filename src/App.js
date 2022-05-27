import BiletAra from "./js/BiletAra";
import React, { useEffect, useState } from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from "@mui/material/Box";
import KartBilgileri from "./js/KullanıcıBilgiAl/Odeme/KartBilgileri";
import Yonetici from "./js/Yonetici/Yonetici";
import "./css/AppJS.css";
// import { seferler } from "./js/Seferler";

function App() {
  const biletim = [];
  const [secilenUcus, setSecilenUcus] = useState();
  const [iletisim, setIletisim] = useState();
  const [yolcuBilgi, setYolcuBilgi] = useState();
  const [biletler, setBiletler] = useState(biletim);

  console.clear();
  console.log(biletler);

  return (
    <div className="ekran">
      <div className="ekran-sol">
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
          <KartBilgileri
            secilenUcus={secilenUcus}
            setSecilenUcus={setSecilenUcus}
            iletisim={iletisim}
            yolcuBilgi={yolcuBilgi}
            biletler={biletler}
            setBiletler={setBiletler}
          />
        </div>
      </div>
      <div>
        <Yonetici
          secilenUcus={secilenUcus}
          iletisim={iletisim}
          yolcuBilgi={yolcuBilgi}
          biletler={biletler}
          setBiletler={setBiletler}
        />
      </div>
    </div>
  );
}

export default App;
