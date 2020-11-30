import React, { useState, useEffect } from 'react'
import './css/one.css'
import Header from './view/login/index'

import Login from './view/login/login'

import Detail from './view/yango/detail'
// import Head from './view/xuenan/head'
import Nav from './view/xuenan/nav'
// import Banner from './component/Banner'
import { Route } from 'react-router-dom'
import Course from "./view/course/index"
import Home from "../src/view/dyc/home"


import Div from '../src/view/zhl/page'

// const transfrom={
//   position:'relative',
//   transform: 'translateX(4.5rem)'
// }

function App() {
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    console.log(flag);
  }, [flag])
  return (
    <div className="App">

      <Header setFlag={setFlag} flag={flag}></Header>
      {
        flag ? <Nav></Nav> : ""
      }
      <div style={
        {
          // transform: `translateX(${flag ? 4.5 : 0}rem)`
        }
      }>
        <Route path="/" exact component={Home}></Route>
        <Route path="/course" exact component={Course}></Route>

        <Route path="/lecturer" exact component={Div}></Route>

        <Route path="/detail" exact component={Detail}></Route>
        <Route path="/login" exact component={Login}></Route>

      </div>


    </div>

  );
}
export default App
