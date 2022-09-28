import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anasayfa from "./Anasayfa";
import EmreBoz from "./EmreBoz";
import NotFound from "./NotFound";
import YapEkle1 from "./YapEkle1";
import Yayin from "./Yayin";
import "./myapp.css";

function MyApp(){
    return(
        <>
        
        <h1>MyApp</h1>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Yayin />}>
            <Route index element={<Anasayfa />}/>
            <Route path="emreboz" element={<EmreBoz />}/>
            <Route path="yapekle1" element={<YapEkle1 />}/>
            <Route path="*" element={<NotFound />}/>

            </Route>

        </Routes>
        
        </BrowserRouter>

        </>
    )
}

export default MyApp;