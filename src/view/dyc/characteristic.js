import React from "react"
import "../../css/home.css"
import Icon1 from "../../images/icon1.png"
import Icon2 from "../../images/icon2.png"
import Icon3 from "../../images/icon3.png"

function Characterisitic(){
    return (
        <div className="characteristic">
            <h3>妙味特色</h3>
            <ul className="characteristic_list">
                <li>
                    <a>
                        <img src={Icon1}/>
                    </a>
                    <span>成为VIP会员后，即刻观看“妙味VIP视频库”中任何视频</span>
                </li>
                <li>
                    <a>
                        <img src={Icon2}/>
                    </a>
                    <span>妙味官方会不定期安排公开课，VIP会员可以零距离与讲师接触、探讨各种技术问题</span>
                </li>
                <li>
                    <a>
                        <img src={Icon3}/>
                    </a>
                    <span>"作品展示、工作推荐、举办个人技术活动、招聘"等…</span>
                </li>
            </ul>
        </div>
    )
}
export default Characterisitic;