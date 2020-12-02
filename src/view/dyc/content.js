import React from "react"
import "../../css/home.css"

function Content(){
    return (
        <div className="content_list">
            <li className="List1">
                <div className="list_li">
                    <button>Poplur</button>
                    <h3 className="list_title">
                        VIP自学阵营
                        <span>A联盟-HTML&CSS</span>
                    </h3>
                </div>
                <p className="price">FREE</p>
                <div className="txt">
                    <p>以免费公开课的形式，解决你在学习中遇到的问题</p>
                </div>
                <a>报名</a>
            </li>
            <li className="List2">
                <div className="list_li">
                    <h3 className="list_title"
                        style={{
                            margin:"0.64rem 0 0"
                        }}
                    >
                        WEB前端开发
                        <span style={{fontSize:"0.426667rem"}}>零基础课程</span>
                    </h3>
                </div>
                <p className="price"
                   style={{color:"#4d9be2"}}
                >￥4800</p>
                <div className="txt">
                    <time>2个月</time>
                    <p>PC端静态页面，移动商静态页面制作...</p>
                </div>
                <a>报名</a>
            </li>
            <li className="List3">
                <div className="list_li">
                    <h3 className="list_title"
                        style={{
                            margin:"0.64rem 0 0"
                        }}
                    >
                        WEB前端开发
                        <span  style={{fontSize:"0.426667rem"}}>零基础课程</span>
                    </h3>
                </div>
                <p className="price"
                   style={{color:"#f97e32"}}
                >￥9200</p>
                <div className="txt">
                    <time>4个月</time>
                    <p>作用域、闭包、原型链、核心算法...</p>
                </div>
                <a>报名</a>
            </li>
            <li className="List4">
                <div className="list_li">
                    <button>Poplur</button>
                    <h3 className="list_title">
                        VIP自学阵营
                        <span>B联盟-JavaScript</span>
                    </h3>
                </div>
                <p className="price"
                   style={{color:"#6ece51"}}
                >FREE</p>
                <div className="txt">
                    <p>以免费公开课的形式，解决你在学习中遇到的问题</p>
                </div>
                <a>报名</a>
            </li>
        </div>
    )
}
export default Content;