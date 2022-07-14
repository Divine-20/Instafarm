import React from 'react'
import { FaArrowCircleLeft,FaArrowCircleRight } from 'react-icons/fa'

import peaches from '../images/peaches.png'
import cabbage from '../images/cabbage.png'
import strawberry from '../images/strawberry.png'
import apple from '../images/apple.png'
import oranges from '../images/oranges.png'
import irishpotatoes from '../images/irishpotatoes.png'
import carrots from '../images/carrots.png'

function Categories() {
  return (
    <div>
        <div className='flex'>
            <h1 className='text-2xl text-[#253D4E] pl-32 pt-16'>Explore Categories</h1>
        </div>
        <div className='flex ml-32 mt-8'>
            <i><FaArrowCircleLeft /></i>
            <div className='auto pb-6 w-52 bg-[#FEEFEA] '>
              <img src={peaches} alt="peaches" className='mt-8' />
              <h1 className='text-center pt-10 '>Peach</h1>
              <p className='text-center '>20 items</p>
            </div>
            <div className='auto pb-6 w-52 bg-[#FFF3FF] ml-8'>
            <img src={cabbage} alt="cabbage" className='mt-8' />
            <h1 className='text-center placeholder-violet-100 pt-10 '>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='auto pb-6 w-52 bg-[#F2FCE4] ml-8'>
            <img src={strawberry} alt="strawberry" />
            <h1 className='text-center '>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='auto pb-6 w-52 bg-[#FEEFEA] ml-8'>
            <img src={apple} alt="apple" />
            <h1 className='text-center'>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='auto pb-6 w-52 bg-[#ECFFEC] ml-8'>
            <img src={oranges} alt="oranges" />
            <h1 className='text-center'>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='auto pb-6 w-52 bg-[#FFFCEB] ml-8 '>
            <img src={irishpotatoes} alt="irishpotatoes" />
            <h1 className='text-center '>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='auto pb-6 w-52 bg-[#DEF9EC] ml-8'>
            <img src={carrots} alt="carrots" />
            <h1 className='text-center '>Peach</h1>
              <p className='text-center'>20 items</p>
              <i><FaArrowCircleRight /></i>
            </div>
        </div>
    </div>
  )
}

export default Categories