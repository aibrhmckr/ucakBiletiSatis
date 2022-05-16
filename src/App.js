import BiletAra from "./js/BiletAra";
import React from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
import Box from '@mui/material/Box';

function App() {
  return (
    <div>
      <Box width={800}>
      <BiletAra />
        <IletisimBilgileri />
        <YolcuBilgileri />
      </Box>

    </div>
  );
}

export default App;
