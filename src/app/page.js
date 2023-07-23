"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [added, setAdded] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get("/api");
      setTodos(response.data.todos);
    };
    fetchTodos();
  }, [added]);

  const addTodo = async () => {
    const response = await axios.post("/api", { text: newTodo });
    setTodos([...todos, response.data]);
    setAdded(response.data);
    setNewTodo("");
  };

  return (
    <div className="App">
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todos?.map((todo) => (
        <div key={todo._id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default Todo;
