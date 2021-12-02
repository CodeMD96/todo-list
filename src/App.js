
import './App.css';

import { useState } from "react"

function App() {
  const [list, setList] = useState(["do this", "do that"]);
  const [input, setInput] = useState("");

  const addHandler = () => {
    let storedList =[...list];
    input.replace(/ /g, "") &&
      storedList.push(input);
    setList(storedList);
  };

  const keypressHandler = (event) => {
    if (event.which === 13) {
      addHandler(input);
    }
  };

  const removeHandler = (index) => {
    let storedList = [...list];
    storedList.splice(index, 1);
    setList(storedList);
  }

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>To do list</h1>
      <input type="text" value={input} onChange={changeHandler} onKeyPress={keypressHandler} />
      <button onClick={addHandler}>Add to list</button>
      <div className="todo-list">
        {list.map((item, index) => {
                  return (
                    <div key={index} className="list-item">
                      <p>{item}</p>
                      <button className="list-button" onClick={() => removeHandler(index)} >Done</button>
                    </div>
                  )
              })}
      </div>
    </div>
  )
}

export default App;
