import React from "react";
import './page.css';

function Div(){
    return(
        <div className="pageWrap">
            <div>
                <div id="main" height='{{8.893333rem}}'>
                    <div className="pageWrap">
                        <div>
                            <div className="teacher_banner">
                                <h2>
                                    <span></span>
                                </h2>
                                <div className="banner">
                                    <div className="banner_img">
                                        <ul className="banner_list clearfix">
                                            <li>
                                                <ul className="lecturer_list">
                                                    <li>
                                                        <img src={require('../../images/teacher_photo.png').default}></img>
                                                        <p>莫涛</p>
                                                    </li>
                                                    <li>
                                                        <img src={require('../../images/teacher_photo.png').default}></img>
                                                        <p>莫涛</p>
                                                    </li>
                                                    <li>
                                                        <img src={require('../../images/teacher_photo.png').default}></img>
                                                        <p>莫涛</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="banner_nav">
                                        <li className=""></li>
                                        <li className=""></li>
                                        <li className=""></li>
                                    </ul>
                                </div>
                            </div>
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
                        </div>


                        <footer id="footer">
                            <div className="link clearfix">
                                <a href="#">hr_recruit@miaov.com</a>
                                <a href="#">010-57269690</a>
                            </div>
                            <nav className="foot_nav clearfix">
                                <a href="#">网站首页</a>
                                <a href="#">课程安排</a>
                                <a href="#">学员作品</a>
                                <a href="#">视频教程</a>
                                <a href="#">关于我们</a>
                                <a href="#">在线留言</a>
                                <a href="#">常见问题</a>
                            </nav>
                            <p className="copyright">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
                        </footer>
                    </div>
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
                </div>
            </div>
        </div>
    )
}
export default Div