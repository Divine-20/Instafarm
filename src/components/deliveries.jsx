import React from 'react'
import { FaArrowRight} from 'react-icons/fa'
import Rectangle1 from '../images/Rectangle1.svg'
import Offer1img from '../images/Offer1img.png'
import HreoImg from '../images/HreoImg.png'

function Deliveries() {
  return (
    <div className='flex justify-center mt-10'>
      <div className="  h-[60vh] w-[40vw] flex mr-24" style={{backgroundImage:`url(${Rectangle1})`}}>
         <div className='h-[60vh] w-[40vw] bg-[#FFF5E1] opacity-70 pl-20'>
                <img src={Offer1img} alt="offer" className='h-[40vh] float-right pl-40 mt-20' />
         <button className='h-12 w-auto pl-6 pr-6 mt-40 text-white bg-[#FFD480]'>Free delivery</button>
      <h1 className='text-2xl pt-6'>Free delivery over $50</h1>
      <p>Shop $50 product and get free delivery anywhere.</p>
      <button className='h-16 mt-10 w-auto pl-8 pr-8 flex pt-6 text-white bg-[#3BB77E]'>Shop now<i className='pl-4 pt-1'><FaArrowRight /></i></button>
      </div>
      </div>
      <div className="  h-[60vh] w-[40vw]" style={{backgroundImage:`url(${Rectangle1})`}}>
      <div className='h-[60vh] w-[40vw] bg-[#D2EFE1] opacity-70 pl-20'>
      <img src={HreoImg} alt="offer" className='h-[40vh] mt-20 float-right' />
      <button className='h-12 pl-6 pr-6 mt-40 w-auto text-white bg-[#3BB77E]'>60% off</button>
      <h1 className='text-2xl pt-6'>Organic food</h1>
      <p>Save up to 60% off your first order</p>
      <button className='h-16 mt-10 w-auto pl-8 pt-6 pr-8 flex text-white bg-[#3BB77E]'>Order now<i className='pl-4 pt-1'><FaArrowRight /></i></button>

      </div>
      
      </div>
       <div></div> 
    </div>
  )
}

export default Deliveries;