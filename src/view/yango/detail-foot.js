import React,{useState,useEffect} from 'react'
import '../../css/zm-detail.css'
import Img from '../../images/zan_black.png'


function Foot(props) {
    console.log(props.footData, props);
    let { footData } = props;
    
    return (
        <div className="comment">
            <p className="give_praise">
                <span>
                    有{props.good}人觉得很赞
                </span>
                <span className="praise_span">
                    <img src={Img} alt=""/>
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
