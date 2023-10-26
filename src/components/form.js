import React, { useState } from 'react'


export const Form = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allEntry, setallEntry] = useState([])
    const submitform = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password }
        setallEntry([...allEntry, newEntry]);
        console.log(allEntry);
        setemail("")
        setpassword("")


    }
    return (
        <>

            <form onSubmit={submitform}>
                <div>
                    <label htmlFor='email'>email</label>
                    <input type='text' name='email' id='email' autoComplete='off' value={email}
                        onChange={(e) => setemail(e.target.value)

                        } />
                </div>
                <div>
                    <label htmlFor='password'>password</label>
                    <input type='text' name='password' id='password'  autoComplete='off' value={password}

    
                        onChange={(e) => setpassword(e.target.value)} />
                </div>
                <button type='onsubmit'>login</button>
            </form>

            <div>
                {
                   allEntry.map((element)=>{
                    return(
                        <div className='showdetail'>
                      <p>{element.email}</p>
                     <p>{element.password}</p>
                            </div>
                    )
                   })
                }
            </div>



        </>








    )
}
