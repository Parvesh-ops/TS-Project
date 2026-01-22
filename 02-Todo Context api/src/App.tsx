import { AddTodo } from "./components/AddTodo";
import { Navbar } from "./components/Navbar";
import { Todos } from "./components/Todos";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="w-full max-w-md bg-gray-50 p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <Navbar />
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
};

export default App;
