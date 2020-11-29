import React from 'react'
import './page.css'

function Cont(){
    return (
        <div className="teacher_index">
            <h2>加入我们</h2>
        <ul className="teacher_list">
            <li className="">
                <div className="mess_li">
                    <h5>web讲师</h5>
                    <p>人数:人数不限，多多益善</p>
                    <p>薪资:面议</p>
                </div>
            </li>
            <li className="">
                <div className="mess_li">
                    <h5>课程顾问</h5>
                    <p>人数：3人</p>
                    <p>薪资:底薪+提成</p>
                </div>
            </li>
            <li className="">
                <div className="mess_li">
                    <h5>客服</h5>
                    <p>人数:3人</p>
                    <p>薪资:面议</p>
                </div>
            </li>
            <li className="">
                <div className="mess_li">
                    <h5>行政前台助理</h5>
                    <p>人数:3人</p>
                    <p>薪资:底薪+提成</p>
                </div>
            </li>
        </ul>
        <div className="welcome clearfix">
            <div className="welcome_photo">
                    <img></img>
            </div>
            <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
                <span>本招聘信息长期有效</span>
            </p>
        </div>
        </div>
    )
}
export default Cont;