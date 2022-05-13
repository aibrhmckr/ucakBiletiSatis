import "../css/BiletAra.css";
import React, { useState } from "react";
import Select from "react-select";
import Ucuslar from "./Ucuslar";
import { render } from "@testing-library/react";
import { Button, Card } from "@mui/material";

const BiletAra = (props) => {
  // kaynak=> https://www.npmjs.com/package/react-select , https://react-select.com/home
  const havaalanlari = [
    { value: "Adana Havalimanı", label: "Adana Havalimanı" },
    { value: "Adıyaman Havalimanı", label: "Adıyaman Havalimanı" },
    {
      value: "Ağrı Ahmedi-i Hani Havalimanı",
      label: "Ağrı Ahmedi-i Hani Havalimanı",
    },
    {
      value: "Amasya Merzifon Havalimanı",
      label: "Amasya Merzifon Havalimanı",
    },
    {
      value: "Ankara Esenboğa Havalimanı",
      label: "Ankara Esenboğa Havalimanı",
    },
    { value: "Antalya Havalimanı", label: "Antalya Havalimanı" },
    {
      value: "Antalya Gazipaşa - Alanya Havalimanı",
      label: "Antalya Gazipaşa - Alanya Havalimanı",
    },
    { value: "Aydın Çaldır Havalimanı", label: "Aydın Çaldır Havalimanı" },
    {
      value: "Balıkesir Koca Seyit Havalimanı",
      label: "Balıkesir Koca Seyit Havalimanı",
    },
    {
      value: "Balıkesir Merkez Havalimanı",
      label: "Balıkesir Merkez Havalimanı",
    },
    { value: "Batman Havalimanı", label: "Batman Havalimanı" },
    { value: "Bingöl Havalimanı", label: "Bingöl Havalimanı" },
    {
      value: "Bursa Yenişehir Havalimanı",
      label: "Bursa Yenişehir Havalimanı",
    },
    { value: "Çanakkale Havalimanı", label: "Çanakkale Havalimanı" },
    {
      value: "Çanakkale GökçeAda Havalimanı",
      label: "Çanakkale GökçeAda Havalimanı",
    },
    { value: "Denizli Çardak Havalimanı", label: "Denizli Çardak Havalimanı" },
    { value: "Diyarbakır Havalimanı", label: "Diyarbakır Havalimanı" },
    { value: "Elazığ Havalimanı", label: "Elazığ Havalimanı" },
    { value: "Erzincan Havalimanı", label: "Erzincan Havalimanı" },
    { value: "Erzurum Havalimanı", label: "Erzurum Havalimanı" },
    {
      value: "Eskişehir Hasan Polatkan Havalimanı",
      label: "Eskişehir Hasan Polatkan Havalimanı",
    },
    { value: "Gaziantep Havalimanı", label: "Gaziantep Havalimanı" },
    {
      value: "Hakkari Yüksekova Selahaddin Eyyubi Havalimanı",
      label: "Hakkari Yüksekova Selahaddin Eyyubi Havalimanı",
    },
    { value: "Hatay Havalimanı", label: "Hatay Havalimanı" },
    {
      value: "Iğdır Şehit Bülent Ayydın Havalimanı",
      label: "Iğdır Şehit Bülent Ayydın Havalimanı",
    },
    {
      value: "Isparta Süleyman Demirel Havalimanı",
      label: "Isparta Süleyman Demirel Havalimanı",
    },
    { value: "İstanbul Havalimanı", label: "İstanbul Havalimanı" },
    {
      value: "İstanbul Sabiha Gökçen Havalimanı",
      label: "İstanbul Sabiha Gökçen Havalimanı",
    },
    {
      value: "İzmir Adnan Menderes Havalimanı",
      label: "İzmir Adnan Menderes Havalimanı",
    },
    { value: "Kahramanmaraş Havalimanı", label: "Kahramanmaraş Havalimanı" },
    { value: "Kars Harakani Havalimanı", label: "Kars Harakani Havalimanı" },
    { value: "Kastamonu Havalimanı", label: "Kastamonu Havalimanı" },
    { value: "Kayseri Havalimanı", label: "Kayseri Havalimanı" },
    { value: "Konya Havalimanı", label: "Konya Havalimanı" },
    { value: "Kütahya Zafer Havalimanı", label: "Kütahya Zafer Havalimanı" },
    { value: "Malatya Havalimanı", label: "Malatya Havalimanı" },
    { value: "Mardin Havalimanı", label: "Mardin Havalimanı" },
    { value: "Muğla Daşaman Havalimanı", label: "Muğla Daşaman Havalimanı" },
    {
      value: "Muğla Milas - Bodurm Havalimanı",
      label: "Muğla Milas - Bodurm Havalimanı",
    },
    { value: "Muş Havalimanı", label: "Muş Havalimanı" },
    { value: "Kapadokya Havalimanı", label: "Kapadokya Havalimanı" },
    { value: "Ordu - Giresun Havalimanı", label: "Ordu - Giresun Havalimanı" },
    {
      value: "Samsun Çarşamba Havalimanı",
      label: "Samsun Çarşamba Havalimanı",
    },
    { value: "Siirt Havalimanı", label: "Siirt Havalimanı" },
    { value: "Sinop Havalimanı", label: "Sinop Havalimanı" },
    {
      value: "Sivas Nuri Demirağ Havalimanı",
      label: "Sivas Nuri Demirağ Havalimanı",
    },
    { value: "Şanlıurfa Gap Havalimanı", label: "Şanlıurfa Gap Havalimanı" },
    {
      value: "Şırnak Şerafettin Elçi Havalimanı",
      label: "Şırnak Şerafettin Elçi Havalimanı",
    },
    { value: "Tekirdağ Çorlu Havalimanı", label: "Tekirdağ Çorlu Havalimanı" },
    { value: "Tokat Havalimanı", label: "Tokat Havalimanı" },
    { value: "Trabzon Havalimanı", label: "Trabzon Havalimanı" },
    { value: "Uşak Havalimanı", label: "Uşak Havalimanı" },
    {
      value: "Van Ferit Melen Havalimanı",
      label: "Van Ferit Melen Havalimanı",
    },
    {
      value: "Zonguldak Çaycuma Havalimanı",
      label: "Zonguldak Çaycuma Havalimanı",
    },
  ];
  //
  const [havalimani, sethavalimani] = useState(null);

  const havalimanisec = (event) => {
    sethavalimani(event.value);
  };

  const [inisHavalimani, setIHavalimani] = useState(null);
  const inisHavalimaniSec = (event) => {
    setIHavalimani(event.value);
  };

  const [tarih, setTarih] = useState(null);
  const tarihSec = (event) => {
    setTarih(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onSaveExpenseData(expenseData);
  };

  const seyehat = {
    nereden: havalimani,
    nereye: inisHavalimani,
    neZaman: tarih,
  };

  const [ucuslarEkrani, setUcuslarEkrani] = useState(false);
  const ucuslarEkraniGoster = (event) => {
    setUcuslarEkrani(true);
    console.log(ucuslarEkrani.toString());
  };

  return (
    <Card sx={{width:750,backgroundColor:'white'}}>
      <form onSubmit={submitHandler}>
        <label>Nereden</label>
        <Select onChange={havalimanisec} options={havaalanlari} />
        <label>Nereye</label>
        <Select onChange={inisHavalimaniSec} options={havaalanlari} />
        <label>Tarih</label>
        <input
          onChange={tarihSec}
          type="date"
          min="2022-05-06"
          max="2025-12-31"
        ></input>
        <button type="submit" onClick={ucuslarEkraniGoster}>
          Uçak Bileti Bul
        </button>
      </form>
      <Ucuslar yolculukRota={seyehat}></Ucuslar>
    </Card>
  );
};
export default BiletAra;
/*<label>
Havalimanı: {havalimani} - {inisHavalimani} - {tarih}
</label>
*/
/*
<Button
          variant="contained"
          onClick={() => {
            console.log("Seyehat seçildi");
          }}
          disabled={Adres1SeciliMi}
        >
          Uçak Bileti Bul
        </Button>
*/
