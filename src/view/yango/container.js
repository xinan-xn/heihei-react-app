import React from 'react'
import '../../css/yo-detail.css'
function Container(props) {
    // console.log(props);
    let {data} = props;
    return (
        <div className="main_works">
            {/* 学员作品 */}
            <h3>{data.title}</h3>
            {/* 主要内容 */}
           
            <div  className="works_box" dangerouslySetInnerHTML={{__html: data.content}}>
                
            </div>
        </div>
    );
}


export default Container




