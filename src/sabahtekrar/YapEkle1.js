import { useCallback, useState } from "react";
import YapEkle1ici from "./YapEkle1ici";

function YapEkle1(){

    const [artan,artanGuncelle]=useState(0);
    const [yeniIs,yeniIsGuncelle]=useState([]);
   
    const arttirici=()=>{
        artanGuncelle((c) => c + 1);
    }


  
 const yeniIsEkle= useCallback(()=>{
    yeniIsGuncelle(eklenecek=>[...eklenecek,"yeni iş"]);

},[]);
    // const yeniIsEkle=()=>{
    //     yeniIsGuncelle(eklenecek=>[...eklenecek,"yeni iş"])
    // }

    return(
        <>
        <p>YapEkle1 iyidir.</p>

        <div>
            <h2>EKLER</h2>
            <YapEkle1ici yeniIs={yeniIs} yeniIsEkle={yeniIsEkle}/>
           
        </div>

        <p>Sayan sayac: {artan} </p><button onClick={arttirici}>arttir</button>
        </>
    )
}

export default YapEkle1;