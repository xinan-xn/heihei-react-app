import React, { useState, useEffect } from 'react'
import '../../css/zm-detail.css'
import { good } from '../../server/api'

function Foot(props) {
    let [msg,setmsg]=useState("")
    useEffect(()=>{
console.log()
    },[msg])
    console.log(props.footData, props);
    let { footData } = props;
    return (
        <div className="comment">
            <p className="give_praise">
                <span>
                    有{props.good}人觉得很赞
                </span>
                <span className="praise_span" onClick={async () => {
                    //详情
                    let {data} = await good({
                        article_id: 1
                    })
                    console.log(data.code,data.msg)
                    
                }}>
                </span>
            </p>
            <div className="comment_list_wrap">
                <div>
                    <ul className="comment_list">
                        {
                            footData.map((item, index) => {
                                return (
                                    <div>
                                        <li>
                                            <div className="comment_user">
                                                <span>{item.username}</span>
                                            </div>
                                            <div className="comment_txt">
                                                {item.content}
                                            </div>
                                            <div className="comment_time">
                                                {item.create_time}
                                            </div>
                                        </li>
                                    </div>

                                )
                            })
                        }
                    </ul>
                    <div className="loadmore">
                        <span className="loadmore_img"></span>
                        正在加载更多...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot
