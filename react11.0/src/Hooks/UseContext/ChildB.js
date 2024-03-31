import React, { createContext } from 'react'
import ChildA from './Hooks/UseContext/ChildA'


const data1=createContext()
const data2=createContext()
const ChildB = () => {
    const name="Prasad"
    const age=22
  return (
    <div>
        <data1.Provider value={name}>
        <data2.Provider value={age}>
        <ChildA/>
       
        </data2.Provider>
        </data1.Provider>
      
    </div>
  )
}
export {data1,data2}
export default ChildB