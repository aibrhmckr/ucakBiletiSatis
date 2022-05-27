import Bilet from "./Bilet";
import "./Biletler.css"
const Biletler = (props) => {
    //console.log(props.biletler)
    return <div className="bilet-liste">
        <Bilet bilet={props.bilet}></Bilet>
    </div>
};
export default Biletler;
