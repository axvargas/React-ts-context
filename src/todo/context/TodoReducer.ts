import { TodoState, Todo } from "../interfaces/interfaces";

export type TodoAction ={
  type: 'ADD_TODO';
  payload: Todo
} | {
  type: 'TOGGLE_TODO';
  payload: {id: string}
}

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, payload],
        todoCount: state.todoCount + 1,
        pending: state.pending + 1
      }
  
    case 'TOGGLE_TODO':
      const newTodos: Todo[] = state.todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      ) 
      return {
        ...state,
        todos: newTodos,
        completed: newTodos.filter((todo) => todo.completed).length,
        pending: newTodos.filter((todo) => !todo.completed).length
      };
    default:
      return state;
  }
}