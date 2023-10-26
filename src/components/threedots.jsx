import React, { useState } from 'react'

export const Threedots = () => {
    const [name,setname]=useState({
        myname:"neetesh parashar",mothername:"suntita sharma",schol:"green wood public school" ,age:24
    })
    const change=()=>{
        setname({...name, myname:"neelesh parashar", mothername:"vijayparashar"})
    }
  return (
    <div>
        <h1 className='intro'>name:{name.myname}&&fathee:{name.mothername}&&school:{name.schol}&age:{name.age}</h1>
        <button className='btn' onClick={change}>submit</button>
    </div>
  )
}
