import React from 'react'
import { IoIosPhonePortrait,IoIosDesktop } from "react-icons/io";

function Header({title,width}) {
  console.log(width)
  return (
    <header className='Header'>

      <h1>{title}</h1>
      {width > 720 ? <IoIosDesktop/>:<IoIosPhonePortrait/>}
    </header>
  )
}

Header.defaultProps ={
  title: "React Blog"
}

export default Header