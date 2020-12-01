import React from "react"
import Course from "../view/course/index"
import Home from "../view/dyc/home"
import Login from "../view/login/login"
import Div from "../view/zhl/page"

// const router=[
//     {
//         name:"首页",
//         path:"/",
//         exact:true,
//         render:(props)=>{
//             return <Home {...props}></Home>
//         }
//     },
//     {
//         name:"课程安排",
//         path:"/course",
//         exact:true,
//         render:(props)=>{
//             return <Course {...props}></Course>
//         }
//     },
//     {
//         name:"讲师团队",
//         path:"/lecturer",
//         exact:true,
//         render:(props)=>{
//             return <Div {...props}></Div>
//         }
//     },
//     {
//         name:"登录",
//         path:"/login",
//         exact:true,
//         render:(props)=>{
//             return <Login {...props}></Login>
//         }
//     },
// ]

const nav=[
    {
        to:'/',
        name:"首页",
        exact:true,
        className:"iconfont icon-home"
    },
    {
        to:'/course',
        name:"课程安排",
        exact:true,
        className:"iconfont icon-kecheng"
    },
    {
        to:'/lecturer',
        name:"讲师团队",
        exact:true,
        className:"iconfont icon-peixunjiangshi"
    }
]
export {nav}