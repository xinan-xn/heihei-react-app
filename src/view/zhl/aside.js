import React from 'react'
import './page.css'

function Aside(){
    return (
        <aside className="elastic">
            <div className="elastic_box">
                <span className="close">关闭</span>
                <div className="elastic_img">
                    <img src={require('../../images/teacher_photo.png').default}></img>
                </div>
                <div className="elastic_txt">
                    <h3>王允-妙味课堂 全职讲师</h3>
                    <div className="elastic_content">
                        <div>
                            <ul id="teacher">
                                <li>
                                    妙味课堂创始人之一，精通H5移动端开发技巧，</li>
                                <li>
                                    <span className="dot"></span>
                                    妙味官网核心功能开发者、海量的H5、CSS3、移动端系列视频录制者</li>
                                <li>
                                    <span className="dot"></span>妙味最新移动端课程研发者，同时具备多年丰富的教学经历，</li>
                                <li>
                                    <span className="dot"></span>为人谦逊，处事低调，与之接触学员均对其赞赏有加</li>
                                <li>
                                    <span className="dot"></span>现主导妙味新课程研发与移动端课程标准化工作</li>
                                <li>
                                    <span className="dot"></span>同时负责妙味实体班、远程班、公开课与最新案例研究重任。</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bscroll-vertical-scrollbar">
                        <div className="bscroll-indicator"></div>
                    </div>
                </div>
            </div>
        </aside>

    )
}
export default Aside