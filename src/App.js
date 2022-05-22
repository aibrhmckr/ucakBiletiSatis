import BiletAra from "./js/BiletAra";
import React, { useState } from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from "@mui/material/Box";
import KartBilgileri from "./js/KullanıcıBilgiAl/Odeme/KartBilgileri";
import Yonetici from "./js/Yonetici/Yonetici";
import { seferler } from "./js/Seferler";

function App() {
  const [secilenUcus, setSecilenUcus] = useState();

  return (
    <div>
      <Box width={800}>

        <BiletAra secilenUcus={secilenUcus} setSecilenUcus={setSecilenUcus} />
        <IletisimBilgileri
          secilenUcus={secilenUcus}
          setSecilenUcus={setSecilenUcus}
        />
        <YolcuBilgileri
          secilenUcus={secilenUcus}
          setSecilenUcus={setSecilenUcus}
        />
        <KartBilgileri
          secilenUcus={secilenUcus}
          setSecilenUcus={setSecilenUcus}
        />
        <Yonetici secilenUcus={secilenUcus} />
      </Box>
    </div>
  );
}

export default App;
