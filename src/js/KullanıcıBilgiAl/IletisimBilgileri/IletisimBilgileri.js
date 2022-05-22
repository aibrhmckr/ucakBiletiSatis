import { TextField } from "@mui/material";
import { useEffect,useState } from "react";
import "../../../css/iletisim.css";

import ReactPhone from "./ReactPhone";

const IletisimBilgileri = (props) => {
  const [eposta, setEposta] = useState(null);
  const epostaKaydet = (event) => {
    setEposta(event.target.value);
  };

  const [telefon,setTelefon]=useState(null);
  const telefonKaydet=(event)=>{
    setTelefon(event.value)
  }
  //console.log(eposta,telefon)
  //
  useEffect(() => {
    props.setIletisim({eposta:eposta,telefon:telefon})
  
  }, [eposta,telefon])
  
  return (
    <div className="bruh">
      <div>
        <h3>İletişim Bilgileri</h3>
        <div className="iletisim-bilgileri">
          <div className="eposta">
            <b>
              <div>E-posta adresiniz</div>
            </b>
            <TextField
              size="small"
              variant="outlined"
              className="eposta-field"
              onChange={epostaKaydet}
            />
          </div>
          <div className="cep-telefonu">
            <b>
              <div>Cep Telefonunuz</div>
            </b>
            <ReactPhone telNo={telefonKaydet}></ReactPhone>
          </div>
        </div>

        <small>
          *Uçuş ve bilet bilgilerinizi e-posta ve ücretsiz SMS yoluyla
          ileteceğiz.
        </small>
      </div>
    </div>
  );
};
export default IletisimBilgileri;
