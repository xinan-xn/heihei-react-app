import React from 'react'
import '../../css/zm-detail.css'

function Foot(props) {
    console.log(props);
    let {data} = props;
    return (
        <div className="comment">
            <p className="give_praise">
                <span>
                    有{data.good}人觉得很赞
                </span>
                <span className="praise_span">
                </span>
            </p>
            <div className="comment_list_wrap">
                <div>
                    <ul className="comment_list">
                        {
                            
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
