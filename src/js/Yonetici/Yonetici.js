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

  const yoneticiGirisiYap = () => {
    yoneticiler.forEach((yonetici) => {
      if (yonetici.kAdi === kullaniciAdi) {
        if (yonetici.sifre === sifre) {
          props.setYoneticiGiris(true);
        }
      }
    }); 
  };

  const yoneticiCikisYap = () => {
    props.setYoneticiGiris(false);
  };
  const satilanBiletler = [];
  if (props.yoneticiGiris === true) {
    props.biletler.map((bilet) =>
      satilanBiletler.push(<Biletler bilet={bilet} 
        biletler={props.biletler}
        setBiletler={props.setBiletler}
        />)
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
          <input className="yonetici-kAdi" onChange={kullaniciAdiKaydet} />
        </div>
        <div>
          <b>
            <div>Şifre</div>
          </b>
          <input
            className="yonetici-sifre"
            type="password"
            onChange={sifreKaydet}
          ></input>
        </div>
        {props.yoneticiGiris === false ? (
          <button className="yonetici-button" 
          onClick={yoneticiGirisiYap}>
            Giriş Yap
          </button>
        ) : (
          <button className="yonetici-button" 
          onClick={yoneticiCikisYap}>
            Çıkış Yap 
          </button>
        )}
      </div>
      <div>{satilanBiletler}</div>
    </div>
  );
};
export default Yonetici;
