import Bilet from "./Bilet";

const Biletler = (props) => {
 // console.log("----------",props.secilenUcus, props.iletisim, props.yolcuBilgi);
return <div>
    <Bilet secilenUcus={props.secilenUcus} iletisim={props.iletisim} yolcuBilgi={props.yolcuBilgi}/>
</div>
};
export default Biletler;
