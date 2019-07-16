import { useState } from 'react'
export default initValue => {
  const [value, setValue] = useState(initValue)
  const handleChange = e => {
    setValue(e.target.value)
  }
  const reset = () => {
    setValue('')
  }
  return [value, handleChange, reset]
}
