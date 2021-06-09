import React from 'react'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} style={{ backgroundColor: color}}>{text}</button>
    )
}

Button.defaultProps = {
    color: "steelblue",
}

// Button.propsTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string,
//     onClick: PropTypes.func,
// }

export default Button
