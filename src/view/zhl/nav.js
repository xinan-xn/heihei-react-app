import React,{} from 'react';
import Banner from "../zhl/Banner"
import './page.css';
function Nav(props){
    // let [arr] = props
    return (
    <div className="teacher_banner">
        <h2>
            <span></span>
        </h2>
        {/* <div className="banner">
            <div className="banner_img">
                <ul className="banner_list clearfix">
                    <li>
                        <ul className="lecturer_list">
                            <li>
                                <img src={require('../../images/teacher_photo.png').default}></img>
                                <p>莫涛</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <ul className="banner_nav">
                <li className=""></li>
                <li className=""></li>
                <li className=""></li>
            </ul>
        </div> */}
    <Banner  ></Banner>
    </div>
    )
}

export default Nav