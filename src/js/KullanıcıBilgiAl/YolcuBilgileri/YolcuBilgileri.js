import { Card, Checkbox, TextField } from "@mui/material";
import { DatePicker } from "@syncfusion/ej2-react-calendars";
import CinsiyetRadioButton from "./CinsiyetRadioButton";
import YolcuDogumTarih from "./YolcuDogumTarih";

const YolcuBilgileri = () => {
  return (
    <Card variant="outlined">
      <h3>Yolcu Bilgileri</h3>
      <div>
        <div>Adınız</div>
        <TextField size="small" variant="outlined" />
      </div>
      <div>
        <div>Soyadınız</div>
        <TextField size="small"variant="outlined" />
      </div>
      <YolcuDogumTarih></YolcuDogumTarih>
      {/* alt Kimlik Numarası alınan bölüm*/}
      <div>
        <div>TC Kimlik No</div>
        <input
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength="11"
        ></input>
        <div>
          <input type="checkbox" id="TtcAlan1" name="TtcAlan1"></input>
          <label htmlFor="TcAlan1"> T.C. Vatandaşı Değilim</label>
        </div>
      </div>
      {/* üst */}

      {/* alt */}
        <CinsiyetRadioButton></CinsiyetRadioButton>
      {/* üst */}
    </Card>
  );
};
export default YolcuBilgileri;
