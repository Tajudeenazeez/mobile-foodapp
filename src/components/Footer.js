import React from 'react'
import { AiOutlineOrderedList } from 'react-icons/ai'
import {ImSpoonKnife} from "react-icons/im"
import {SiHomeassistantcommunitystore} from "react-icons/si"
import "../asset/style/footer.css"

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer-fa'>
              <ImSpoonKnife/>
              <SiHomeassistantcommunitystore/>
              <AiOutlineOrderedList/>
            </div>
            <div className='footer-caption'>
                <p className='footer-sub'>Dishes</p>
                <p className='footer-sub'>Foodpoint</p>
                <p className='footer-sub'>My orders</p>
            </div>
        </div>
    </>
  )
}

export default Footer