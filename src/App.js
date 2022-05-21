import BiletAra from "./js/BiletAra";
import React from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from "@mui/material/Box";
import KartBilgileri from "./js/KullanıcıBilgiAl/Odeme/KartBilgileri";
import Yonetici from "./js/Yonetici/Yonetici";

function App() {
  return (
    <div>
      <Box width={800}>
        <BiletAra />
        <IletisimBilgileri />
        <YolcuBilgileri />
        <KartBilgileri></KartBilgileri>
        <Yonetici />
      </Box>
    </div>
  );
}

export default App;
