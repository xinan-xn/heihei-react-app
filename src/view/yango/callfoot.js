import React, { Fragment, useState } from "react"
// import { isLogin } from "../../server/api"
function CallFoot(props) {
    // console.log(props.isLogi)
    let [isLo, setIslo] = useState(props.isLogi)
    // console.log(isLo)
    return (
        <Fragment>
            <footer
                onTouchEnd={() => {
                    setIslo(!isLo)
                }}
                className={"f-footer " + (isLo ? "show" : "unshow")}
            >回复本帖</footer>
            <div
                className={"message_wrap " + (isLo ? "unshow" : "show")}
            >
                <textarea
                    className="textarea"
                    onChange={(e) => {

                    }}
                />
                <footer className="f-footer"
                 onTouchEnd={() => {
                    // console.log(isLo)
                    setIslo(!isLo)
                }}
                >发表评论</footer>
            </div>
        </Fragment>

    )
}
export default CallFoot;