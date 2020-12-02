// 轮播图组件
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import imgUrl4 from '../../images/teacher_photo.png'
import imgUrl5 from '../../images/teacher_photo.png'
import imgUrl6 from '../../images/teacher_photo.png'
const arr = [
    { id: 1, 'url': imgUrl4 , name:"莫涛"},
    { id: 2, 'url': imgUrl5 , name:"莫涛"},
    { id: 3, 'url': imgUrl6 , name:"莫涛"},
]
function Banner() {
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
                                    <li>
                                        <img src={item.url}></img>
                                        <p>{item.name}</p>
                                    </li>
                                    <li>
                                        <img src={item.url}></img>
                                        <p>{item.name}</p>
                                    </li>
                                    <li>
                                        <img src={item.url}></img>
                                        <p>{item.name}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul>
                        <li className="" key={item.id}></li>
                    </ul>
                </div>
                    )
                })
            }
            </Carousel>
        </div>)
}
export default Banner