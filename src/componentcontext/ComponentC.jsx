import React from 'react'
import { useContext } from 'react'
import { usecontextid } from './ComponentA'



const ComponentC = () => {
    const userid=useContext(usecontextid)
  return (
    <div>
        <h1>{userid}</h1>
    </div>
  )
}

export default ComponentC