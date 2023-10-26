import React, { useState } from 'react'

export const Shortcircuit = () => {
    const [demo, setdemo]=useState("what r u doing")

  return (
    <div>

{/* if demo is false thn print hello my dear in or case */}
{/* if demo have something i initial then demo should be print  */}
{/* if demo is blank intial then after or conditipn what shoul be ther that should be print */}
        <h1>{demo||"hello my dear"}</h1>

{/* in this both thwe condition was an tru e */}
{/* if demo has something iitial then after and sybol what should be ther tha tha shoul be print  */}\
{/* if no thwn nothing should be print  */}
        <h1>{demo&&"neetesh parashar"}</h1>

    </div>
  )
}
