// keep tracks of todos.
import React, { createContext } from 'react';
import useTodosState from '../hooks/useTodosState';

const defTodos = [
  {id: 1, task:'go some where else', completed: false},
  {id: 2, task:'still there', completed: true},
]
// for child
export const TodosContext = createContext();

// for parent
export function TodosProvider(props) {
  const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodosState(defTodos);
  return (
    <TodosContext.Provider value={{todos, addTodo, removeTodo, toggleTodo, editTodo}}>
      {props.children}
    </TodosContext.Provider>
  )
}