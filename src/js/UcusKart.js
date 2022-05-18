import { Card, Dialog } from "@mui/material";
import Koltuklar from "./Ucak/koltuklar"
const UcusKart = (props) => {
  //console.log(props.nereden)
  //console.log(props.yolculukRota.nereden);
const kartlar=[];
props.ucusSeferleri.map((sefer)=>kartlar.push(<Kart yolculukRota={sefer}/>))

  return (
    <div>
      {kartlar}
    </div>
    
  );
};

function Kart(props){
return(
  <Card>
      <div>
        <div>
          {props.yolculukRota.KHavaalani}
          &#8594; {props.yolculukRota.IHavaalani}
        </div>
        <div>19:30 &#8594; 21:05</div>
      </div>
      <Koltuklar/>
    </Card>
);
};
export default UcusKart;
