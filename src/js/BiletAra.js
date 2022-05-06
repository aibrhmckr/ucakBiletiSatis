import "../css/BiletAra.css";
import React,{ useState } from "react";
import Select from 'react-select';
const BiletAra=(props)=>{
    // kaynak=> https://www.npmjs.com/package/react-select , https://react-select.com/home
    const havaalanlari=[
        {value:"Adana Havalimanı",label:"Adana Havalimanı"},
        {value:"Ankara Esenboğa Havalimanı",label:"Ankara Esenboğa Havalimanı"},
        {value:"Antalya Havalimanı",label:"Antalya Havalimanı"},
        {value:"Antalya Gazipaşa - Alanya Havalimanı",label:"Antalya Gazipaşa - Alanya Havalimanı"},
        {value:"Balıkesir Koca Seyit Havalimanı",label:"Balıkesir Koca Seyit Havalimanı"},
        {value:"Bursa Yenişehir Havalimanı",label:"Bursa Yenişehir Havalimanı"},
        {value:"Çanakkale Havalimanı",label:"Çanakkale Havalimanı"},
        {value:"Denizli Çardak Havalimanı",label:"Denizli Çardak Havalimanı"},
        {value:"Diyarbakır Havalimanı",label:"Diyarbakır Havalimanı"},
        {value:"Elazığ Havalimanı",label:"Elazığ Havalimanı"},
        {value:"Erzurum Havalimanı",label:"Erzurum Havalimanı"},
        {value:"Eskişehir Hasan Polatkan Havalimanı",label:"Eskişehir Hasan Polatkan Havalimanı"},
        {value:"Gaziantep Havalimanı",label:"Gaziantep Havalimanı"},
        {value:"Hatay Havalimanı",label:"Hatay Havalimanı"},
        {value:"Isparta Süleyman Demirel Havalimanı",label:"Isparta Süleyman Demirel Havalimanı"},
        {value:"İstanbul Havalimanı",label:"İstanbul Havalimanı"},
        {value:"İstanbul Sabiha Gökçen Havalimanı",label:"İstanbul Sabiha Gökçen Havalimanı"},
        {value:"İzmir Adnan Menderes Havalimanı",label:"İzmir Adnan Menderes Havalimanı"},
        {value:"Kars Harakani Havalimanı",label:"Kars Harakani Havalimanı"},
        {value:"Kayseri Havalimanı",label:"Kayseri Havalimanı"},
        {value:"Konya Havalimanı",label:"Konya Havalimanı"},
        {value:"Kütahya Zafer Havalimanı",label:"Kütahya Zafer Havalimanı"},
        {value:"Malatya Havalimanı",label:"Malatya Havalimanı"},
        {value:"Muğla Daşaman Havalimanı",label:"Muğla Daşaman Havalimanı"},
        {value:"Muğla Milas - Bodurm Havalimanı",label:"Muğla Milas - Bodurm Havalimanı"},
        {value:"Kapadokya Havalimanı",label:"Kapadokya Havalimanı"},
        {value:"Ordu - Giresun Havalimanı",label:"Ordu - Giresun Havalimanı"},
        {value:"Samsun Çarşamba Havalimanı",label:"Samsun Çarşamba Havalimanı"},
        {value:"Sinop Havalimanı",label:"Sinop Havalimanı"},
        {value:"Sivas Nuri Demirağ Havalimanı",label:"Sivas Nuri Demirağ Havalimanı"},
        {value:"Şanlıurfa Gap Havalimanı",label:"Şanlıurfa Gap Havalimanı"},
        {value:"Tekirdağ Çorlu Havalimanı",label:"Tekirdağ Çorlu Havalimanı"},
        {value:"Trabzon Havalimanı",label:"Trabzon Havalimanı"},
        {value:"Uşak Havalimanı",label:"Uşak Havalimanı"},
        {value:"Van Ferit Melen Havalimanı",label:"Van Ferit Melen Havalimanı"},
        {value:"Zonguldak Çaycuma Havalimanı",label:"Zonguldak Çaycuma Havalimanı"},
        {value:"Adıyaman Havalimanı",label:"Adıyaman Havalimanı"},
        {value:"Ağrı Ahmedi-i Hani Havalimanı",label:"Ağrı Ahmedi-i Hani Havalimanı"},
        {value:"Amasya Merzifon Havalimanı",label:"Amasya Merzifon Havalimanı"},
        {value:"Aydın Çaldır Havalimanı",label:"Aydın Çaldır Havalimanı"},
        {value:"Balıkesir Merkez Havalimanı",label:"Balıkesir Merkez Havalimanı"},
        {value:"Batman Havalimanı",label:"Batman Havalimanı"},
        {value:"Bingöl Havalimanı",label:"Bingöl Havalimanı"},
        {value:"Bursa Yenişehir Havalimanı",label:"Bursa Yenişehir Havalimanı"},
        {value:"Çanakkale GökçeAda Havalimanı",label:"Çanakkale GökçeAda Havalimanı"},
        {value:"Erzincan Havalimanı",label:"Erzincan Havalimanı"},
        {value:"Hakkari Yüksekova Selahaddin Eyyubi Havalimanı",label:"Hakkari Yüksekova Selahaddin Eyyubi Havalimanı"},
        {value:"Iğdır Şehit Bülent Ayydın Havalimanı",label:"Iğdır Şehit Bülent Ayydın Havalimanı"},
        {value:"Kahramanmaraş Havalimanı",label:"Kahramanmaraş Havalimanı"},
        {value:"Kastamonu Havalimanı",label:"Kastamonu Havalimanı"},
        {value:"Mardin Havalimanı",label:"Mardin Havalimanı"},
        {value:"Muş Havalimanı",label:"Muş Havalimanı"},
        {value:"Siirt Havalimanı",label:"Siirt Havalimanı"},
        {value:"Şırnak Şerafettin Elçi Havalimanı",label:"Şırnak Şerafettin Elçi Havalimanı"},
        {value:"Tokat Havalimanı",label:"Tokat Havalimanı"}
        
      ]
    //
      const[havalimani,sethavalimani]=useState(null);
      //console.log(havalimani)

      const havalimanisec=(event)=>{
        sethavalimani(event.value);          
      }
      const[inisHavalimani,setIHavalimani]=useState(null);
      const inisHavalimaniSec=(event)=>{
        setIHavalimani(event.value);
        }

        //state oluştur
      const tariiih=(event)=>{
            console.log(event.target.value);
        }
    return <div>
        <label>Nereden</label>
        <Select onChange={havalimanisec} options={havaalanlari}/>
        <label>Nereye</label>
        <Select onChange={inisHavalimaniSec} options={havaalanlari}/>
        <label>Tarih</label>
          <input
            onChange={tariiih}
            type="date"
            min="2022-05-06"
            max="2025-12-31"
          ></input>
        <button onClick={()=>{console.log(havalimani,inisHavalimani)}}>Uçak Bileti Bul</button>
        <label>Havalimanı: {havalimani}</label>

    </div>
}
export default BiletAra;
/*
<label>Nereden </label>
        <select>
            <option value={"Adana Havalimanı"}>Adana Havalimanı</option>
            <option value="Adıyaman Havalimanı">Adıyaman Havalimanı</option>
            <option value="Ağrı Ahmedi-i Hani Havalimanı">Ağrı Ahmedi-i Hani Havalimanı</option>
            <option value="Amasya Merzifon Havalimanı">Amasya Merzifon Havalimanı</option>
            <option value="Ankara Esenboğa Havalimanı">Ankara Esenboğa Havalimanı</option>
            <option value="Antalya Havalimanı">Antalya Havalimanı</option>
            <option value="Antalya Gazipaşa - Alanya Havalimanı">Antalya Gazipaşa - Alanya Havalimanı</option>
            <option value="Aydın Çaldır Havalimanı">Aydın Çaldır Havalimanı</option>
            <option value="Balıkesir Koca Seyit Havalimanı">Balıkesir Koca Seyit Havalimanı</option>
            <option value="Balıkesir Merkez Havalimanı">Balıkesir Merkez Havalimanı</option>
            <option value="Batman Havalimanı">Batman Havalimanı</option>
            <option value="Bingöl Havalimanı">Bingöl Havalimanı</option>
            <option value="Bursa Yenişehir Havalimanı">Bursa Yenişehir Havalimanı</option>
            <option value="Çanakkale Havalimanı">Çanakkale Havalimanı</option>
            <option value="Çanakkale GökçeAda Havalimanı">Çanakkale GökçeAda Havalimanı</option>
            <option value="Denizli Çardak Havalimanı">Denizli Çardak Havalimanı</option>
            <option value="Diyarbakır Havalimanı">Diyarbakır Havalimanı</option>
            <option value="Elazığ Havalimanı">Elazığ Havalimanı</option>
            <option value="Erzincan Havalimanı">Erzincan Havalimanı</option>
            <option value="Erzurum Havalimanı">Erzurum Havalimanı</option>
            <option value="Eskişehir Hasan Polatkan Havalimanı">Eskişehir Hasan Polatkan Havalimanı</option>
            <option value="Gaziantep Havalimanı">Gaziantep Havalimanı</option>
            <option value="Hakkari Yüksekova Selahaddin Eyyubi Havalimanı">Hakkari Yüksekova Selahaddin Eyyubi Havalimanı</option>
            <option value="Hatay Havalimanı">Hatay Havalimanı</option>
            <option value="Iğdır Şehit Bülent Ayydın Havalimanı">Iğdır Şehit Bülent Ayydın Havalimanı</option>
            <option value="Isparta Süleyman Demirel Havalimanı">Isparta Süleyman Demirel Havalimanı</option>
            <option value="İstanbul Havalimanı">İstanbul Havalimanı</option>
            <option value="İstanbul Sabiha Gökçen Havalimanı">İstanbul Sabiha Gökçen Havalimanı</option>
            <option value="İzmir Adnan Menderes Havalimanı">İzmir Adnan Menderes Havalimanı</option>
            <option value="Kahramanmaraş Havalimanı">Kahramanmaraş Havalimanı</option>
            <option value="Kars Harakani Havalimanı">Kars Harakani Havalimanı</option>
            <option value="Kastamonu Havalimanı">Kastamonu Havalimanı</option>
            <option value="Kayseri Havalimanı">Kayseri Havalimanı</option>
            <option value="Kocaeli Cengiz Topel Havalimanı">Kocaeli Cengiz Topel Havalimanı</option>
            <option value="Konya Havalimanı">Konya Havalimanı</option>
            <option value="Kütahya Zafer Havalimanı">Kütahya Zafer Havalimanı</option>
            <option value="Malatya Havalimanı">Malatya Havalimanı</option>
            <option value="Mardin Havalimanı">Mardin Havalimanı</option>
            <option value="Muğla Daşaman Havalimanı">Muğla Daşaman Havalimanı</option>
            <option value="Muğla Milas - Bodurm Havalimanı">Muğla Milas - Bodurm Havalimanı</option>
            <option value="Muş Havalimanı">Muş Havalimanı</option>
            <option value="Nevşehir Kapadokya Havalimanı">Nevşehir Kapadokya Havalimanı</option>
            <option value="Ordu - Giresun Havalimanı">Ordu - Giresun Havalimanı</option>
            <option value="Samsun Çarşamba Havalimanı">Samsun Çarşamba Havalimanı</option>
            <option value="Siirt Havalimanı">Siirt Havalimanı</option>
            <option value="Sivas Nuri Demirağ Havalimanı">Sivas Nuri Demirağ Havalimanı</option>
            <option value="Şanlıurfa Gap Havalimanı">Şanlıurfa Gap Havalimanı</option>
            <option value="Şırnak Şerafettin Elçi Havalimanı">Şırnak Şerafettin Elçi Havalimanı</option>
            <option value="Tekirdağ Çorlu Havalimanı">Tekirdağ Çorlu Havalimanı</option>
            <option value="Tokat Havalimanı">Tokat Havalimanı</option>
            <option value="Trabzon Havalimanı">Trabzon Havalimanı</option>
            <option value="Uşak Havalimanı">Uşak Havalimanı</option>
            <option value="Van Ferit Melen Havalimanı">Van Ferit Melen Havalimanı</option>
            <option value="Zonguldak Çaycuma Havalimanı">Zonguldak Çaycuma Havalimanı</option>
            
        </select>
         <p>&#x2193;</p>
        <label>Nereye </label>
        <select>
            <option value={"Adana Havalimanı"}>Adana Havalimanı</option>
            <option value="Adıyaman Havalimanı">Adıyaman Havalimanı</option>
            <option value="Ağrı Ahmedi-i Hani Havalimanı">Ağrı Ahmedi-i Hani Havalimanı</option>
            <option value="Amasya Merzifon Havalimanı">Amasya Merzifon Havalimanı</option>
            <option value="Ankara Esenboğa Havalimanı">Ankara Esenboğa Havalimanı</option>
            <option value="Antalya Havalimanı">Antalya Havalimanı</option>
            <option value="Antalya Gazipaşa - Alanya Havalimanı">Antalya Gazipaşa - Alanya Havalimanı</option>
            <option value="Aydın Çaldır Havalimanı">Aydın Çaldır Havalimanı</option>
            <option value="Balıkesir Koca Seyit Havalimanı">Balıkesir Koca Seyit Havalimanı</option>
            <option value="Balıkesir Merkez Havalimanı">Balıkesir Merkez Havalimanı</option>
            <option value="Batman Havalimanı">Batman Havalimanı</option>
            <option value="Bingöl Havalimanı">Bingöl Havalimanı</option>
            <option value="Bursa Yenişehir Havalimanı">Bursa Yenişehir Havalimanı</option>
            <option value="Çanakkale Havalimanı">Çanakkale Havalimanı</option>
            <option value="Çanakkale GökçeAda Havalimanı">Çanakkale GökçeAda Havalimanı</option>
            <option value="Denizli Çardak Havalimanı">Denizli Çardak Havalimanı</option>
            <option value="Diyarbakır Havalimanı">Diyarbakır Havalimanı</option>
            <option value="Elazığ Havalimanı">Elazığ Havalimanı</option>
            <option value="Erzincan Havalimanı">Erzincan Havalimanı</option>
            <option value="Erzurum Havalimanı">Erzurum Havalimanı</option>
            <option value="Eskişehir Hasan Polatkan Havalimanı">Eskişehir Hasan Polatkan Havalimanı</option>
            <option value="Gaziantep Havalimanı">Gaziantep Havalimanı</option>
            <option value="Hakkari Yüksekova Selahaddin Eyyubi Havalimanı">Hakkari Yüksekova Selahaddin Eyyubi Havalimanı</option>
            <option value="Hatay Havalimanı">Hatay Havalimanı</option>
            <option value="Iğdır Şehit Bülent Ayydın Havalimanı">Iğdır Şehit Bülent Ayydın Havalimanı</option>
            <option value="Isparta Süleyman Demirel Havalimanı">Isparta Süleyman Demirel Havalimanı</option>
            <option value="İstanbul Havalimanı">İstanbul Havalimanı</option>
            <option value="İstanbul Sabiha Gökçen Havalimanı">İstanbul Sabiha Gökçen Havalimanı</option>
            <option value="İzmir Adnan Menderes Havalimanı">İzmir Adnan Menderes Havalimanı</option>
            <option value="Kahramanmaraş Havalimanı">Kahramanmaraş Havalimanı</option>
            <option value="Kars Harakani Havalimanı">Kars Harakani Havalimanı</option>
            <option value="Kastamonu Havalimanı">Kastamonu Havalimanı</option>
            <option value="Kayseri Havalimanı">Kayseri Havalimanı</option>
            <option value="Kocaeli Cengiz Topel Havalimanı">Kocaeli Cengiz Topel Havalimanı</option>
            <option value="Konya Havalimanı">Konya Havalimanı</option>
            <option value="Kütahya Zafer Havalimanı">Kütahya Zafer Havalimanı</option>
            <option value="Malatya Havalimanı">Malatya Havalimanı</option>
            <option value="Mardin Havalimanı">Mardin Havalimanı</option>
            <option value="Muğla Daşaman Havalimanı">Muğla Daşaman Havalimanı</option>
            <option value="Muğla Milas - Bodurm Havalimanı">Muğla Milas - Bodurm Havalimanı</option>
            <option value="Muş Havalimanı">Muş Havalimanı</option>
            <option value="Nevşehir Kapadokya Havalimanı">Nevşehir Kapadokya Havalimanı</option>
            <option value="Ordu - Giresun Havalimanı">Ordu - Giresun Havalimanı</option>
            <option value="Samsun Çarşamba Havalimanı">Samsun Çarşamba Havalimanı</option>
            <option value="Siirt Havalimanı">Siirt Havalimanı</option>
            <option value="Sivas Nuri Demirağ Havalimanı">Sivas Nuri Demirağ Havalimanı</option>
            <option value="Şanlıurfa Gap Havalimanı">Şanlıurfa Gap Havalimanı</option>
            <option value="Şırnak Şerafettin Elçi Havalimanı">Şırnak Şerafettin Elçi Havalimanı</option>
            <option value="Tekirdağ Çorlu Havalimanı">Tekirdağ Çorlu Havalimanı</option>
            <option value="Tokat Havalimanı">Tokat Havalimanı</option>
            <option value="Trabzon Havalimanı">Trabzon Havalimanı</option>
            <option value="Uşak Havalimanı">Uşak Havalimanı</option>
            <option value="Van Ferit Melen Havalimanı">Van Ferit Melen Havalimanı</option>
            <option value="Zonguldak Çaycuma Havalimanı">Zonguldak Çaycuma Havalimanı</option>
            
        </select>
*/