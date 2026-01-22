import { useState } from "react";
import { useTodos } from "../context/Todos";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handelAddTodo } = useTodos();

  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim()) {
      handelAddTodo(todo);
      setTodo("");
    }
  };

  return (
    <form
      onSubmit={handelFormSubmit}
      className="mb-8"
    >
      <div className="flex gap-3 max-w-4xl mx-auto px-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
        />

        <button
          type="submit"
          disabled={!todo.trim()}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 shadow-sm hover:shadow-md"
        >
          Add
        </button>
      </div>
    </form>
  );
};