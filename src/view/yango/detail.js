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
    let [data,setData] = useState([]);
    let [footData,FooData] = useState([]);
    useEffect(async () => {
        let getData = await lecturer({
            article_id:2,
        })
        let commentData = await getcomment({
            article_id:1,
        }) 
        FooData(
            commentData.data,
        )
        setData(
            getData.data
        )
    },[])
    
    return (
        // <div>
            <div className="warp">
                {/*轮播图*/}
                <Banner></Banner>
                {/*主体内容*/}
                <Container data={data}></Container>
                {/*底部*/}
                <Foot footData={footData} good={data.good}></Foot>
                {/*回复本贴*/}
              <Bottom></Bottom>
                {/* <div className="aaa">123</div> */}
            </div> 
        
        // </div>
    )
}

export default Detail