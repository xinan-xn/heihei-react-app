import React, { useState, useEffect } from 'react'
import '../../css/zm-detail.css'
import { good, getGood, cancelGood } from '../../server/api'

function Foot(props) {

    let { setlike, like } = props
    let [msg, setmsg] = useState("")
    useEffect(() => {
        console.log()
    }, [msg])
    // console.log(props.footData, props);
    let { footData, artid, sompeople, setsome } = props;
    let sum = sompeople
    return (
        <div className="comment">
            <p className="give_praise">
                <span>
                    有{sompeople}人觉得很赞
                </span>
                <span className="praise_span" onClick={async () => {

                    //是否点赞
                    let isGood = await getGood({
                        article_id: artid
                    })
                    console.log("是否点赞", isGood.data)
                    //如果返回0则说明点过赞,取消
                    if (isGood.data.code === 0) {
                        setlike(!like)
                        //取消点赞
                        let delGood = await cancelGood({
                            goodid: isGood.data.gooid,
                            article_id: artid
                        })
                        sum--
                        setsome(sum)

                        // console.log("取消点赞", delGood)

                    } else if (isGood.data.code === 1) {//未登录

                        console.log(isGood.data.msg)
                    } else if (isGood.data.code === 3) {
                        setlike(!like)
                        //点赞
                        let toGood = await good({
                            article_id: artid
                        })
                        sum++
                        setsome(sum)

                        // console.log("点赞", toGood)
                    }
                }}
                    className={"praise_span " + (like ? "praise_span1" : "praise_span")}>
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
