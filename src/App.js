import "./App.css";
import { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import { type } from "@testing-library/user-event/dist/type";

const defaultValues = {
  todo: "",
  todos: [],
};

function App() {
  const [todo, setTodo] = useState(defaultValues.todo);
  const [todos, setTodos] = useState(defaultValues.todos);
  const [editedValue, setEditedValue] = useState();
  const [currID, setCurrID] = useState()

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    if (todo != "") {
      setTodos((prev) => [...prev, { item: todo, id: prev.length + 1 }]);
      setTodo(defaultValues.todo);
    }
  };

  const editTodo = (id, newvalue) => {
    console.log()
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            item: newvalue,
          };
        }
        return item;
      });
    });
    setTodo(defaultValues.todo);
  };
          
  useEffect(()=>{
    editTodo(currID,editedValue)
    console.log(editedValue)
  },[editedValue])

  const TodoList = () => {

    return (
      <div>
        {todos.map((todo) => {
          
          return (
            <div key={todo.id}>
              <TodoItem
                item={todo.item}
                deleteItem={() => deleteTodo(todo.id)}
                changeWord={(word) =>  {setEditedValue(word); setCurrID(todo.id)}} 
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <label>add todo:</label>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        required
        value={todo}
      />
      <button type="button" onClick={addTodo} >
        Enter{" "}
      </button>
      <TodoList />
    </div>
  );
}

export default App;
