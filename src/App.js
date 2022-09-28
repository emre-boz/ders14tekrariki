import Todos from "./Todos";
import React from 'react';

const cokZamanAlanFonksiyon = (num) => {
  console.log("Hesaplama Yapılıyor...");
  for (let i = 0; i < 1000000000; i++) { 
    num += 1;
  }
  return num;
};
 

function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const hesaplamaSonucu = React.useMemo(()=>cokZamanAlanFonksiyon(sayac), []);

  const increment = () => {
    sayacGuncelle((oncekiSayac) => oncekiSayac + 1);
  };
 
  const addTodo = React.useCallback( () => {
    let saniye=new Date().getSeconds();
    setTodos((oncekiDizi) => [...oncekiDizi, "Yapılacak iş"+saniye]);
  },[] )

  

  return (
    <>
    <p>hesaplamaSonucu {hesaplamaSonucu}</p>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Sayaç: {sayac} 
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
