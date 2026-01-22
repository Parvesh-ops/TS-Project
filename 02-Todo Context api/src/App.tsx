import { AddTodo } from "./components/AddTodo"
import { Todos } from "./components/Todos"


const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
