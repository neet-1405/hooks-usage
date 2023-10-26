import React, { useEffect, useState } from 'react'
// measurnig the width chota bda krne pr

const Useeffesct2 = () => {
    const[widthcount,setwidthcount]=useState(window.screen.width);
    const actualwidth=()=>{
        console.log(window.innerWidth)
        setwidthcount(window.innerWidth)


    }

    useEffect(()=>{
        console.log("addevent")
        window.addEventListener("resize",actualwidth);
        
        return()=>{
            console.log("removeevent")
            window.removeEventListener("resize",actualwidth);
        }

    })
  return (
    <div>
        <h1>width of the screee:</h1>
        <h3>{widthcount}</h3>
    </div>
  )
}

export default Useeffesct2