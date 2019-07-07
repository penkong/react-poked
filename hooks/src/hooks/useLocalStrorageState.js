import { useState, useEffect } from 'react';

function useLocalStorageState(key,defaultVal) {
  const [state, setState] = useState(()=> {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => { // obj to json
    window.localStorage.setItem(key,JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
export { useLocalStorageState };