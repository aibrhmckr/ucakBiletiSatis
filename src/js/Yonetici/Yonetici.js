import { TextField } from "@mui/material";
import { useState } from "react";
import { seferler } from "../Seferler";
import Biletler from "./Biletler";
import "./Yonetici.css";
import { yoneticiler } from "./Yoneticiler";
const Yonetici = (props) => {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const kullaniciAdiKaydet = (event) => {
    setKullaniciAdi(event.target.value);
  };

  const [sifre, setSifre] = useState("");
  const sifreKaydet = (event) => {
    setSifre(event.target.value);
  };

  const ucus = seferler.find((x) => x.id === props.secilenUcus?.ucusID);

  /*const satilanBiletler = [];
  props.biletler.map((bilet) =>
    satilanBiletler.push(<Biletler bilet={bilet} />)
  );*/
/////////////////////
  const satilanBiletler = [];
  const yoneticiGirisiYap = () => {
    //console.log("tıklandı");
    yoneticiler.forEach((yonetici) => {
      //console.log("gezildi");
      if (yonetici.kAdi === kullaniciAdi) {
        if (yonetici.sifre === sifre) {
          props.setYoneticiGiris(true);
          //console.log("giriş yapildi");
        }
      }
    });
  };
  if (props.yoneticiGiris === true) {
    props.biletler.map((bilet) =>
      satilanBiletler.push(<Biletler bilet={bilet} />)
    );
  }
//////////////
  return (
    <div className="yonetici">
      <div className="yonetici-giris">
        <div>
          <b>
            <div>Kullanıcı Adı</div>
          </b>
          <TextField
            className="yonetici-kAdi"
            onChange={kullaniciAdiKaydet}
          ></TextField>
        </div>
        <div>
          <b>
            <div>Şifre</div>
          </b>
          <input className="yonetici-sifre" type="password" onChange={sifreKaydet}></input>
        </div>
        <button className="yonetici-button" onClick={yoneticiGirisiYap}>
          Giriş Yap
        </button>
      </div>
      <div className="kart">{satilanBiletler}</div>
    </div>
  );
};
export default Yonetici;
