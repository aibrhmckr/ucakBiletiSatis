import BiletAra from "./js/BiletAra";
import React from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from '@mui/material/Box';
import { Card } from "react-bootstrap";
import KartBilgileri from "./js/KullanıcıBilgiAl/Odeme/KartBilgileri";

function App() {
  return (
    <div>
      <Box width={800}>
      <BiletAra />
        <IletisimBilgileri />
        <YolcuBilgileri />
        <KartBilgileri></KartBilgileri>

      </Box>
    </div>
  );
}

export default App;
