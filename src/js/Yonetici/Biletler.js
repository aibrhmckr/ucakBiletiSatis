import Bilet from "./Bilet";
import "./Biletler.css"
const Biletler = (props) => {
    //console.log(props.biletler)
    return <div className="bilet-liste">
        <Bilet bilet={props.bilet} 
        biletler={props.biletler}
        setBiletler={props.setBiletler}
        ></Bilet>
    </div>
};
export default Biletler;
