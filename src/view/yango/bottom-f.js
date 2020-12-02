import React from "react"
import { useState, useEffect } from 'react'

//登陆成功后点击
function Message(props) {

    return (<div
        className="message_wrap"

    >
        <textarea
className="textarea"
            onChange={(e) => {
                
            }}
        />
        <footer className="f-footer"
            onClick={() => {

            }}
        >发表评论</footer>
    </div>)
}
export default Message;