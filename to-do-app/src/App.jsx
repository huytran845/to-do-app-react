import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

// The main app function that houses all the components to be displayed on the screen. A react fragment to return multiple components.

function App() {
  const todos = [
    { input: "Hello This is the first todo", complete: true },
    { input: "Get a recording going!", complete: false },
    { input: "Learn the react course", complete: false },
    { input: "Go to sleep", complete: true },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput todos={todos} />
    </>
  );
}

export default App;
