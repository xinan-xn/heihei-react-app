import React from "react";
import './page.css';
import Nav from './nav'
import Cont from './cont'
import Footer from './footer'
import Aside from './aside'
function Div(){
    return(
        <div className="pageWrap">
            <div>
                <div id="main" height='{{8.893333rem}}'>
                    <div className="pageWrap">
                        <div>
                            <Nav></Nav>
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