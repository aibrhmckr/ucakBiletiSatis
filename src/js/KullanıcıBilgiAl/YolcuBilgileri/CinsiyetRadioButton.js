import { useState } from "react";

const CinsiyetRadioButton = (props) => {
//radiobutton check kontrol
let type = document.getElementsByName("cinsiyet");
const[cinsiyetim,setCinsiyetim]=useState(null)
const cinsiyetControl=()=>{
  if(type[0].checked){
    //console.log(cinsiyetim)
    setCinsiyetim("Erkek")
    
  }
  else if(type[1].checked){
    //console.log(cinsiyetim)
    setCinsiyetim("Kadın")
  }
}
//props.cinsiyetNe=cinsiyetim;
console.log(cinsiyetim)
  return (
    <div>
      <form>
        <input type="radio" id="erkek" name="cinsiyet" value="erkek" onClick={cinsiyetControl}/>
        <label htmlFor="erkek">Erkek</label>
        <br/>
        <input type="radio" id="kadin" name="cinsiyet" value="kadin" onClick={cinsiyetControl}/>
        <label htmlFor="kadın">Kadın</label>
      </form>
      
    </div>
  );
};
export default CinsiyetRadioButton;
