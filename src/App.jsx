import './App.css';
import { useState } from "react";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
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
    <div className="container">
      <h1>Todo list</h1>
      <div className="inputBar">
        <input type="text" value={input} onChange={changeHandler} onKeyPress={keypressHandler} />
        <button onClick={addHandler}>Add to list</button>
      </div>
      <List items={list} removeHandler={removeHandler} />
    </div>
  )
}

export default App;
