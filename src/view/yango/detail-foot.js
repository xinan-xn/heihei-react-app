import React, { useState, useEffect } from 'react'
import '../../css/zm-detail.css'
import { good, getGood, cancelGood } from '../../server/api'

function Foot(props) {

    let [isLike,setLike] = useState(props.isLikes)

    let [msg, setmsg] = useState("")
    useEffect(() => {
        console.log()
    }, [msg])
    console.log(props.footData, props);
    let { footData, artid } = props;

    return (
        <div className="comment">
            <p className="give_praise">
                <span>
                    有{props.good}人觉得很赞
                </span>
                <span className="praise_span" onClick={async () => {
                    setLike(!isLike)
                    //点赞
                    let toGood = await good({
                        article_id: artid
                    })
                    console.log("点赞", toGood)
                    if (toGood.data.code === 0) {
                        //是否点赞
                        let isGood = await getGood({
                            article_id: artid
                        })
                        //取消点赞
                        let delGood = await cancelGood({
                            goodid:isGood,
                            article_id: artid
                        })

                        console.log("是否点赞", isGood)
                        console.log("取消点赞", delGood)

                    }else if(toGood.data.code === 1){
                        console.log("点赞", toGood.data.msg)
                        alert("请登录")
                    }
                }} 
                className={"praise_span " + (isLike ? "praise_span1" : "praise_span")}>
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
                        没有更多了
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foot
