import { Card } from "@mui/material";
const UcusKart = (props) => {
  //console.log(props.nereden)
  //console.log(props.yolculukRota.nereden);

  return (
    <Card sx={{margin:0.3, backgroundColor: "lightgreen",border_radius: 35}}>
      <div>
        <div>
          {props.yolculukRota.Nereden}
          &#8594; {props.yolculukRota.Nereye}
        </div>
        <div>19:30 &#8594; 21:05</div>
      </div>
      <button type="submit" onClick={() => {}}>
        Seç
      </button>
    </Card>
  );
};
export default UcusKart;
