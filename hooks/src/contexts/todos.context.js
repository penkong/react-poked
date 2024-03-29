// keep tracks of todos.
import React, { createContext } from 'react';
import todoReducer from '../reducers/todos.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
// import useTodosState from '../hooks/useTodosState';

const defTodos = [
  {id: 1, task:'go some where else', completed: false},
  {id: 2, task:'still there', completed: true},
]
// for child
export const TodosContext = createContext();
export const DispatchContext = createContext();
// for parent
export function TodosProvider(props) {
  // const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodosState(defTodos);
  // make like useReducer
  const [todos, dispatch] = useLocalStorageReducer("todos", defTodos, todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}