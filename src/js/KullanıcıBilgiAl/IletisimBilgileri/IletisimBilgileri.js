import { Card, TextField } from "@mui/material";
import { useState } from "react";
import "../../../css/iletisim.css";

import ReactPhone from "./ReactPhone";

const IletisimBilgileri = (props) => {
  const [eposta, setEposta] = useState(null);

  return (
    <div className="bruh">
      <div>
        <h3>İletişim Bilgileri</h3>
        <div className="iletisim-bilgileri">
          <div>
            <b>
              <div>E-posta adresiniz</div>
            </b>
            <TextField size="small" variant="outlined" />
          </div>
          <div className="cep-telefonu">
            <b>
              <div>Cep Telefonunuz</div>
            </b>
            <ReactPhone></ReactPhone>
          </div>
        </div>

        <small>
          Uçuş ve bilet bilgilerinizi e-posta ve ücretsiz SMS yoluyla
          ileteceğiz.
        </small>
      </div>
    </div>
  );
};
export default IletisimBilgileri;
