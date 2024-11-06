import { useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

// The main app function that houses all the components to be displayed on the screen. A react fragment to return multiple components.

function App() {
  // const todos = [
  //   { input: "Hello This is the first todo", complete: true },
  //   { input: "Get a recording going!", complete: false },
  //   { input: "Learn the react course", complete: false },
  //   { input: "Go to sleep", complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: "Hello This is the first todo", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  // The addTodo function creates a todo that will get overwritten to the original list that was copied over since the stateful variables are immutable.
  function addTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList); //Calls the setter function to update the variable to the new list.
  }

  function editTodo() {}

  function deleteTodo() {}

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList todos={todos} selectedTab={selectedTab} />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
