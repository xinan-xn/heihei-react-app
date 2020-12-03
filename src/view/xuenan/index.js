import React, { useState, useEffect } from 'react'
import '../../css/one.css'
import { Link } from 'react-router-dom'
import { logout, isLogin } from '../../server/api'

function Header(props) {
    let { setFlag, flag} = props
    let [xinan, setxinan] = useState(true)
    let [setp, setSetp] = useState(false)
    let [xxxx, setxxxx] = useState('')

    useEffect(() => {
        isLogin().then(res => {
            // console.log(res.data)
            if (res.data.code === 0) {
                setxinan(true)
                setxxxx(res.data.username)
            } else if (res.data.code === 1) {
                setxinan(false)
            }
        })
        console.log()
    }, [xinan, xxxx])
 
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
                {xinan ? (
                    <span className="header-btn-right">
                        <span
                            className="header-user"
                            onClick={() => {
                                setSetp(!setp)
                                console.log('用户点击')
                            }}
                        >{xxxx}
                        </span>
                        <span
                            className="header-logout-btn"
                            style={{

                                display: setp ? "block" : "none",
                            }}
                            onClick={() => {
                                logout().then(res => {
                                    console.log('退出', res)
                                    setxinan(false)
                                    localStorage.removeItem('user')
                                })
                            }}
                        >退出</span>
                    </span>
                ) : <Link to="/login" ></Link>}
            </span>
        </header>
    );
}


export default Header