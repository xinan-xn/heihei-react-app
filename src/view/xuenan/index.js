import React, { useState, useEffect } from 'react'
import '../../css/one.css'
import { Link } from 'react-router-dom'
import { logout } from '../../server/api'
function UserGreeting(props) {
    return <Link to="/login" ></Link>;
}

function GuestGreeting(props) {

    console.log(props)
    let [flag, setFlag] = useState(false)
    return (
        <span className="header-btn-right">
            <span
                className="header-user"
                onClick={() => {
                    setFlag(!flag)
                    console.log('用户点击')
                }}
            >{props.users}
            </span>
            <span
                className="header-logout-btn"
                style={{

                    display: flag ? "block" : "none",
                }}
                onClick={() => {
                    logout().then(res => {
                        console.log('退出', res)
                        localStorage.removeItem('user')
                    })
                }}
            >
                退出
          </span>
        </span>
    );
}

function Header(props) {
    let { setFlag, flag, users, setUser, isUser } = props
    useEffect(() => {
        console.log()
        //获取本地用户名
        let use = localStorage.getItem("user")
        setUser(use)
    }, [users])
    console.log(props)
    return (
        <header id="header">
            <nav className="menu">
                <span onClick={() => {
                    console.log('店家了')
                    // console.log(flag);
                    setFlag(!flag)


                }}>导航</span>
            </nav>
            <h1 className="logo">miaov.com</h1>
            <span className="user" >
                {isUser ? <GuestGreeting users={users} /> :
                    <UserGreeting></UserGreeting>}
            </span>
        </header>
    );
}


export default Header