import React from 'react'
import './course.css'
function Head(){
    return (
        <div className="class_box" >
                <h2> </h2>
                <table className="tabl">
                    <thead>
                        <tr>
                            <th>星期</th>
                            <th>时间</th>
                            <th>学习内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="week1" rowspan="2">周一</td>
                            <td className="center">上午</td>
                            <td className="content_td">前端代码初识</td>
                        </tr>
                        <tr>
                            <td className="center">下午</td>
                            <td className="content_td">基本属性：背景，边框</td>
                        </tr>
                        <tr>
                            <td className="week1" rowspan="2">周二</td>
                            <td className="center">上午</td>
                            <td className="content_td">H5标签与css选择器</td>
                        </tr>
                        <tr>
                            <td className="center">下午</td>
                            <td className="content_td">练习题</td>
                        </tr>
                        <tr>
                            <td className="week1" rowspan="2">周三</td>
                            <td className="center">上午</td>
                            <td className="content_td">浮动的深度剖析</td>
                        </tr>
                        <tr>
                            <td className="center">下午</td>
                            <td className="content_td">定位进阶</td>
                        </tr>
                        <tr>
                            <td className="week1" rowspan="2">周四</td>
                            <td className="center">上午</td>
                            <td className="content_td">表单详解</td>
                        </tr>
                        <tr>
                            <td className="center">下午</td>
                            <td className="content_td">表单的相关属性</td>
                        </tr>
                        <tr class="single">
                            <td className="center week1">周五</td>
                            <td className="center">全天</td>
                            <td className="content_td">浏览器兼容性</td>
                        </tr>
                        <tr class="single">
                            <td className="center week1">周末</td>
                            <td className="center" colspan="2">合理安排自己的时间，记得做联系哦！</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    更详细的课程安排请点击：
                    <a href="#">www.miaov.com</a>
                </p>
            </div>
    )
}
export default Head;