import React, { useState, useEffect, useRef } from 'react'
import './css/one.css'
import Header from './view/xuenan/index'
import Nav from './view/xuenan/nav'
import IndexRoute from "../src/router/index"

function App() {
  const [flag, setFlag] = useState(false)
  const [isUser, setIsUser] = useState(false)
  useEffect(() => {
    let User = localStorage.getItem("user")
    if (User === null) {
      setIsUser(false)
    } else {
      setIsUser(true)
    }
    console.log("App", User)
  }, [])
  return (
    <div className="App">

      <Header
        setFlag={setFlag}
        flag={flag}
        isUser={isUser}
        setIsUser={setIsUser}
      ></Header>
      {
        flag ? <Nav></Nav> : ""
      }
      <div style={
        {
          transform: `translateX(${flag ? 4.5 : 0}rem)`
        }
      }>

        <IndexRoute></IndexRoute>

      </div>

    </div>

  );
}
export default App
