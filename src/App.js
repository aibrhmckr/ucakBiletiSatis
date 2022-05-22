import BiletAra from "./js/BiletAra";
import React, { useState } from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from "@mui/material/Box";
import KartBilgileri from "./js/KullanıcıBilgiAl/Odeme/KartBilgileri";
import Yonetici from "./js/Yonetici/Yonetici";
import "./css/AppJS.css";
// import { seferler } from "./js/Seferler";

function App() {
  const [secilenUcus, setSecilenUcus] = useState();
  const [iletisim, setIletisim] = useState();
  const [yolcuBilgi, setYolcuBilgi] = useState();
  console.log(secilenUcus, iletisim, yolcuBilgi);
  return (
    <div className="ekran">
      <div className="ekran-sol">
        <BiletAra secilenUcus={secilenUcus} setSecilenUcus={setSecilenUcus} />
        <IletisimBilgileri iletisim={iletisim} setIletisim={setIletisim} />
        <YolcuBilgileri yolcuBilgi={yolcuBilgi} setYolcuBilgi={setYolcuBilgi} />
      </div>
      <div className="ekran-sag">
        <KartBilgileri
          secilenUcus={secilenUcus}
          setSecilenUcus={setSecilenUcus}
        />
      </div>
      <div>
        <Yonetici
          secilenUcus={secilenUcus}
          iletisim={iletisim}
          yolcuBilgi={yolcuBilgi}
        />
      </div>
    </div>
  );
}

export default App;
