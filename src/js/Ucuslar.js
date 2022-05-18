import { useState } from "react";
import UcusKart from "./UcusKart";

const Ucuslar = (props) => {
  const PegasusAirlines = [
    {
      id: 1,
      ucakMarka: "Boeing",
      ucak: "B737-800",
      yolcuKapasitesi: 165,
    },
    {
      id: 2,
      ucakMarka: "Airbus",
      ucak: "A320-200neo",
      yolcuKapasitesi: 260,
    },
    {
      id: 3,
      ucakMarka: "Airbus",
      ucak: "A320-200ceo",
      yolcuKapasitesi: 160,
    },
    {
      id: 4,
      ucakMarka: "Airbus",
      ucak: "A321-200neo",
      yolcuKapasitesi: 146,
    },
  ];

  const THY = [
    {
      id: 1,
      ucakMarka: "Airbus",
      ucak: "A350-900",
      yolcuKapasitesi: 329,
    },
    {
      id: 2,
      ucakMarka: "Boeing",
      ucak: "B77-300 ER",
      yolcuKapasitesi: 349,
    },
    {
      id: 3,
      ucakMarka: "Airbus",
      ucak: "A330-300",
      yolcuKapasitesi: 289,
    },
    {
      id: 4,
      ucakMarka: "Boeing",
      ucak: "B787-9 Dreamliner",
      yolcuKapasitesi: 300,
    },
    {
      id: 5,
      ucakMarka: "Airbus",
      ucak: "A330-200",
      yolcuKapasitesi: 250,
    },
    {
      id: 6,
      ucakMarka: "Airbus",
      ucak: "A321-200",
      yolcuKapasitesi: 180,
    },
    {
      id: 7,
      ucakMarka: "Boeing",
      ucak: "B737-800",
      yolcuKapasitesi: 165,
    },
    {
      id: 8,
      ucakMarka: "Airbus",
      ucak: "A321NEO",
      yolcuKapasitesi: 182,
    },
    {
      id: 9,
      ucakMarka: "Boeing",
      ucak: "B737-900 ER",
      yolcuKapasitesi: 151,
    },
    {
      id: 10,
      ucakMarka: "Boeing",
      ucak: "B737 MAX 9",
      yolcuKapasitesi: 169,
    },
    {
      id: 11,
      ucakMarka: "Airbus",
      ucak: "A320-200",
      yolcuKapasitesi: 150,
    },
    {
      id: 12,
      ucakMarka: "Boeing",
      ucak: "B737 MAX 8",
      yolcuKapasitesi: 151,
    },
    {
      id: 13,
      ucakMarka: "Airbus",
      ucak: "A319-100",
      yolcuKapasitesi: 132,
    },
    {
      id: 14,
      ucakMarka: "Boeing",
      ucak: "B747-400F",
      yolcuKapasitesi: 130,
    },
    {
      id: 15,
      ucakMarka: "Boeing",
      ucak: "B777F",
      yolcuKapasitesi: 124,
    },
    {
      id: 16,
      ucakMarka: "Airbus",
      ucak: "A330-200F",
      yolcuKapasitesi: 124,
    },
    {
      id: 17,
      ucakMarka: "Airbus",
      ucak: "A310-300F",
      yolcuKapasitesi: 124,
    },
    {
      id: 18,
      ucakMarka: "Airbus",
      ucak: "A300-600F",
      yolcuKapasitesi: 124,
    },
  ];
  const AnadoluJet = {
    id: 1,
    UcusKart: "Boeing",
    ucak: "B737-800",
    yolcuKapasitesi: 165,
  };
  const ucusFirmaUcaklar = [
    {
      Marka: "Pegasus Airlines",
      ucaklar: PegasusAirlines,
    },
    {
      Marka: "Türk Hava Yolları",
      Ucaklar: THY,
    },
    {
      Marka: "Anadolu Jet",
      Ucaklar: AnadoluJet,
    },
  ];

  const seferler = [
    //13 Haziran Giresun
    {
      Marka: ucusFirmaUcaklar[0].Marka,
      KalkisTarih: "2022-05-18",
      InisTarih: new Date(2022, 5, 12, 21, 5),
      KHavaalani: "İstanbul Sabiha Gökçen Havalimanı",
      IHavaalani: "Ordu - Giresun Havalimanı",
      Fiyat: 639.98,
      KoltukSayisi: 258,
      Bagaj: 15,
    },
    {
      Marka: ucusFirmaUcaklar[0].Marka,
      KalkisTarih: "2022-05-18",
      InisTarih: new Date(2022, 5, 12, 21, 5),
      KHavaalani: "İstanbul Sabiha Gökçen Havalimanı",
      IHavaalani: "Ordu - Giresun Havalimanı",
      Fiyat: 669.98,
      KoltukSayisi: 258,
      Bagaj: 15,
    },
    {
      Marka: ucusFirmaUcaklar[2].Marka,
      KalkisTarih: new Date(2022, 6, 13, 8, 15),
      InisTarih: new Date(2022, 6, 13, 9, 50),
      KHavaalani: "İstanbul Anadolu - SAW",
      IHavaalani: "Ordu - Giresun Havaalanı",
      Fiyat: 823.98,
      KoltukSayisi: 236,
      Bagaj: 15,
    },
    {
      Marka: ucusFirmaUcaklar[2].Marka,
      KalkisTarih: "2022-05-18",
      InisTarih: new Date(2022, 6, 13, 18, 45),
      KHavaalani: "İstanbul Anadolu - SAW",
      IHavaalani: "Ordu - Giresun Havaalanı",
      Fiyat: 823.98,
      KoltukSayisi: 236,
      Bagaj: 15,
    },
  ];
  ///
  const [gecerliSeferler, setGecerliSeferler] = useState(null); //bu state sayesinde aşağıda foreach ile
  // listedede istediğimiz sefer var mı diye aradıktan sonra seferleri saklayabileceğiz
const secili=[];
  seferler.forEach((Havalimani) => {
    if (Havalimani.KHavaalani === props.yolculukRota.nereden) {
      if (Havalimani.IHavaalani === props.yolculukRota.nereye) {
        if (Havalimani.KalkisTarih == props.yolculukRota.neZaman) {
          console.log("sefer var");
          secili.push(Havalimani);
        } 
        else {
          console.log("sefer yok", ucusFirmaUcaklar[0].Marka);
          console.log(Havalimani.KalkisTarih.getDay());
        }
      } else console.log("sefer yok");
    }
  });
  console.log(secili);
  //console.log(ucusFirmaUcaklar[0].Marka);
  //console.log(props);

  /*const seferKayit = {
    //Burada uçuta seçilen tarih kaydedilio ki
    //sonradan uçuş kartlarını oşultururken işimize yarasın
    Nereden: props.yolculukRota.nereden,
    Nereye: props.yolculukRota.nereye,
    NeZaman: props.yolculukRota.neZaman,
  };
*/
  return (
    <div>
      <UcusKart ucusSeferleri={secili}></UcusKart>
    </div>
  );
};

export default Ucuslar;
