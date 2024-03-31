import React from 'react'

const Home = () => {
    function logout(){
        window.localStorage.clear();
        window.location.reload()
    }

  return (
    <div>
      <h1>Welcome to Home page</h1>
      <img src='https://m.economictimes.com/thumb/msid-96449227,width-1200,height-900,resizemode-4,imgsize-43602/yash-1-film.jpg' alt=''></img>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
