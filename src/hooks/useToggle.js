import { useState } from 'react'

export default initToggle => {
  const [toggle, setToggle] = useState(initToggle)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return [toggle, handleToggle]
}
