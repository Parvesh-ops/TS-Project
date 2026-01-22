import { useState } from "react";
import { useTodos } from "../context/Todos";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handelAddTodo } = useTodos();

  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handelAddTodo(todo);
    setTodo("");
  };

  return (
    <form
      onSubmit={handelFormSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a todo..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
};
