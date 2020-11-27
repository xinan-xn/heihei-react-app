import React from 'react';
import '../../css/yo-detail.css'
import '../../css/zm-detail.css'
import Banner from '../../component/Banner'
import Container from '../yango/container'
import Foot from '../yango/detail-foot'
function Detail (){
    return (
        <div className="warp">
            <Banner></Banner>
            <Container></Container>
            <Foot></Foot>
        </div>
    )
}

export default Detail