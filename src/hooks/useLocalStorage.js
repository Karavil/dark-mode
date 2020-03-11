import { useState } from "react";

const useLocalStorageState = (key, keyValue) => {
   const [value, setValue] = useState(() => {
      try {
         const current = localStorage.getItem(key);
         return JSON.parse(current);
      } catch {
         localStorage.setItem(key, JSON.stringify(keyValue));
         return keyValue;
      }
   });

   const setStoredValue = newValue => {
      setValue(newValue);
      console.log(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
   };

   return [value, setStoredValue];
};

export default useLocalStorageState;
