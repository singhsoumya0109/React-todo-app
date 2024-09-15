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

  function addItem() {
    if (inputText !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }


  function deleteItem(id)
  {
    setItems(prevItems=>{
      return prevItems.filter((item,index)=>{
        return index!=id;
      });
    })
  }


  return (
    <div className="app">
      <div className="middle text-center">
        <h1>To-Do List</h1>
        <input
          className="input"
          onFocus={handleFocus}
          onChange={change}
          type="text"
          value={inputText}
        />

        <button 
          className="add-button btn btn-primary"
          onClick={addItem}
        >
          <span>Add</span>
        </button>
      </div>

      {items.length>0 && <div className="to-do-list card-container">
        {items.map((todoItem, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <h5 className="card-title">Task {index + 1}</h5>
              <p className="card-text">{todoItem}</p>
              <button 
                className="add-button btn delete-btn"
                onClick={()=>{
                  deleteItem(index);
                }}
              >
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default App;
