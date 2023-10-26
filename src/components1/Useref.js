import React, { useState } from 'react'
import { useRef } from 'react'

const Useref = () => {
    const [show,setshow]=useState(false)
  

const neeteshparashar=useRef(null)
const submitform=(e)=>{
    e.preventDefault();
    console.log(neeteshparashar.current.value);
     let name = neeteshparashar.current.value;
     name===""?alert("input something"):setshow(true)
    

}


  return (
    <div>
<form onSubmit={submitform}>
    <label htmlFor='luckyname'>your lucky name</label>
    <input type='text' id='luckyname' ref={neeteshparashar}></input>
    <br />

    <button className='btn'>submit</button>
</form>
<p>{show?`your lucky name${neeteshparashar.current.value}`:"" }</p>



    </div>
  )
}

export default Useref