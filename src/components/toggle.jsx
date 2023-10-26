import React, { useState } from 'react'

export const Toggle = () => {

    const [name,setname] =useState("neetesh parashar")
    const changename=()=>{

        let val = name ;
        (val==="neetesh parashar")?setname("ashoksharma"):setname("neetesh parashar");
        
       
    }
    console.log(name);

  return (
    <div>
        <h1>{name}</h1>
        <button className='btn' onClick={changename} >click me plz</button>
    </div>
  )
}
