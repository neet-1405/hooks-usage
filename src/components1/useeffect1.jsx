import React, { useEffect, useState } from 'react'
const Useeffect1 = () => {


const [count,setcount]=useState(0);


//    we cannot use hooks in condition but we use hooks condition insdide hooks

      useEffect(()=>{
        // browserapi
        if(count>=5){
           document.title='${count}'
        }
        else{
            document.title="chats"
        }

       
        document.title=`chat(${count}) `
      
        
    });
    console.log("neetesh parashar");
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>
            setcount(count+1)
            
        }>click</button>

    </div>
    
  )
}

export default Useeffect1