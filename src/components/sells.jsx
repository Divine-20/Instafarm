import React from 'react'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'

function Sells() {
  return (
    <div>
        <div className='flex'>
            <h1>Daily Best sells</h1>
            <ul className=''>
                <li>Feautured</li>
                <li>Popular</li>
                <li>New</li>
            </ul>
            <button className='h-14 w-auto bg-[#F35244] text-white pl-10 pr-10 rounded-sm'>Expires in: 10:56:21</button>
            <div className='absolute flex right-40'>
          <i><FaArrowCircleLeft /></i>
          <i><FaArrowCircleRight /></i>
          </div>
        </div>
    </div>
  )
}

export default Sells;