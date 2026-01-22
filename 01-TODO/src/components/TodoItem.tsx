import type { Todo } from "../types/todo"; // type is neccessary to avoid error

type Props = {
  todo: Todo;
  isEditing: boolean;
  editText: string;
  onEditChange: (value: string) => void;
  onEditStart: (id: number, text: string) => void;
  onEditSave: (id: number) => void;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({
  todo,
  isEditing,
  editText,
  onEditChange,
  onEditStart,
  onEditSave,
  onToggle,
  onDelete,
}: Props) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={e => onEditChange(e.target.value)}
          />
          <button onClick={() => onEditSave(todo.id)}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => onEditStart(todo.id, todo.text)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
