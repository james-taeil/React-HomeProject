import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( { title }) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            <h1>{title}</h1>
            <Button onClick={onClick} text='hello'/>
            
        </header>
    )
}

//-----------------------------------------------
// 부모 컴포넌트에 아무 값이 없을 때, 기본 값 설정

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


//CSS in JS
// const headingStyle = {
//     color:'red', 
//     backgroundColor: "black"
// }

export default Header
