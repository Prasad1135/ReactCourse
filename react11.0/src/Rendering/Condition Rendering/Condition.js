import React, { useState } from 'react'

const Condition = () => {
    const [score]=useState(34)
 if (score>=35) {
    return(
    <div>
        <h1>
            i'm Pass
        </h1>
    </div>
    )
 } else {
    return(
    <div>
        <h1>
            i'm Fail
        </h1>
    </div>
    )
 }
}

export default Condition
