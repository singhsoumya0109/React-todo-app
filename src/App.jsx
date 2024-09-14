import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("Type your work");
  const [items, setItems] = useState([]);
  function change(event) {
    const newValue = event.target.value;
    
    setInputText(newValue);
  }

  function handleFocus() {
    if (inputText === "Type your work") {
      setInputText("");
    }
  }
  function addItem()
  {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="app">
      <div className="middle">
      <h1 >To-Do List</h1>
      <input
        className="input"
        onFocus={handleFocus}
        onChange={change}
        type="text"
        value={inputText}
      />

      <button 
      className="add-button"
      onClick={addItem}
      >
        <span>Add</span>
      </button>
      </div>
      <div className="to-do-list">
        <ul>
          {items.map((todoItem, index) => (
            <li className="to-do-item">{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
