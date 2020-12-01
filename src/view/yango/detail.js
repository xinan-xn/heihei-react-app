import React, { useState, useEffect } from 'react';
import '../../css/yo-detail.css'
import '../../css/zm-detail.css'
import Banner from '../../component/Banner'
import Container from '../yango/container'
import Foot from '../yango/detail-foot'
import Bottom from './bottom-f'
import { lecturer, getcomment, good } from '../../server/api'
function Detail() {
    let [data, setData] = useState([]);
    let [footData, FooData] = useState([]);
    let [getGood, setGood] = useState([]);
    useEffect(async () => {
        //详情
        let getData = await lecturer({
            article_id: 1,
        })
        setData(
            getData.data
        )
        //评论
        let commentData = await getcomment({
            article_id: 1,
        })
        FooData(
            commentData.data,
        )
        //点赞
        let praiseGood = await good({
            article_id: 1,
        })
        setGood(
            praiseGood
        )
    }, [])

    return (
        // <div>
        <div className="warp">
            {/*轮播图*/}
            <Banner></Banner>
            {/*主体内容*/}
            <Container data={data}></Container>
            {/*底部*/}
            <Foot footData={footData} good={data.good} getGood={getGood}></Foot>
            {/*回复本贴*/}
            <Bottom></Bottom>
            {/* <div className="aaa">123</div> */}
        </div>

        // </div>
    )
}

export default Detail