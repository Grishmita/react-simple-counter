import { useState } from "react";





function App() {
    let [counter , setCounter] = useState(0)

    const increment = () =>{
      setCounter(
        counter = counter + 1
      )
    }

    const decrement = () =>{
      setCounter(
        counter = counter - 1
      )
    }


  return (
    <div className="App">
    <button onClick={increment}>
      Increment
    </button>  
      {counter}
    <button onClick={decrement}>
      Decrement
    </button>  
    </div>
  );
}

export default App;
