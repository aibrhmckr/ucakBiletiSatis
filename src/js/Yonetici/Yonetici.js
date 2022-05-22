import { TextField } from "@mui/material";
import { useState } from "react";
import { seferler } from "../Seferler";
import "./Yonetici.css"
const Yonetici = (props) => {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const kullaniciAdiKaydet = (event) => {
    setKullaniciAdi(event.target.value);
  };

  const [sifre, setSifre] = useState("");
  const sifreKaydet = (event) => {
    setSifre(event.target.value);
  };

  const ucus=seferler.find((x) => x.id === props.secilenUcus?.ucusID)
  return (
    <div className="yonetici">
      <div className="yonetici-giris">
        <div className="yonetici-kAdi">
          <h1>{ucus?.KHavaalani} - {ucus?.IHavaalani}</h1>
          <h1>{props.secilenUcus?.secilenKoltuk}</h1>
          <b>
            <div>Kullanıcı Adı</div>
          </b>
          <TextField onChange={kullaniciAdiKaydet}></TextField>
        </div>
        <div className="yonetici-sifre">
          <b>
            <div>Şifre</div>
          </b>
          <TextField></TextField>
        </div>
        <button>Giriş Yap</button>
      </div>
    </div>
  );
};
export default Yonetici;
