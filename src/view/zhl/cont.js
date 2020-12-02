import { getKeyThenIncreaseKey } from 'antd/lib/message';
import React,{Component} from 'react'
import './page.css'



const data=[
    {
        id:1,
        title:'web讲师',
        renshu:'人数：人数不限，多多益善',
        money:'薪资：面议'
    },
    {   id:2,
        title:'课程顾问',
        renshu:'人数：3人',
        money:'薪资：底薪+提成'
    },
    {   
        id:3,
        title:'客服',
        renshu:'人数：3人',
        money:'薪资：面议'
    },
    {   
        id:4,
        title:'行政前台助理',
        renshu:'人数：3人',
        money:'薪资：底薪+提成'
    }
 ]

class Cont extends Component{
    constructor(props){
        super(props)
        this.state = {
         lists:[],
         isLoad:false,
         index:0
      }
     }
    isLoad(index,e){
        this.setState({
            isLoad:true,
            index 
        })
    }
    end(e){
        this.setState({
            isLoad:false
        })
    }


    
    render(){
        return <div>
                    <div className="teacher_index">
                        <h2>加入我们</h2>
                    <ul className="teacher_list">
                        {data.map((item,index)=>{
                            return(
                                <li key={item+index} 
                                    onTouchStart={this.isLoad.bind(this,index)}
                                    onTouchEnd={this.end.bind(this)}
                                    className={ this.state.index===index? "active" : ""}
                                >
                                <div className="mess_li">
                                    <h5 id="item.id">{item.title}</h5>
                                    <p>{item.renshu}</p>
                                    <p>{item.money}</p>
                                </div>
                            </li>
                            )
                        })}
                        
                        
                    </ul>
                    <div className="welcome clearfix">
                        <div className="welcome_photo">
                                <img></img>
                        </div>
                        <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
                            <span>本招聘信息长期有效</span>
                        </p>
                    </div>
                </div>
            </div>
        }
    
    }

export default Cont;