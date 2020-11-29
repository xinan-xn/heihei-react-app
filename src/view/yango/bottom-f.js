import React from "react"


const footer1={
    position: 'fixed',
    width: '100%',
    height: '1.14666667rem',
    background: '#e64d6b',
    // top: '100px',
    bottom: 0
    /* margin: 0 auto; */
    /* z-index: 10; */
}

const  p={
    fontSize:'0.4rem',
    textAlign: 'center',
    lineHeight:' 1.146667rem',
    fontWeight: 'bold',
    color: '#fff'
}
function Bottom() {
    return (
        <footer style={footer1}>
            <p style={p}>回复本帖</p>
        </footer>
    )
}

export default Bottom;