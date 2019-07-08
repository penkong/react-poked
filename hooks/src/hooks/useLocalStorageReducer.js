import { useEffect, useReducer } from 'react';
// import todoReducer from '../reducers/todos.reducer';
function useLocalStorageReducer(key,defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, ()=>{
    //init state
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      value = defaultVal;
    }
    return value;
  })
  
  useEffect(() => { // obj to json
    window.localStorage.setItem(key,JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export { useLocalStorageReducer };