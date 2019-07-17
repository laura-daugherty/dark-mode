import { useEffect }from "react"
import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode = () => {
  console.log("using useDarkMode")
  const [someValue, setSomeValue] = useLocalStorage('dark-mode', false)
  useEffect(() => {
    if (someValue) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [someValue] );
  console.log("someValue", someValue)
  console.log("setSomeValue", setSomeValue)
  return [someValue, setSomeValue]
}; 