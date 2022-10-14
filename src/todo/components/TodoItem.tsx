import { Todo } from '../interfaces/interfaces'
import { useTodos } from '../hooks/useTodos';


interface TodoItemProps {
  todo: Todo
}
const TodoItem = ({todo}: TodoItemProps) => {
  const {toggleTodo} = useTodos()

  const handleDoubleClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <li
      style={{cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none'}}
      onDoubleClick={handleDoubleClick}
    >
      {todo.description}
    </li>
  )
}

export default TodoItem