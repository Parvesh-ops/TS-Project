import { useTodos } from "../context/Todos.tsx"

export const Todos = () => {
    const { todos, toogleTodoAsCompleted, handelDeleteTodo } = useTodos();

    const filterData = todos;

    return (
        <div>
            <ul>
                {
                    filterData.map((todo) => (
                        <li key={todo.id}>
                            <input type="checkbox" id={todo.id} checked={todo.completed} onChange={() => toogleTodoAsCompleted(todo.id)} />
                            <label htmlFor={todo.id}>{todo.title}</label>

                            {
                                todo.completed && <span> 
                                    <button type="button"
                                        onClick={() => handelDeleteTodo(todo.id)}>Delete</button>
                                </span>
                            }

                        </li>
                    ))
                }
            </ul>

        </div>
    )
}


