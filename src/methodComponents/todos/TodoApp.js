import { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

const TodoApp = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(
      () => {
        setTodos((t) => [...t, "New Todo"]);
      },
      [todos],
  );

  return (
    <div className="main">
      <Todos todos={todos} addTodo={addTodo}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default TodoApp;