import { memo } from "react";


function YapEkle1ici({yeniIs, yeniIsEkle}){
    return(
        <>
        <h4>YapEkle1ici</h4>
        <div>
            {yeniIs.map((is)=>{return <p>{is}</p>})}
            <button onClick={yeniIsEkle}>ekle</button>
        </div>
        </>
    )
}

export default memo(YapEkle1ici);