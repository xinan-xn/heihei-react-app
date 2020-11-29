import React from 'react';
import '../../css/yo-detail.css'
import '../../css/zm-detail.css'
import Banner from '../../component/Banner'
import Container from '../yango/container'
import Foot from '../yango/detail-foot'
import Bottom from './bottom-f'
function Detail (){
    return (
        // <div>
            <div className="warp">
                {/*轮播图*/}
                <Banner></Banner>
                {/*主体内容*/}
                <Container></Container>
                {/*底部*/}
                <Foot></Foot>
                {/*回复本贴*/}
              <Bottom></Bottom>
                {/* <div className="aaa">123</div> */}
            </div> 
        
        // </div>
    )
}

export default Detail