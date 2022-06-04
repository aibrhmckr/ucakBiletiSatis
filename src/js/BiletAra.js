import "../css/BiletAra.css";
import React, { useState } from "react";
import Select from "react-select";
import Ucuslar from "./Ucuslar";
import { havaalanlari } from "./Havaalanlari";

const BiletAra = (props) => {
  // kaynak=> https://www.npmjs.com/package/react-select , https://react-select.com/home
  //https://mui.com/material-ui

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
  };

  const seyehat = {
    nereden: havalimani,
    nereye: inisHavalimani,
    neZaman: tarih,
  };
  const [ucuslarEkrani, setUcuslarEkrani] = useState(false);
  const ucuslarEkraniGoster = (event) => {
    setUcuslarEkrani(true);
    //console.log(ucuslarEkrani.toString());
  };

  return (
    <div className="bilet-ara">
      <form onSubmit={submitHandler}>
        <div className="rota">
          <div>
            <b>
              <label>Nereden</label>
            </b>
            <Select
              className="yer"
              onChange={havalimanisec}
              options={havaalanlari}
            />
          </div>

          <div>
            <b>
              <label>Nereye</label>
            </b>
            <Select
              className="yer"
              onChange={inisHavalimaniSec}
              options={havaalanlari}
            />
          </div>
        </div>
        <div className="tarih-bilet">
          <div className="tarih-takvim">
            <b>
              <label>Tarih</label>
            </b>
            <input
              className="tarih"
              onChange={tarihSec}
              type="date"
              min="2022-05-06"
              max="2025-12-31"
              defaultValue={"2022-06-01"}
            ></input>
          </div>

          <button
            className="bilet-bul"
            type="submit"
            onClick={ucuslarEkraniGoster}
            role="button"
          >
            
            Uçak Bileti Bul &#8594;
          </button>
        </div>
      </form>

      {ucuslarEkrani === true ? (
        <Ucuslar
          yolculukRota={seyehat}
          secilenUcus={props.secilenUcus}
          setSecilenUcus={props.setSecilenUcus}
          biletler={props.biletler}
        ></Ucuslar>
      ) : (
        <form> Sefer arayın </form>
      )}
    </div>
  );
};
export default BiletAra;
