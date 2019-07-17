import { useState } from "react";


export const useLocalStorage = (key, initialValue) => {
  console.log("using useLocalStorage")

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // console.log("storedValue in func", storedValue)
    console.log("item", item)
    return item ? JSON.parse(item) : initialValue
  })

// stored value inital state = function that pulls out the item with key from args
//  if there is an item that matches, returns that item and makes it in to a string. 
//  If not it returns second arg (could be nothing)

// if there is an item with a key that matches the first arg, storedValue = that item(as a string)
// if not, the stored value is the initialValue

  const setValue = (value) => {
    console.log("setting setValue")
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  console.log("ULS key", key)
  console.log("ULS initialValue", initialValue)
  console.log("ULS storedValue", storedValue)
  console.log("setValue", setValue)

  return [storedValue, setValue]


};  