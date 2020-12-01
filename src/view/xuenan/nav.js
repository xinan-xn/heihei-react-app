import React from 'react'
import '../../css/xn-two.css'
import {Link} from 'react-router-dom'
import {nav} from "../../router/router"
function Nav(props) {
    return (
        <nav id="menu">
            {/* <Link className="iconfont icon-home" to="/">首页</Link>
            <Link className="iconfont icon-kecheng" to="/course">课程安排</Link>
            <Link className="iconfont icon-peixunjiangshi" to="/lecturer">讲师团队</Link> */}
            {
                nav.map((item,index)=>{
                    return (
                        <Link 
                            className={item.className}
                            to={item.to}
                            exact={true}
                            key={index}
                        >
                            {item.name}
                        </Link>
                    )
                })
            }
        </nav>
    );
}


export default Nav