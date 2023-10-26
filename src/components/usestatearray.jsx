import React, { useState } from 'react'
// map function lagane k bad usi me se hume ek ek krke array k htane ho click krne pr remove button
// pr then we use filter function
// remove function bnaya usme element id di jisse unique rhe 
// upr wala remove h usme element dalne se pura map ka data element k throu elemnt me fill hogy
// or retrun me element id se id equal krke check kra h whi data remove hoga jo equal to nhi hoga baki new array
//  me rkh k set my array me aajyega
// phir puri  process whi sam erhegi purani bina filter k thi jo
export const Usestatearray = () => {
    
    const data=[
        {
           id:1, name:"Neetesh",age:3,father:"ashoksharma"
        },
        {
            id:2, name:"Neetesh",age:4,father:"ashoksharma"
        },
        {
            id:3, name:"som",age:34,father:"ashoksharma"
        },
        {
            id:4,name:"Neetesh",age:33,father:"ashoksharma"
        }
    ]
   
    const [isArray,setisArray]=useState(data);
    

    const clearArray=()=>{

        let val =isArray;
        
       (val===data?setisArray([]):setisArray(data));
    }
    // console.log(isArray);
    const remove=(id)=>{
       const newarray=isArray.filter((element)=>{
        return element.id!==id;
       })
       setisArray(newarray)
        }
  return (
    <div>
        {
            isArray.map((element)=>{
                return (<h1 className='h1style' key={id}>Name: {element.name} && {element.age}  && father:{element.father}
                 <button onClick={()=>remove(element.id)}>remove</button></h1>
                
                
                )
            })
        }
        {/* clear array function on click krne pr */}
        <button className='btn' onClick={clearArray}>Clear</button>
        
        
    
    </div>
  )
}
