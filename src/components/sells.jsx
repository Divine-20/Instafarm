import React from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight, FaStar, FaShoppingCart } from 'react-icons/fa'
import flour from '../images/flour.png'
import Rectangle1 from '../images/Rectangle1.svg'

function Sells(props) {
  const { sells } = props;
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
      <div className='flex justify-evenly'>
        <div className='flex justify-evenly mt-10'>
          {sells.map(sell => (
            <div className='h-auto pb-8 w-64 mr-4  mt-10 border-solid border-[1px] border-gray-200 '>
              <button className='bg-[#FFD480] text-white w-auto pl-2 pr-2 h-8'>{sell.action}</button>
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

              <p className='text-[#3BB77E] pl-8 pr-6 pt-4 '>{sell.dollars}<span className='text-[#D4D4D4] line-through pl-4'>{sell.amount}</span></p>
              <div className='block'>
                <form action="" className='ml-8'>
                  <input type="range" className='text-green' />

                </form>
                <div className='ml-8'>
                  <p className='text-[#253D4E]'>sold: {sell.rate}</p>
                  <button className='flex  w-auto pr-10  pt-4 h-12  pl-8 bg-[#3BB77E] text-white mt-4 '><i className='pr-4'><FaShoppingCart /></i>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="  h-auto w-64" style={{ backgroundImage: `url(${Rectangle1})` }}>
          <div className='bg-[#FFF7E6] h-auto w-64'>
            <h1>10% off</h1>
            <p>For a new member sign up for the first time</p>
            <form action="">
              <label htmlFor="">Email address</label>
            </form>
          </div>
         
          </div>
        </div>
        </div>
        
        )
}

        export default Sells;