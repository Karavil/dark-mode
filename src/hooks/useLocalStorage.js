import { useState } from "react";

const useLocalStorageState = (key, keyValue) => {
   const [value, setValue] = useState(() => {
      localStorage.setItem(key, keyValue);
      return JSON.parse(localStorage.getItem(key));
   });

   const setStoredValue = newValue => {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(newValue));
   };

   return [value, setStoredValue];
};

export default useLocalStorageState;
