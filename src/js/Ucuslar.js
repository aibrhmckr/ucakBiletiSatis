import UcusKart from "./UcusKart";

const Ucuslar = (props) => {
  const seferler = [
    //13 Haziran Giresun
    {
      Marka: "Pegasus Airlines",
      KalkisTarih: new Date(2022, 6, 13, 6, 15),
      InisTarih: new Date(2022, 6, 13, 7, 50),
      KHavaalani: "İstanbul Anadolu - SAW",
      IHavaalani: "Ordu - Giresun Havaalanı",
      Fiyat: 639.98,
      KoltukSayisi: 258,
      Bagaj: 15,
    },
    {
      Marka: "Pegasus Airlines",
      KalkisTarih: new Date(2022, 6, 13, 19, 30),
      InisTarih: new Date(2022, 6, 13, 21, 5),
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
    ///////
  ];
  console.log(props);/*
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
