import React from 'react'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'
import  flour from '../images/flour.png'

function Sells(props) {
    const {sells} = props;
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
            {sells.map(sell=>(
           <div>
                <button>Save</button>
                <img src={sell.src} alt="flour" />
                <p className='text-xs pl-8 text-[#D4D4D4]'>{sell.type}</p>
          <h1 className='pl-8 pt-2'>{sell.name}</h1>
          <div className='flex pl-8 pt-4'>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#D4D4D4]'><FaStar /></i>
          <p className=' text-[#D4D4D4] text-xs'>(4)</p>
         </div>
         <p className='text-sm pt-4 pl-8  '>By <span className='text-sm text-[#3BB77E]'>{sell.owner}</span></p>
         <div className='flex justify-center'>
         <p className='text-[#3BB77E] pr-6 pt-4'>{features.dollars}<span className='text-[#D4D4D4] line-through'>{sell.amount}</span></p>

            </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Sells;