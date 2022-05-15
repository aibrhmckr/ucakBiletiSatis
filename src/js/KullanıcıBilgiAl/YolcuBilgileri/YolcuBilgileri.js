import { Card, TextField } from "@mui/material";
import { useState } from "react";
import CinsiyetRadioButton from "./CinsiyetRadioButton";
import YolcuDogumTarih from "./YolcuDogumTarih";

const YolcuBilgileri = () => {
  const [ad, setAd] = useState(null);
  const adKaydet = (event) => {
    setAd(event.target.value);
  };

  const [soyad, setSoyad] = useState(null);
  const soyadKaydet = (event) => {
    setSoyad(event.target.value);
  };

  const [tcKimilk, setTcKimlik] = useState(null);
  const TCKaydet = (event) => {
    setTcKimlik(event.target.value);
  };

  const [TcVatandsi, setTcVatandasi] = useState(false);
  const vatandaslikAyarla = (event) => {
    setTcVatandasi(true);
  }; /*
    Not tc kimlik alanını devre dışı bırakmak için 
    bu state oluşturuldu ancak checkboxa
    tekrar tıklanıldığında input 
    tekrar devreye girmiyor, düzelt
  */

  const [cinsiyetSec, setCinsiyetSec] = useState(false);
  const cinsiyetSecim=()=>{
    setCinsiyetSec(true);
  }

  console.log(ad, soyad, tcKimilk);
  return (
    <Card variant="outlined">
      <h3>Yolcu Bilgileri</h3>
      <div>
        <div>Adınız</div>
        <TextField size="small" variant="outlined" onChange={adKaydet} />
      </div>
      <div>
        <div>Soyadınız</div>
        <TextField size="small" variant="outlined" onChange={soyadKaydet} />
      </div>
      <YolcuDogumTarih></YolcuDogumTarih>
      {/* alt Kimlik Numarası alınan bölüm*/}
      <div>
        <div>TC Kimlik No</div>
        <input
          disabled={TcVatandsi}
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength="11"
          onChange={TCKaydet}
        ></input>
        <div>
          <input
            onChange={vatandaslikAyarla}
            type="checkbox"
            id="TtcAlan1"
            name="TtcAlan1"
          ></input>
          <label htmlFor="TcAlan1"> T.C. Vatandaşı Değilim</label>
        </div>
      </div>
      {/* üst */}
      <CinsiyetRadioButton></CinsiyetRadioButton>
    </Card>
  );
};
export default YolcuBilgileri;
//Kütüphaneden çıkışta ömeri ara
