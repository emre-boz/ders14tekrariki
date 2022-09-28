import Todos from "./Todos";
import React from 'react';

function App() {
  const [sayac, sayacGuncelle] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  const increment = () => {
    sayacGuncelle((oncekiSayac) => oncekiSayac + 1);
  };
 
  const addTodo = React.useCallback( () => {
    let saniye=new Date().getSeconds();
    setTodos((oncekiDizi) => [...oncekiDizi, "Yapılacak iş"+saniye]);
  },[] )
   
  return (
    <>
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
