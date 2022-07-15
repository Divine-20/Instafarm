import React from 'react'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'
import  flour from '../images/flour.png'

function Sells() {
  return (
    <div>
        <div className='flex ml-36 mt-24'>
            <h1 className='text-3xl text-[#253D4E] font-bold pt-2'>Daily Best sells</h1>
            <div className='flex ml-36'>
            <ul className='flex mt-4'>
                <li>Feautured</li>
                <li className='pl-10'>Popular</li>
                <li className='pl-10'>New</li>
            </ul>
            <button className='h-14 w-auto bg-[#F35244] text-white pl-10 pr-10 rounded-sm ml-20'>Expires in: 10:56:21</button>
            </div>
            <div className='absolute flex right-52 mt-2'>
          <i className='text-4xl text-[#F2F3F4] mr-4'><FaArrowCircleLeft /></i>
          <i className='text-4xl text-[#F2F3F4]'><FaArrowCircleRight /></i>
          </div>
        </div>
        <div>
            <div>
                <button>Save</button>
                <img src={flour} alt="flour" />
                

            </div>
        </div>
    </div>
  )
}

export default Sells;