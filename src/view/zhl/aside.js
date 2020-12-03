import React,{useEffect,useState} from 'react'

import BScroll from "better-scroll";
import {getList} from '../../server/api'
import './page.css'

function Aside(props){
    let [data,setData] = useState([])
    let {id,log,setLog} = props
    // console.log(props)
     useEffect(async () => {
       const data = await getList({order:'desc',sort:"sort",category_id:2,recommend:0})
    //   console.log(data)
      setData(data.data)
    },[])
    

    return (
        <aside className={log ? "elastic" : "elastics"}
        // "elastic"
        >
            {
                data.map(item=>{
                                if(item.id == id){
                                    return (
                      <div className="elastic_box">
                <span className="close" 
                onClick={()=>{
                    setLog(false)
                }}>关闭</span>
                <div className="elastic_img">
                    <img src={item.icon}></img>
                </div>
                <div className="elastic_txt">
                <h3>{item.title}-妙味课堂 全职讲师</h3>
                    <div className="elastic_content">
                        
                                      <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                              

                    </div>
                    <div className="bscroll-vertical-scrollbar">
                        <div className="bscroll-indicator"></div>
                    </div>
                </div>
            </div>
                 )
                }
            })
        }  
        </aside>

    )
}
export default Aside