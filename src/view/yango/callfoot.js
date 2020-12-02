import React from "react"
function CallFoot(props) {
    console.log(props)
    return (

       <footer className="f-footer"
            onClick={() => {
                if (!props.isLogi) {
                    
                }else{

                }
            }}
        >回复本帖</footer>
    )
}
export default CallFoot;