import { TextField } from "@mui/material";
import { useState } from "react";
import { seferler } from "../Seferler";
import Biletler from "./Biletler";
import "./Yonetici.css";
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

  const satilanBiletler = [];
  props.biletler.map((bilet) => satilanBiletler.push(<Biletler bilet={bilet}/>));
  
  
  return (
    <div className="yonetici">
      <div className="yonetici-giris">
        <div>
          {/* <h1>{ucus?.KHavaalani} - {ucus?.IHavaalani}</h1>
          <h1>{props.secilenUcus?.secilenKoltuk}</h1> */}
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

          <input className="yonetici-sifre" type="password"></input>
        </div>
        <button className="yonetici-button">Giriş Yap</button>
      </div>
      <div className="kart">{satilanBiletler}</div>
      {/* <Biletler biletler={props.biletler} setBiletler={props.setBiletler} /> */}
    </div>
  );
};
export default Yonetici;
