import { Link } from "react-router-dom";

function SecIzle(){
    return(
        <>
        <header>
            <nav>
                <Link to="/">Anasayfa</Link>
                <Link to="emreboz">EmreBoz</Link>
                <Link to="yapekle1">YapEkle1</Link>
                
            </nav>
        </header>
        </>
    )
}

export default SecIzle;