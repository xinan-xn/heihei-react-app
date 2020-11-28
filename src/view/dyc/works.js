import React from "react"
import { Link } from "react-router-dom"
import "../../css/home.css"
// import { Link } from 'react-router-dom'
function Works() {
    return (
        <div className="works">
            <p className="works_txt">学员作品</p>
            <div className="works_cont">
                <ul>
                    <li>
                        <Link to="/detail">
                            <span className="works_tit">
                                <storing>时光唱片机</storing>
                                <span>
                                    <em>
                                        <i></i>
                                        <font>22</font>
                                    </em>
                                    <em>
                                        <i></i>
                                        <font>22</font>
                                    </em>
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <span className="works_tit">
                            <storing>时光唱片机</storing>
                            <span>
                                <em>
                                    <i></i>
                                    <font>22</font>
                                </em>
                                <em>
                                    <i></i>
                                    <font>22</font>
                                </em>
                            </span>
                        </span>
                    </li>
                    <li>
                        <span className="works_tit">
                            <storing>时光唱片机</storing>
                            <span>
                                <em>
                                    <i></i>
                                    <font>22</font>
                                </em>
                                <em>
                                    <i></i>
                                    <font>22</font>
                                </em>
                            </span>
                        </span>
                    </li>
                    <li>
                        <span className="works_tit">
                            <storing>时光唱片机</storing>
                            <span>
                                <em>
                                    <i></i>
                                    <font>22</font>
                                </em>
                                <em>
                                    <i></i>
                                    <font>22</font>
                                </em>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Works;