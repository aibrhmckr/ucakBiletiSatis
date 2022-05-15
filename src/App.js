import BiletAra from "./js/BiletAra";
import React from "react";
import IletisimBilgileri from "./js/KullanıcıBilgiAl/IletisimBilgileri/IletisimBilgileri";
import YolcuBilgileri from "./js/KullanıcıBilgiAl/YolcuBilgileri/YolcuBilgileri";
function App() {
  return (
    <div>
      <BiletAra />
      <IletisimBilgileri/>
      <YolcuBilgileri/>

    </div>
  );
}

export default App;
