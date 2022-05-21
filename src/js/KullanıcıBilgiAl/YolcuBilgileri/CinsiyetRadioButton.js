import { useState } from "react";

const CinsiyetRadioButton = (props) => {
//radiobutton check kontrol
let type = document.getElementsByName("cinsiyet");
const[cinsiyetim,setCinsiyetim]=useState(null)
const cinsiyetControl=()=>{
  if(type[0].checked){
    //console.log(cinsiyetim)
    setCinsiyetim("Erkek")
    props.cinsiyetDegistir(cinsiyetim)
  }
  else if(type[1].checked){
    //console.log(cinsiyetim)
    setCinsiyetim("Kadın")
    props.cinsiyetDegistir(cinsiyetim)

  }
}



//props.cinsiyetNe=cinsiyetim;
console.log(cinsiyetim)
  return (
    //render sayesinde normalde sadece 1 komponent dönerken
    //burada biz birden çok şey döndürebilir
    <div>
      <form>
        <input type="radio" id="erkek" name="cinsiyet" value="erkek" onClick={cinsiyetControl}/>{/*()=>props.cinsiyetDegistir("Erkek") */}
        <label htmlFor="erkek">Erkek</label>
        <br/>
        <input type="radio" id="kadin" name="cinsiyet" value="kadin" onClick={cinsiyetControl}/>
        <label htmlFor="kadın">Kadın</label>
      </form>
      
    </div>
  )
};
export default CinsiyetRadioButton;
