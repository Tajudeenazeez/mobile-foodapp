import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import "../asset/style/header.css"
const Header = () => {
  return (
    <>
        <div className='header'>
          <h2>Foodgist</h2>
            <div className='header-title'>
              <IoMdNotifications/>
              <FaCartPlus className='cart'/>
              <BsFillPersonFill/>
            </div>
        </div>
    </>
  )
}

export default Header