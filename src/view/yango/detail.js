import React, { Fragment, useState, useEffect } from 'react';
import '../../css/yo-detail.css'
import '../../css/zm-detail.css'
import Banner from '../../component/Banner'
import Container from '../yango/container'
import Foot from '../yango/detail-foot'
import CallFoot from './callfoot'

import { lecturer, getcomment, getGood, isLogin } from '../../server/api'
function Detail(props) {
    let [data, setData] = useState([]);
    let [sompeople, setsome] = useState([]);
    let { match } = props
    // console.log('传过来的',match.params.id)
    let [footData, FooData] = useState([]);
    let [artid, setArtid] = useState(match.params.id);
    let [isLikes, setLikes] = useState(false);
    //判断是否打开页面点赞
    let [like, setlike] = useState(false);

    useEffect(async () => {
        //详情
        let getData = await lecturer({
            article_id: match.params.id,
        })
        setData(
            getData.data
        )
        setsome(
            getData.data.good
        )
        //是否点赞
        let isgo = await getGood({
            article_id: match.params.id,
        })
        console.log(isgo)
        if (isgo.data.code === 0) {
            setlike(true)

        } else if (isgo.data.code === 3) {
            setlike(false)
        }

        //评论里边有点赞人数
        let commentData = await getcomment({
            article_id: match.params.id,
        })
        console.log(commentData)
        FooData(
            commentData.data,
        )

    }, [])

    return (
        // <div>
        <Fragment>
            <div className="warp">
                {/*轮播图*/}
                <Banner></Banner>
                {/*主体内容*/}
                <Container data={data}></Container>
                {/*底部*/}
                <Foot
                    footData={footData}
                    sompeople={sompeople}
                    setsome={setsome}
                    getGood={getGood}
                    artid={artid}
                    setlike={setlike}
                    like={like}
                ></Foot>
                {/*回复本贴*/}
                <CallFoot
                    isLikes={isLikes}
                    artid={artid}
                    FooData={FooData}
                ></CallFoot>
            </div>

        </Fragment>


        // </div>
    )
}

export default Detail