import { Outlet } from "react-router-dom";
import SecIzle from "./SecIzle";

function Yayin(){
    return(
        <>
        <SecIzle />
        <section>
        <Outlet />
        </section>

        <footer>
        Tüm yayın hakları saklıdır.
        </footer>
        
        </>
    )
}

export default Yayin;