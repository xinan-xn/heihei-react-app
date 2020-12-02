import React, { useState, useEffect } from 'react'
import './css/one.css'
import Header from './view/xuenan/index'


import BLogin from './view/login/login'

import Detail from './view/yango/detail'
// import Head from './view/xuenan/head'


import Nav from './view/xuenan/nav'
import IndexRoute from "../src/router/index"

function App() {

  const [flag, setFlag] = useState(false)
  const [isUser, setIsUser] = useState(false)
  const [users, setUser] = useState('')
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
        users={users}
        setUser={setUser}
        isUser={isUser}
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
