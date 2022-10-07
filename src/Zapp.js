import { useEffect, useState } from "react";
import Kart from "./zapin dosyalari/Kart";
import "./zapin dosyalari/zapstyle.css";

function Zapp() {
  const [urun, urunGuncelle] = useState(null);

  const [aranan,arananGuncelle]=useState("");

  useEffect(() => {
    const urunCekici = async () => {
      const fetcher = await fetch("https://picsum.photos/v2/list");
      const urunJson = await fetcher.json();
      urunGuncelle(urunJson);
    };
    urunCekici(urun);
  }, []);

  function filtreleme(urunlert){
    if(aranan==""){
        return urunlert;
    }else if
  }



  console.log(urun);
  return (
    <>
      <h1>Zapp</h1>

      <div>
        <input onChange={(e)=>{arananGuncelle(e.target.value)}} type="text" />
      </div>

      <div className="container">
        {urun&&urun.map((veri) => (
            <div key={veri.id}>
              <Kart foto={veri.download_url} author={veri.author} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Zapp;
