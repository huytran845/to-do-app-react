export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isPlural = todos.length != 1;
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {isPlural ? "tasks" : "task"}!
      </h1>
    </header>
  );
}
