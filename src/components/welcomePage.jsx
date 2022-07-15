import React from 'react'
import Rectangle1 from '../images/Rectangle1.svg'
import HreoImg from '../images/HreoImg.png'
import { FaPaperPlane} from 'react-icons/fa'

function WelcomePage() {
  return ( <div className="  h-[78vh] w-full" style={{backgroundImage:`url(${Rectangle1})`}}>
   
        <div className='h-auto pb-8 w-[95%] bg-[#C5EAD9] float-right opacity-90'>
          <img src={HreoImg} alt="hreoimg" className='h-[75vh] float-right' />
          <h1 className='text-7xl pl-8 mt-52 text-[#253D4E]'>Don't miss our daily amazing deals.</h1>
          <p className='pl-10 pt-12 text-[#838383] text-2xl'>Save up to 60% off on your first order</p>
          <form action="" className='flex ml-10 mt-20'>
               <i className='pt-6 absolute pl-6'><FaPaperPlane /></i>
              <input type="text" className='h-16 w-2/4 pl-14 pt-2' placeholder='Enter email address'/>
              <button className='bg-[#3BB77E] w-auto pl-8 pr-8 pt-2 text-white'>Subscribe</button>
          </form>
        </div>
    </div>
  )
}

export default WelcomePage