import React,{useState,useEffect} from 'react';
import '../../css/yo-detail.css'
import '../../css/zm-detail.css'
import Banner from '../../component/Banner'
import Container from '../yango/container'
import Foot from '../yango/detail-foot'
import Bottom from './bottom-f'
import {lecturer} from '../../server/api'
import {getcomment} from '../../server/api'
function Detail (){
    useEffect(async () => {
        let getData = await lecturer({
            article_id:1,
        })
        // console.log(data)
        setData(
            getData.data
        )
    },[])
    useEffect(async() => {
        let commentData = await getcomment({
            article_id:1,
        }) 
        setData(
            commentData.data,
        )
        console.log(data)
    },[])
   let [data,setData] = useState({
       id:1,
       title:"",
       category_id:1,
       content:"",
       good:""
   });
    return (
        // <div>
            <div className="warp">
                {/*轮播图*/}
                <Banner></Banner>
                {/*主体内容*/}
                <Container data={data}></Container>
                {/*底部*/}
                <Foot data={data}></Foot>
                {/*回复本贴*/}
              <Bottom></Bottom>
                {/* <div className="aaa">123</div> */}
            </div> 
        
        // </div>
    )
}

export default Detail