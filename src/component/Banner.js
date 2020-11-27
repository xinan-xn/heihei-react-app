// 轮播图组件
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import imgUrl from '../images/banner1.jpg'
import imgUrl1 from '../images/banner2.jpg'
import imgUrl2 from '../images/banner3.jpg'
import imgUrl3 from '../images/banner4.jpg'

const contentStyle = {
    width: "100%",
    height: "6.13rem",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'green',
};
const imgstyle = {
    height: '100%',
    width: '100%'
}
const transfrom={
    transform: 'translateX(4.5rem)'
}
const arr = [imgUrl, imgUrl1, imgUrl2, imgUrl3]
function Banner() {
    return (
        <div>
        <Carousel autoplay>{
            arr.map((item, index) => {
                return (
                    <div>
                        <h3 style={contentStyle}>
                            <img style={imgstyle} src={item}></img>
                        </h3>
                    </div>
                )
            })
        }
        </Carousel>
        </div>)
}
export default Banner