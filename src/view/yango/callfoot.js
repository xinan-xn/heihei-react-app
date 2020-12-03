import React, { Fragment, useState, useEffect } from "react"
import { isLogin, addcomment, getcomment } from "../../server/api"
function CallFoot(props) {
    // console.log(props.isLogi)
    // let [isLo, setIslo] = useState(props.isLogi)
    let [isLogi, setLogi] = useState(false);
    let [textValue, setTextValue] = useState('');
    let { artid,FooData } = props
    useEffect(async () => {
        //是否登录

    })
    // console.log(isLo)
    return (
        <Fragment>
            <footer
                onTouchEnd={async () => {
                    let flag = await isLogin()
                    if (flag.data.code === 0) {
                        setLogi(true)
                        console.log("登陆了可以评论")
                    } else if (flag.data.code === 1) {
                        setLogi(false)
                      alert('未登录')
                    }
                }}
                className={"f-footer " + (isLogi ? "show" : "unshow")}
            >回复本帖</footer>
            <div
                className={"message_wrap " + (isLogi ? "unshow" : "show")}
            >
                <textarea
                    className="textarea"
                    value={textValue}
                    onChange={({ target }) => {
                        setTextValue(target.value)
                        console.log(target.value)
                    }}
                />
                <footer className="f-footer"
                    onTouchEnd={async () => {
                        let sendComment = await addcomment({
                            article_id: artid,
                            content: textValue
                        })
                        let newcomment = await getcomment({
                            article_id: artid
                        })
                        console.log(newcomment)
                        FooData(newcomment.data)
                        setLogi(!isLogi)
                        setTextValue('')
                    }}
                >发表评论</footer>
            </div>
        </Fragment>

    )
}
export default CallFoot;