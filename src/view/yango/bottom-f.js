import React from "react"


const footer1={
    width: '100%',
    height: '1.14666667rem',
    background: '#e64d6b',
    bottom: 0
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