
import { createContext, useContext, useState } from "react"

export interface ITodo {
    children: React.ReactNode //means any valid react node 
}

export interface MyTodo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export interface ITodosContext {
    todos: MyTodo[];
    handelAddTodo: (title: string) => void;
    toogleTodoAsCompleted: (id: string) => void;
    handelDeleteTodo: (id: string) => void;
}


export const TodosContext = createContext<ITodosContext | null>(null)

export const TodosProvider = ({ children }: ITodo) => {
    const [todos, setTodos] = useState<MyTodo[]>([])

    const handelAddTodo = (title: string) => {
        setTodos(prevTodos => {
            const newTodos: MyTodo = {
                id: Math.random().toString(),
                title: title,
                completed: false,
                createdAt: new Date(),
            }
            return [newTodos, ...prevTodos]
        }
        )
    }

    //Mark as completed function can be added here
    const toogleTodoAsCompleted = (id: string) => {
        setTodos((prevTodos) => {
            let newTodos = prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            }
            )
            return newTodos;
        })
    }

    //Delete function can be added here
    const handelDeleteTodo = (id: string) => {
        setTodos((prevTodos) => {
            let newTodos = prevTodos.filter((todo) => todo.id !== id)
            return newTodos;
        })
    }

    return <TodosContext.Provider value={{ todos, handelAddTodo, toogleTodoAsCompleted, handelDeleteTodo }} >
        {children}
    </TodosContext.Provider>
}

export const useTodos = () => {
    const todoConsumer = useContext(TodosContext)
    if (!todoConsumer) {
        throw new Error("useTodos must be used within TodosProvider")
    }

    return todoConsumer;
}


