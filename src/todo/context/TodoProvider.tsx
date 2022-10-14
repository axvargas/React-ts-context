import { ReactNode, useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './TodoReducer';

const INITIAL_STATE: TodoState = {
  todos: [
    {
      id: '1',
      description: 'Todo 1',
      completed: false,
    },
    {
      id: '2',
      description: 'Todo 2',
      completed: false,
    }
  ],
  todoCount: 2,
  completed: 0,
  pending: 2
};

interface TodoProviderProps {
  children: JSX.Element | ReactNode | JSX.Element[] | ReactNode[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toggleTodo = (id: string) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: {id}
    })
  }

  return <TodoContext.Provider value={{
    todoState,
    toggleTodo
  }}>
    {children}
  </TodoContext.Provider>;
};

export default TodoProvider;
