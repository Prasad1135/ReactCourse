import React from 'react'
   import Home from '../src/Router/Home'
   import {BrowserRouter,Route,Routes} from 'react-router-dom'
   import About from './Router/About' 
   import Contact from './Router/Contact'
    import Navbar from './Router/Navbar'
   const App = () => {
     return (
       <div>
         <BrowserRouter>
         <Navbar/>
      <Routes>
        
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>} />
         <Route path='/Contact' element={<Contact/>} />
         <Route path='*' element={<h1>404 Error</h1>}/>
       </Routes>
         </BrowserRouter>
       </div>
     )
   }
   
   export default App