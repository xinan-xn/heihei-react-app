// 轮播图组件
import React,{useState,useEffect} from 'react'
import { Carousel } from 'antd';
// import imgUrl1 from '../../images/teacher_photo.png'
// import imgUrl2 from '../../images/teacher_photo.png'
// import imgUrl3 from '../../images/teacher_photo.png'

 import {getList} from '../../server/api'
import Aside from '../zhl/aside'
// const arr = [
//     {  'url': imgUrl1 , name:"莫涛"},
//     {  'url': imgUrl2 , name:"莫涛"},
//     {  'url': imgUrl3 , name:"莫涛"},
// ]
function Banner(props) {
    let [arr,setArr] = useState([])
    let [id,setId] = useState('')
    
    let [log,setLog] = useState(false)
    useEffect( () => {
        const data =  getList({order:'desc',sort:"sort",category_id:2,recommend:0}).then(res=>{

            setArr(res.data)
        })
           
       
    },[])

    return (
        <div>
            <Carousel autoplay>{
                arr.map((item, index) => {
                    return (        
                <div className="banner">
                    <div className="banner_img">
                        <ul className="banner_list clearfix">
                            <li>
                                <ul className="lecturer_list">
                                    <li key={item.id}>
                                        <img src={item.icon}
                                        onClick={()=>{
                                        setId(item.id)
                                        setLog(true)
                                        }}
                                        ></img>
                                        <p>{item.title}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                    )
                })
            }
            </Carousel>
            <Aside id={id} log={log} setLog={setLog}></Aside>
        </div>)
}
export default Banner