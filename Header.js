import React from 'react'

const Header = ({title,length}) => {
  return (
    <header>
        <h1>{title}</h1>
        <p>{(length!==0)?length+" more works!! Hurry up!!":"Empty...add your work"}</p>
    </header>
  )
}
Header.defaultProps={
  title:"To-Do List"
}
export default Header