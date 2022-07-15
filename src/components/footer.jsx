import React from 'react'
import logo from '../images/logo.png'
 import { FaLocationArrow,FaPhone,FaRegEnvelope,FaClock,FaFacebook,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'
 import Payment from '../images/Payment.png'

function Footer() {
  return (
    <div>
        <div className='flex mt-20 border-b-2 border-solid border-gray-200 pb-14'>
        <div className='ml-20'>
                    <div className='flex ml-10 mt-4'>
          <img src={logo} alt = "logo"  className='h-20'/>
<div className='block'>
 <h1 className='text-2xl text-[#3BB77E] font-bold pt-4'>Groceyish</h1>
<p className='text-gray-300'>GROCERY</p>
</div>

</div> 
<ul className='ml-14 mt-8'>
    <li className='flex text-[#253D4E]'><i className='pr-4 text-xl  text-[#3BB77E]'><FaLocationArrow /></i>Address:1762 School House Road</li>
    <li className='flex pt-4 text-[#253D4E]'><i className='pr-4 text-xl  text-[#3BB77E]'><FaPhone /></i>Call Us:1233-777</li>
    <li className='flex pt-4 text-[#253D4E]'><i className='pr-4 text-xl text-[#3BB77E]'><FaRegEnvelope /></i>Email:groceyish@contact.com</li>
    <li className='flex pt-4 text-[#253D4E]'><i className='pr-4 text-xl text-[#3BB77E]'><FaClock /></i>Work hours:8:00 - 20:00, Sunday -  Thursday</li>
</ul>

</div>

<ul className='flex mt-10 absolute right-40 '>

 <div className='mr-40 '>
 <h1 className='text-xl text-[#253D4E]'>Accountant</h1> 
 <ul>
 <li className='pt-4'>Wishlist</li>
 <li className='pt-4'>Cart</li>
 <li className='pt-4'>Track Order</li>
 <li className='pt-4'>Shipping Details</li>
 </ul>
 </div>

 <div className='mr-40'>
 <h1 className='text-xl text-[#253D4E]'>Useful links</h1>
 <ul>
 <li className='pt-4'>About Us</li>
 <li className='pt-4'>Contact</li>
 <li className='pt-4'>Hot deals</li>
 <li className='pt-4'>Promotions</li>
 <li className='pt-4'>New products</li>
 </ul>
 </div>
 <div className='mr-40'>
 <h1 className='text-xl text-[#253D4E]'>Help center</h1>
 <ul>
 <li className='pt-4'>Payments</li>
 <li className='pt-4'>Refund</li>
 <li className='pt-4'>Checkout</li>
 <li className='pt-4'>Shipping</li>
 <li className='pt-4'>Q&A</li>
 <li className='pt-4'>Privacy Policy</li>
 </ul>
 
 </div>
 
</ul>

</div>
<div className='flex justify-evenly mt-12 pb-10'>
<p className='pt-4'>© 2022, All rights reserved</p>
<img src={Payment} alt="payment" className='w-[20vw]' />
<div className='flex mt-4'>
<i className='text-2xl'><FaFacebook /></i>
<i className='text-2xl ml-4'><FaLinkedin /></i>
<i className='text-2xl ml-4'><FaInstagram /></i>
<i className='text-2xl ml-4'><FaTwitter /></i>
</div>
</div>

    </div>
  )
}

export default Footer