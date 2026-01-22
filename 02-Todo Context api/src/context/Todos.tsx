import { createContext, useContext, useState } from "react";

export interface MyTodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface ITodosContext {
  todos: MyTodo[];
  handelAddTodo: (title: string) => void;
  toogleTodoAsCompleted: (id: string) => void;
  handelDeleteTodo: (id: string) => void;
}

const TodosContext = createContext<ITodosContext | null>(null);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<MyTodo[]>([]);

  const handelAddTodo = (title: string) => {
    if (!title.trim()) return;

    const newTodo: MyTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toogleTodoAsCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handelDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{ todos, handelAddTodo, toogleTodoAsCompleted, handelDeleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used inside TodosProvider");
  }
  return context;
};
