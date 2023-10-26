import React, { createContext, useState } from 'react'
import ComponentC from './ComponentC';

// import ComponentC from './ComponentC';

export const usecontextid=createContext();

const ComponentA = () => {

     
const [state,setstate]=useState("neeteshparashar");

  return (
    
        <usecontextid.Provider  value={state} >
            <div>
            <h1>{state}</h1>
            <ComponentC/>
            
            </div>

        </usecontextid.Provider>
   
  )
  };
 export default ComponentA;