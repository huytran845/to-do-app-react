import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

// The main app function that houses all the components to be displayed on the screen. A react fragment to return multiple components.
function App() {
  const [todos, setTodos] = useState([
    { input: "Hello This is the first todo", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("Open");

  // The addTodo function creates a todo that will get overwritten to the original list that was copied over since the stateful variables are immutable.
  function addTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList); //Calls the setter function to update the variable to the new list.
    saveData(newTodoList);
  }

  // editCompleteTodo will allow the list to update the status of a todo to complete based on the given index.
  function editCompleteTodo(editIndex) {
    let newTodoList = [...todos];
    let completedTodo = todos[editIndex];
    completedTodo["complete"] = true;
    newTodoList[editIndex] = completedTodo;
    setTodos(newTodoList);
    saveData(newTodoList);
  }

  // deleteTodo just removes the todo from the list based on the provided index.
  function deleteTodo(deleteIndex) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== deleteIndex;
    });
    setTodos(newTodoList);
    saveData(newTodoList);
  }

  // saveData will record the state of the provided todo list to the localstorage database
  function saveData(currentTodos) {
    localStorage.setItem(
      "todo-organizer-list",
      JSON.stringify({ todos: currentTodos })
    ); //Stringifies the todo list to be saved into the database
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-organizer-list")) {
      return;
    } // Guard clause to wait till we can access the local db.
    let db = JSON.parse(localStorage.getItem("todo-organizer-list")); //Whatever we read from local storage is in JSON format so we must parse it
    setTodos(db.todos);
  }, []); // The empty array tells the useEffect to run as soon as page is available.

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        editCompleteTodo={editCompleteTodo}
        deleteTodo={deleteTodo}
      />
      <TodoInput addTodo={addTodo} />
    </>
  );
}

export default App;
