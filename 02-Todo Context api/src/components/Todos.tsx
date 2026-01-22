import { useTodos } from "../context/Todos";
import { useSearchParams } from "react-router-dom";

export const Todos = () => {
  const { todos, toogleTodoAsCompleted, handelDeleteTodo } = useTodos();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("todos");

  let filteredTodos = todos;

  if (filter === "active") {
    filteredTodos = todos.filter((t) => !t.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((t) => t.completed);
  }

  return (
    <ul className="space-y-3">
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toogleTodoAsCompleted(todo.id)}
              className="w-4 h-4"
            />
            <span
              className={`${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </span>
          </div>

          {todo.completed && (
            <button
              onClick={() => handelDeleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
