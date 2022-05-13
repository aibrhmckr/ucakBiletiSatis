import BiletAra from "./js/BiletAra";
import React from "react";
function App() {
  /*
class sefer{
  constructor(PNR,Marka,KSaati,ISaati,KHavaalani,IHavaalani,Fiyat){
    this.PNR=PNR;
    this.Marka=Marka;
    this.KSaati=KSaati;
    this.ISaati=ISaati;
    this.KHavaalani=KHavaalani;
    this.IHavaalani=IHavaalani;
    this.Fiyat=Fiyat;
  }
}*/

const seferler=[
//13 Haziran Giresun 
  {
    Marka: 'Pegasus Airlines',
    KalkisTarih: new Date(2022,6,13,6,15),
    InisTarih: new Date(2022,6,13,7,50),
    KHavaalani: 'İstanbul Anadolu - SAW',
    IHavaalani:'Ordu - Giresun Havaalanı',
    Fiyat:639.98,
    KoltukSayisi:258
  },
  {
    Marka: 'Pegasus Airlines',
    KalkisTarih: new Date(2022,6,13,19,30),
    InisTarih: new Date(2022,6,13,21,5),
    KHavaalani: 'İstanbul Anadolu - SAW',
    IHavaalani:'Ordu - Giresun Havaalanı',
    Fiyat:669.98,
    KoltukSayisi:258
  },
  {
    Marka: 'Anadolu Jet',
    KalkisTarih: new Date(2022,6,13,8,15),
    InisTarih: new Date(2022,6,13,9,50),
    KHavaalani: 'İstanbul Anadolu - SAW',
    IHavaalani:'Ordu - Giresun Havaalanı',
    Fiyat:823.98,
    KoltukSayisi:236
  },
  {
    Marka: 'Anadolu Jet',
    KalkisTarih: new Date(2022,6,13,17,15),
    InisTarih: new Date(2022,6,13,18,45),
    KHavaalani: 'İstanbul Anadolu - SAW',
    IHavaalani:'Ordu - Giresun Havaalanı',
    Fiyat:823.98,
    KoltukSayisi:236
  },
  ///////
]
  return (
    <div>
      <BiletAra/>
    </div>
  );
}

export default App;
