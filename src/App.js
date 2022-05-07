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
const havaalanlari=[
  {value:"Adana Havalimanı",label:"Adana Havalimanı"},
  {value:"Ankara Esenboğa Havalimanı",label:"Ankara Esenboğa Havalimanı"},
  {value:"Antalya Havalimanı",label:"Antalya Havalimanı"},
  {value:"Antalya Gazipaşa - Alanya Havalimanı",label:"Antalya Gazipaşa - Alanya Havalimanı"},
  {value:"Balıkesir Koca Seyit Havalimanı",label:"Balıkesir Koca Seyit Havalimanı"},
  {value:"Bursa Yenişehir Havalimanı",label:"Bursa Yenişehir Havalimanı"},
  {value:"Çanakkale Havalimanı",label:"Çanakkale Havalimanı"},
  {value:"Denizli Çardak Havalimanı",label:"Denizli Çardak Havalimanı"},
  {value:"Diyarbakır Havalimanı",label:"Diyarbakır Havalimanı"},
  {value:"Elazığ Havalimanı",label:"Elazığ Havalimanı"},
  {value:"Erzurum Havalimanı",label:"Erzurum Havalimanı"},
  {value:"Eskişehir Hasan Polatkan Havalimanı",label:"Eskişehir Hasan Polatkan Havalimanı"},
  {value:"Gaziantep Havalimanı",label:"Gaziantep Havalimanı"},
  {value:"Hatay Havalimanı",label:"Hatay Havalimanı"},
  {value:"Isparta Süleyman Demirel Havalimanı",label:"Isparta Süleyman Demirel Havalimanı"},
  {value:"İstanbul Havalimanı",label:"İstanbul Havalimanı"},
  {value:"İstanbul Sabiha Gökçen Havalimanı",label:"İstanbul Sabiha Gökçen Havalimanı"},
  {value:"İzmir Adnan Menderes Havalimanı",label:"İzmir Adnan Menderes Havalimanı"},
  {value:"Kars Harakani Havalimanı",label:"Kars Harakani Havalimanı"},
  {value:"Kayseri Havalimanı",label:"Kayseri Havalimanı"},
  {value:"Konya Havalimanı",label:"Konya Havalimanı"},
  {value:"Kütahya Zafer Havalimanı",label:"Kütahya Zafer Havalimanı"},
  {value:"Malatya Havalimanı",label:"Malatya Havalimanı"},
  {value:"Muğla Daşaman Havalimanı",label:"Muğla Daşaman Havalimanı"},
  {value:"Muğla Milas - Bodurm Havalimanı",label:"Muğla Milas - Bodurm Havalimanı"},
  {value:"Kapadokya Havalimanı",label:"Kapadokya Havalimanı"},
  {value:"Ordu - Giresun Havalimanı",label:"Ordu - Giresun Havalimanı"},
  {value:"Samsun Çarşamba Havalimanı",label:"Samsun Çarşamba Havalimanı"},
  {value:"Sinop Havalimanı",label:"Sinop Havalimanı"},
  {value:"Sivas Nuri Demirağ Havalimanı",label:"Sivas Nuri Demirağ Havalimanı"},
  {value:"Şanlıurfa Gap Havalimanı",label:"Şanlıurfa Gap Havalimanı"},
  {value:"Tekirdağ Çorlu Havalimanı",label:"Tekirdağ Çorlu Havalimanı"},
  {value:"Trabzon Havalimanı",label:"Trabzon Havalimanı"},
  {value:"Uşak Havalimanı",label:"Uşak Havalimanı"},
  {value:"Van Ferit Melen Havalimanı",label:"Van Ferit Melen Havalimanı"},
  {value:"Zonguldak Çaycuma Havalimanı",label:"Zonguldak Çaycuma Havalimanı"},
  {value:"Adıyaman Havalimanı",label:"Adıyaman Havalimanı"},
  {value:"Ağrı Ahmedi-i Hani Havalimanı",label:"Ağrı Ahmedi-i Hani Havalimanı"},
  {value:"Amasya Merzifon Havalimanı",label:"Amasya Merzifon Havalimanı"},
  {value:"Aydın Çaldır Havalimanı",label:"Aydın Çaldır Havalimanı"},
  {value:"Balıkesir Merkez Havalimanı",label:"Balıkesir Merkez Havalimanı"},
  {value:"Batman Havalimanı",label:"Batman Havalimanı"},
  {value:"Bingöl Havalimanı",label:"Bingöl Havalimanı"},
  {value:"Bursa Yenişehir Havalimanı",label:"Bursa Yenişehir Havalimanı"},
  {value:"Çanakkale GökçeAda Havalimanı",label:"Çanakkale GökçeAda Havalimanı"},
  {value:"Erzincan Havalimanı",label:"Erzincan Havalimanı"},
  {value:"Hakkari Yüksekova Selahaddin Eyyubi Havalimanı",label:"Hakkari Yüksekova Selahaddin Eyyubi Havalimanı"},
  {value:"Iğdır Şehit Bülent Ayydın Havalimanı",label:"Iğdır Şehit Bülent Ayydın Havalimanı"},
  {value:"Kahramanmaraş Havalimanı",label:"Kahramanmaraş Havalimanı"},
  {value:"Kastamonu Havalimanı",label:"Kastamonu Havalimanı"},
  {value:"Mardin Havalimanı",label:"Mardin Havalimanı"},
  {value:"Muş Havalimanı",label:"Muş Havalimanı"},
  {value:"Siirt Havalimanı",label:"Siirt Havalimanı"},
  {value:"Şırnak Şerafettin Elçi Havalimanı",label:"Şırnak Şerafettin Elçi Havalimanı"},
  {value:"Tokat Havalimanı",label:"Tokat Havalimanı"}
  
]

  return (
    <div>
      <BiletAra options={havaalanlari}/>
    </div>
  );
}

export default App;
