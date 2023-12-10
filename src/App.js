import "./App.css";
import plus from "./add.png";
import { useState } from "react";
import React from "react";
import i18n from "./languages/i18n.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
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

  const onChangeLang = () => {
    i18n.language === "ko"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ko");
  };

  return (
    <div className="Wrapper">
      <header className="tit">{t("todo_List")}</header>
      <div
        className="Change_Lan"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50px",
        }}
      >
        <button onClick={() => onChangeLang()}>언어변경</button>
      </div>
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
            <img src={plus} alt="add"></img>
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
                {t(`todos:${todo.text}`)}
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
