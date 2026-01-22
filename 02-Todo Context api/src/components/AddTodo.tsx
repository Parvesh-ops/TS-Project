import { useState } from "react"
import { useTodos } from "../context/Todos";


export const AddTodo = () => {
    const [todo, setTodo] = useState<string>('')
    const { handelAddTodo } = useTodos();

    const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handelAddTodo(todo)
        setTodo('')
        
    }
  return (
    <div>
    <form onSubmit={handelFormSubmit} >
        <input type="text" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} 
        placeholder="Add todo..." />

        <button type="submit">Add</button>
    </form>
    </div>
  )
}


