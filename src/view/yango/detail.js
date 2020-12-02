import React, { useState, useEffect } from 'react';
import '../../css/yo-detail.css'
import '../../css/zm-detail.css'
import Banner from '../../component/Banner'
import Container from '../yango/container'
import Foot from '../yango/detail-foot'
import Bottom from './bottom-f'
import CallFoot from './callfoot'

import { lecturer, getcomment, good, isLogin } from '../../server/api'
function Detail(props) {
    let [data, setData] = useState([]);
    let { match } = props
    // console.log('传过来的',match.params.id)
    let [footData, FooData] = useState([]);
    let [getGood, setGood] = useState([]);
    let [artid, setArtid] = useState(match.params.id);
    let [isLogi, setLogi] = useState(false);
    useEffect(async () => {
        //详情
        let getData = await lecturer({
            article_id: match.params.id,
        })
        setData(
            getData.data
        )
        //评论
        let commentData = await getcomment({
            article_id: match.params.id,
        })
        FooData(
            commentData.data,
        )
        //点赞
        let praiseGood = await good({
            article_id: match.params.id,
        })
        setGood(
            praiseGood
        )
        //是否登录
        let flag = await isLogin()
        if (flag.data.code === 0) {
            setLogi(true)
        }
    }, [])

    return (
        // <div>
        <div className="warp">
            {/*轮播图*/}
            <Banner></Banner>
            {/*主体内容*/}
            <Container data={data}></Container>
            {/*底部*/}
            <Foot footData={footData} good={data.good} getGood={getGood} artid={artid}></Foot>
            {/*回复本贴*/}
            <CallFoot isLogi={isLogi}></CallFoot>
            {/* <Bottom></Bottom> */}

            
            {/* <div className="aaa">123</div> */}
        </div>

        // </div>
    )
}

export default Detail