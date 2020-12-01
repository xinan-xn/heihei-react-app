import Item from "antd/lib/list/Item"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../../css/home.css"
import { getList } from '../../server/api'
import Zan from "../../images/zan.png"
// import Zan2 from "../../images/zan_black.png"
import Chat from "../../images/chat.png"
function Works(props){
    let [data,setData] = useState([])
    useEffect(async () => {
        let urllist = await getList({
            sort: 1,
            category_id: 1,
            recommend: 1
        })
        // console.log(urllist)    
        setData(urllist.data)
    },[data])
    
    return (
        <div className="work">
            <p className="works_txt">学员作品</p>
            <div className="works_cont">
                 {
                    data.map((item)=>{
                        return (
                            <li key={item.id}>
                                <Link to={"/detail"+item.id}>
                                    <img src={item.icon}/>
                                    <span className="works_tit">
                                        <storing>{item.title}</storing>
                                        <span>
                                            <em>
                                                <i>
                                                    <img src={Chat}/>
                                                </i>
                                                <font>{item.message}</font>
                                            </em>
                                            <em>
                                                <i>
                                                    <img src={Zan}/>
                                                </i>
                                                <font>{item.good}</font>
                                            </em>
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Works;