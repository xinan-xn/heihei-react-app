import React from "react"
import "../../css/home.css"

function Content(){
    return (
        <div className="content_list">
            <li className="List1">
                <button>Popular</button>
                <h3 className="list_title">
                    VIP自学营
                    <span>A联盟-HTML&CSS</span>
                </h3>
                <p className="price">FREE</p>
                <div className="txt">
                    <p>以免费公开课的形式,解决你在学习中遇到的问题。</p>
                </div>
                <a href="#">报名</a>
            </li>
            <li className="List2">
                <h3 className="list_title"
                    style={{
                        height:"1.946667rem",
                        padding:"0.64rem 0 0",
                        margin:"0.173333rem 0 0"
                    }}
                >
                    VIP自学营
                    <span>A联盟-HTML&CSS</span>
                </h3>
                <p className="price"
                   style={{color:"#4d9be2"}}
                >￥4800</p>
                <div className="txt">
                    <time>2个月</time>
                    <p>PC端静态页面，移动商静态页面制作...</p>
                </div>
                <a href="#">报名</a>
            </li>
            <li className="List3">
                <h3 className="list_title"
                    style={{
                        height:"1.946667rem",
                        padding:"0.64rem 0 0",
                        margin:"0.173333rem 0 0"
                    }}
                >
                    VIP自学营
                    <span>A联盟-HTML&CSS</span>
                </h3>
                <p className="price"
                   style={{color:"#f97f32"}}
                >￥9200</p>
                <div className="txt">
                    <time>4个月</time>
                    <p>作用域、闭包、原型链、核心算法...</p>
                </div>
                <a href="#">报名</a>
            </li>
            <li className="List4">
                <button>Popular</button>
                <h3 className="list_title">
                    VIP自学营
                    <span>A联盟-HTML&CSS</span>
                </h3>
                <p className="price"
                   style={{color:"#6ece51"}}
                >FREE</p>
                <div className="txt">
                    <p>以免费公开课的形式,解决你在学习中遇到的问题。</p>
                </div>
                <a href="#">报名</a>
            </li>
        </div>
    )
}
export default Content;