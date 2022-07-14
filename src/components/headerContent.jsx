import React from 'react'
import logo from '../images/logo.png'
import image from '../images/image.jpg'
import { FaRegHeart,FaShoppingCart,FaAngleDown,FaSearch,FaThLarge,FaHome,FaFire,FaPercentage,FaRegBell,FaPhone } from 'react-icons/fa'
function HeaderContent() {
  return (
    <div>
        <nav className='flex h-auto pb-8 border-b-[1px] ml-20 '>
            <div className='flex ml-10 mt-4'>
          <img src={logo} alt = "logo"  className='h-20'/>
<div className='block'>
 <h1 className='text-2xl text-[#3BB77E] font-bold pt-4'>Instafarm</h1>
<p className='text-gray-600'>farms.</p>
</div>

</div>  
<div className='mt-6 bg-[#F3F3F3] ml-32 h-20 w-auto pr-5 ' >
    <form action="" className='flex pt-4 '>
        <select name="" id="" className='w-44 ml-4  pl-4'>
            <option value="All categories">All categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
        </select>
        <div className='h-6 w-[1px] bg-gray-600 ml-4 mt-2'></div>
       <input type="search" placeholder='Search for items' className='pl-6 w-[20vw] ml-4'/>
       <div className='bg-[#3BB77E] w-16 pl-4 pt-2'>
           <i className='text-2xl text-white '><FaSearch /></i>
       </div>
         
    </form>
    </div>
           <i className='pt-14 text-xl pl-[3%]'><FaRegHeart /></i><span className='pt-14 pl-2'>Wishlist</span>
           <i className='pt-14 text-xl pl-[3%]'><FaShoppingCart /></i><span><h1 className='pt-12 pl-4'>Cart</h1><p className='pl-4 text-[#3BB77E] '>$10</p></span>
           <i className='pt-16 pl-4 text-xl '><FaAngleDown /></i>
           
            <img src={image} alt="profile" className='rounded-full w-16 h-16 mt-8 ml-14 '/>
            <p className='pt-14 pl-4'>Apple Red</p> 
            <i className='pt-[2.8em] pl-2 text-xl'><FaAngleDown /></i>

        </nav>
        <div className='flex ml-32 '>
            <ul className='flex mt-4'>
          <li><button className='bg-[#3BB77E] w-auto pr-5 h-14 flex pt-5 pl-4 text-white '><i className='pr-4 text-xl text-white'><FaThLarge /></i>Brows All Categories</button></li>
          <li className='pl-52 flex mt-6 '><i className='pr-4'><FaHome /></i>Home</li>
          <li className='pl-16 flex mt-6'><i className='pr-4'><FaFire /></i>Hot deals</li>
          <li className='pl-16 flex mt-6'><i className='pr-4'><FaPercentage /></i>Promotions</li>
          <li className='pl-16 flex mt-6'><i className='pr-4'><FaRegBell /></i>New products</li>
          <li className='pl-[10rem] flex mt-6'><i className='pr-4'><FaPhone /></i>1233-7777 <span>24/7 support center</span></li>
          </ul>
        </div>
    </div>

  )
}

export default HeaderContent;