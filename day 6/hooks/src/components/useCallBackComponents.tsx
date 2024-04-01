/** @format */

import React, { useCallback, useState } from "react";

type Props = {};

export default function UseCallBackComponents({}: Props) {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => setCount(count + 1);

  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <TodoComponents todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

type TTodos = {
  todos: string[];
  addTodo: () => void;
};

function TodoComponents({ todos, addTodo }: TTodos) {
  return (
    <div>
      <h2>My Todos</h2>

      <div>
        {todos.map((todo, key) => (
          <p key={key}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
}
