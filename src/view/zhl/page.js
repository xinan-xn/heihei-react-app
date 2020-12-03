import React,{useEffect,useState} from "react";
import './page.css';
import Nav from './nav'
import Cont from './cont'
import Footer from './footer'
import Aside from './aside'

import {getList} from '../../server/api'

function Div(){
    let [arr,setArr] = useState([])
    // let [id,setId] = useState('')
    useEffect( () => {
         getList({order:'desc',sort:"sort",category_id:2,recommend:0}).then(res=>{
            // console.log(res)
            setArr(res.data)
        })
           
       
    })
    // console.log(arr)
    return(
        <div className="pageWrap">
            <div>
                <div id="main" height='{{8.893333rem}}'>
                    <div className="pageWrap">
                        <div>
                            <Nav arr={arr} ></Nav>
                            <Cont></Cont>
                        </div>                       
                        <Footer></Footer>
                    </div>
                    <Aside></Aside>
                </div>
            </div>
        </div>
    )
}
export default Div