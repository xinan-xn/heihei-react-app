import React, { Component } from "react";
import '../../common/css/teacher.css'
import Swiper from "swiper"
import '../../../node_modules/swiper/swiper-bundle.cjs'
import "../../../node_modules/swiper/swiper-bundle.css"
import Aside from './aside'
import { apiShouye, apiJstema, detail, login } from '../../request/api'




class Lecturer extends Component {
   constructor(props) {
      super(props)
      this.state = {
         lists: [],
         isLoad: false,
         index: 0
      }
   }
   componentDidMount() {
      apiShouye({
         order: "asc",
         sort: '0',
         category_id: '1',
         recommend: '1'
      }).then(res => {
         // console.log('OK');
         // console.log(res)
      })
      apiJstema({
         category_id: 2,
         recommend: 0
      }).then(res => {
         console.log(this)
         console.log(res)
         this.state.lists = res;
         this.setState({
            lists: res
         })
         // console.log(this.state.lists)
      })
      detail({
         article_id: 5
      }).then(res => {
         // console.log(res)
      })
      login().then(res => {
         // console.log(res)
      })
      new Swiper('.swiper-container', {
         loop: true, // 循环模式选项
         autoplay: {// 自动滑动
            delay: 1000, //3秒切换一次
            // stopOnLastSlide: false,
            disableOnInteraction: true,
         },
      })
   }

   isLoad(index, e) {
      this.setState({
         isLoad: true,
         index
      })
      console.log(this.state.isLoad)
   }
   end(e) {
      this.setState({
         isLoad: false
      })
   }
   bandd(index, e) {
      this.setState({
         display: none,
         index
      })
   }
   and(e) {
      this.setState({
         display: block
      })
   }
   render() {
      return <div>

         <div>

            <div className="teacher_index">
               <h2>加入我们</h2>
               <ul className="teacher_list clearfix">
                  {data.map((item, index) => {
                     return (
                        <li key={item + index}
                           onTouchStart={this.isLoad.bind(this, index)}
                           onTouchEnd={this.end.bind(this)}
                           className={this.state.index === index ? "active" : ""}
                        >
                           <div className="message_li">
                              <h3 id={item.id}>{item.title}</h3>
                              <p>{item.renshu}</p>
                              <p>{item.money}</p>
                           </div>
                        </li>
                     )
                  })}
               </ul>
               <div className="welcome clearfix">
                  <div className="welcome_photo">
                     <img src={require('../../common/images/xiaole.png').default}></img>
                  </div>
                  <p>
                     欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
                        <span>本招聘信息长期有效</span>
                  </p>
               </div>
            </div>

            <footer id="footer">
               <div className="link clearfix">
                  <a href="#">hr_recruit@miaov.com</a>
                  <a href="#">010-57269690</a>
               </div>
               <nav className="foot_nav clearfix">
                  <a href="#">网站首页</a>
                  <a href="#">课程安排</a>
                  <a href="#">学员作品</a>
                  <a href="#">视频教程</a>
                  <a href="#">关于我们</a>
                  <a href="#">在线留言</a>
                  <a href="#">常见问题</a>
               </nav>
               <p className="copyright">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
            </footer>
         </div>
      </div>;
      <Aside id={id} arr={arr}></Aside>


   }





}


export default Lecturer;
