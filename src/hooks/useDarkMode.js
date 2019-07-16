import React, { useEffect }from "react"
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = () => {
  console.log("using useDarkMode")
  const [someValue, setSomeValue] = useLocalStorage('darkMode', "")
  useEffect(() => {
    if ('darkMode') {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [useLocalStorage] );
  return [someValue, setSomeValue]
}; 