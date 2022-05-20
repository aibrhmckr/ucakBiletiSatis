import { TextField } from "@mui/material";
import { useState } from "react";
import CinsiyetRadioButton from "./CinsiyetRadioButton";
import "./YolcuBilgileri.css";
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

 /* const [cinsiyetSec, setCinsiyetSec] = useState(false);
  const cinsiyetSecim = () => {
    setCinsiyetSec(true);
  };*/


  const [dogumT, setDogumT] = useState(null);
  const dogumTarihiKaydet = (event) => {
    setDogumT(event.target.value);
  };

  console.log(ad, soyad, tcKimilk, dogumT);
  return (
    <div className="yolcu-bilgileri">
      <h3>Yolcu Bilgileri</h3>
      <div className="ad-soyad">
        <div className="ad">
          <b>
            <div>Adınız</div>
          </b>
          <TextField
            size="small"
            variant="outlined"
            onChange={adKaydet}
            className="kisi__ad-soyad"
          />
        </div>
        <div className="soyad">
          <b>
            <div>Soyadınız</div>
          </b>
          <TextField
            size="small"
            variant="outlined"
            onChange={soyadKaydet}
            className="kisi__ad-soyad"
          />
        </div>
      </div>

      <div className="dogum-kimlik">
        {/* alt Kimlik Numarası alınan bölüm*/}
        <div>
          <b>
            <div>Doğum Tarihi</div>
          </b>
          <input
            type="date"
            className="tarih"
            onChange={dogumTarihiKaydet}
            defaultValue="2000-07-09"
          ></input>
        </div>

        <div>
          <b>
            <div>TC Kimlik No</div>
          </b>
          <input
            className="tc-kimlik"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            maxLength="11"
            onChange={TCKaydet}
          ></input>
        </div>
        {/* üst */}
      </div>

      <b>
        <div>Cinsiyet</div>
      </b>
      <CinsiyetRadioButton ></CinsiyetRadioButton>
    </div>
  );
};
export default YolcuBilgileri;
//Kütüphaneden çıkışta ömeri ara
