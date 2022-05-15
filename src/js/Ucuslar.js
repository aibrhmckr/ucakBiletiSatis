import { useState } from "react";
import UcusKart from "./UcusKart";

const Ucuslar = (props) => {
  const seferler = [
    //13 Haziran Giresun
    {
      Marka: "Pegasus Airlines",
      KalkisTarih: new Date('2022-05-23'),
      InisTarih: new Date('2022-05-23'),
      KHavaalani: "İstanbul Sabiha Gökçen Havalimanı",
      IHavaalani: "Ordu - Giresun Havalimanı",
      Fiyat: 639.98,
      KoltukSayisi: 258,
      Bagaj: 15,
    },
    {
      Marka: "Pegasus Airlines",
      KalkisTarih: new Date(2022, 5, 12, 19, 30),
      InisTarih: new Date(2022, 5, 12, 21, 5),
      KHavaalani: "İstanbul Anadolu - SAW",
      IHavaalani: "Ordu - Giresun Havaalanı",
      Fiyat: 669.98,
      KoltukSayisi: 258,
      Bagaj: 15,
    },
    {
      Marka: "Anadolu Jet",
      KalkisTarih: new Date(2022, 6, 13, 8, 15),
      InisTarih: new Date(2022, 6, 13, 9, 50),
      KHavaalani: "İstanbul Anadolu - SAW",
      IHavaalani: "Ordu - Giresun Havaalanı",
      Fiyat: 823.98,
      KoltukSayisi: 236,
      Bagaj: 15,
    },
    {
      Marka: "Anadolu Jet",
      KalkisTarih: new Date(2022, 6, 13, 17, 15),
      InisTarih: new Date(2022, 6, 13, 18, 45),
      KHavaalani: "İstanbul Anadolu - SAW",
      IHavaalani: "Ordu - Giresun Havaalanı",
      Fiyat: 823.98,
      KoltukSayisi: 236,
      Bagaj: 15,
    },
  ];
////////aşağısı sefer karşılaştırma
  ///
  const [gecerliSeferler, setGecerliSeferler] = useState(null); //bu state sayesinde aşağıda foreach ile
  // listedede istediğimiz sefer var mı diye aradıktan sonra seferleri saklayabileceğiz

  seferler.forEach((Havalimani) => {
    if (Havalimani.KHavaalani === props.yolculukRota.nereden) {
      if (Havalimani.IHavaalani === props.yolculukRota.nereye) {
        if (Havalimani.KalkisTarih.getDate() === props.yolculukRota.neZaman) {
          console.log("sefer var");
        } else {console.log("sefer yok");
        console.log(Havalimani.KalkisTarih.getDay())
        //console.log(Havalimani.Marka)
      }
      } else console.log("sefer yok");
    }
  });
  ///console.log("sefer var");
////////yukarısı sefer karşılaştırma


  console.log(props); /*
  let sda=seferler[0].KalkisTarih
  let abc =sda.getMinutes()
  console.log(abc)*/
  const seferKayit = {
    //Burada uçuta seçilen tarih kaydedilio ki
    //sonradan uçuş kartlarını oşultururken işimize yarasın
    Nereden: props.yolculukRota.nereden,
    Nereye: props.yolculukRota.nereye,
    NeZaman: props.yolculukRota.neZaman,
  };

  // burada karşılaştırma yap seçilen adresler ile eğer
  // buradaki seferler uyuşuyorsa UcusKart a seçilen seferleri
  // değil listedeki adı gönder.
  //Hatta uçuşlardaki bütün bilgileri bile olabilir duruma bağlı
  // kontrol et
  return (
    <div>
      
      <UcusKart yolculukRota={seferKayit} ucusSeferleri={seferler}></UcusKart>
    </div>
  );
};

export default Ucuslar;
