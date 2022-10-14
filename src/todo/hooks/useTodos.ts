import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext)
  return { ...todoState, todoState, toggleTodo }
}