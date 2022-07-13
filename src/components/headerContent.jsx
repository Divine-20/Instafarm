import React from 'react'
import logo from '../images/logo.png'
import image from '../images/image.jpg'
import { FaRegHeart,FaShoppingCart,FaAngleDown,FaSearch } from 'react-icons/fa'
function HeaderContent() {
  return (
    <div>
        <nav className='flex h-auto pb-8 border-b-[1px]  '>
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
           <i className='pt-12 text-3xl pl-[5%]'><FaRegHeart /></i><span className='pt-14 pl-2'>Wishlist</span>
           <i className='pt-12 text-3xl pl-[5%]'><FaShoppingCart /></i><span><h1 className='pt-10 pl-4'>Cart</h1><p className='pl-4 text-[#3BB77E] '>$10</p></span>
           <i className='pt-14 pl-4 text-2xl '><FaAngleDown /></i>
           
            <img src={image} alt="profile" className='rounded-full w-16 h-16 mt-8 ml-20 '/>
            <p className='pt-14 pl-4'>Apple Red</p> 
            <i className='pt-[2.3em] pl-4 text-2xl'><FaAngleDown /></i>

        </nav>
        
    </div>

  )
}

export default HeaderContent;