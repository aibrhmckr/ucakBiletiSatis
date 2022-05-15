import { Card, TextField } from "@mui/material";
import { useState } from "react";

import ReactPhone from "./ReactPhone";

const IletisimBilgileri = (props) => {

  const[eposta,setEposta]=useState(null);
  
  return (
    <Card variant="outlined">
      <div>
          <h3>İletişim Bilgileri</h3>
        <div>
          <div>E-posta adresiniz</div>
          <TextField size="small" variant="outlined" />
        </div>
        <div>
          <div>Cep Telefonunuz</div>
          <ReactPhone></ReactPhone>
        </div>
        Uçuş ve bilet bilgilerinizi e-posta ve ücretsiz SMS yoluyla ileteceğiz.
      </div>
    </Card>
  );
};
export default IletisimBilgileri;
