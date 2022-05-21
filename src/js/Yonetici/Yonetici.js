import { TextField } from "@mui/material";
import { useState } from "react";
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

  return (
    <div className="yonetici">
      <div className="yonetici-giris">
        <div className="yonetici-kAdi">
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
