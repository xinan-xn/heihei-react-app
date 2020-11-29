import React from 'react'
import '../../css/one.css'
import {Link} from 'react-router-dom'
function Header(props) {
    let {setFlag,flag} = props
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
                <Link to="/login"></Link>
            </span>
        </header>
    );
}


export default Header