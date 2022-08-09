import React,{useState} from 'react'
import { FaArrowCircleLeft,FaArrowCircleRight,FaStar,FaShoppingCart } from 'react-icons/fa'

import peaches from '../images/peaches.png'
import cabbage from '../images/cabbage.png'
import strawberry from '../images/strawberry.png'
import apple from '../images/apple.png'
import oranges from '../images/oranges.png'
import irishpotatoes from '../images/irishpotatoes.png'
import carrots from '../images/carrots.png'
import reddish from '../images/reddish.png'


function Categories(props) {

    const {featured} = props;


  
  return (
    <div>
        <div className='flex '>
            <h1 className='text-2xl text-[#253D4E] pl-32 pt-16'>Explore Categories</h1>
          
        </div>
       
        
        <div className=' ml-16 flex mt-8 overflow-x-auto'>
        <i className='text-4xl text-gray-200 pr-4 pt-28'><FaArrowCircleLeft /></i>
        
            <div className='h-auto pb-6 w-52 bg-[#FEEFEA] ml-4'>
              <img src={peaches} alt="peaches" className='mt-8' />
              <h1 className='text-center pt-10 '>Peach</h1>
              <p className='text-center '>20 items</p>
            </div>
            <div className='h-auto pb-6 w-52 bg-[#FFF3FF] ml-8'>
            <img src={cabbage} alt="cabbage" className='mt-8' />
            <h1 className='text-center placeholder-violet-100 pt-10 '>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='h-auto pb-6 w-52 bg-[#F2FCE4] ml-8'>
            <img src={strawberry} alt="strawberry" />
            <h1 className='text-center '>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='h-auto pb-6 w-52 bg-[#FEEFEA] ml-8'>
            <img src={apple} alt="apple" />
            <h1 className='text-center'>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='h-auto pb-6 w-52 bg-[#ECFFEC] ml-8'>
            <img src={oranges} alt="oranges" />
            <h1 className='text-center'>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='h-auto pb-6 w-52 bg-[#FFFCEB] ml-8'>
            <img src={irishpotatoes} alt="irishpotatoes" />
            <h1 className='text-center '>Peach</h1>
              <p className='text-center'>20 items</p>
            </div>
            <div className='h-auto pb-6 w-52 bg-[#DEF9EC] ml-8'>
            <img src={carrots} alt="carrots" />
            <h1 className='text-center '>Peach</h1>
              <p className='text-center'>20 items</p>
              
            </div>
            
           
            <i className='text-4xl text-gray-200 mt-28 ml-4 '><FaArrowCircleRight /></i>
        </div>
       
        
        <div className='flex justify-center mt-6'>
        <i className='text-4xl text-gray-200 pr-4 pt-48' ><FaArrowCircleLeft /></i>
        <div className='flex w-[90%] overflow-x-scroll overflow-hidden ' id='scrollable'>
        {featured.map(features=>(
            
     <div className='h-auto pb-8 w-80 mr-4  mt-10 border-solid border-[1px] border-gray-200' id='slider'>
          <img src={features.src} alt="reddish" />
          <p className='text-xs pl-8 text-[#D4D4D4]'>{features.type}</p>
          <h1 className='pl-8 pt-2'>{features.name}</h1>
          <div className='flex pl-8 pt-4'>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#FDC040]'><FaStar /></i>
          <i className='text-[#D4D4D4]'><FaStar /></i>
          <p className=' text-[#D4D4D4] text-xs'>(4)</p>
         </div>
         <p className='text-sm pt-4 pl-8  '>By <span className='text-sm text-[#3BB77E]'>{features.owner}</span></p>
         <div className='flex justify-center'>
         <p className='text-[#3BB77E] pr-6 pt-4'>{features.dollars}<span className='text-[#D4D4D4] line-through'>{features.amount}</span></p>
         <button className='text-[#3BB77E] flex h-10 mt-2 pt-3 w-auto pl-4 pr-4 bg-[#DEF9EC]'><i className='text-[#3BB77E] pr-4'><FaShoppingCart /></i>Add</button>
         </div>
         </div>
       
        ))}
       </div>
         <i className='text-4xl text-gray-200 mt-48  '><FaArrowCircleRight /></i>
        </div>
    </div>
  )
}

export default Categories