import "./App.css";
import plus from "./add.png";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  function add() {
    if (inputValue === "") {
      alert("내용을 입력하세요");
    } else {
      setTodos([...todos, { text: inputValue, checked: false }]);
      setInputValue("");
    }
  }

  function delete_list(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      checked: !newTodos[index].checked,
    };
    setTodos(newTodos);
  };

  return (
    <div className="Wrapper">
      <header className="tit">todo_List</header>
      <div className="content">
        <div className="input_f">
          <input
            id="todo_input"
            type="text"
            placeholder="내용을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button id="add_btn" onClick={add}>
            <img src={plus}></img>
          </button>
        </div>
        <div className="result">
          {todos.map((todo, index) => (
            <div className="todolist" key={index}>
              <span
                onClick={() => toggleTodo(index)}
                className={`todolist ${
                  todos[index].checked ? "completed" : ""
                }`}
              >
                {todo.text}
              </span>
              <button className="delete_btn" onClick={() => delete_list(index)}>
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
