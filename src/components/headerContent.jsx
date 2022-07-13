import React from 'react'
import logo from '../images/logo.png'
import image from '../images/image.jpg'
import { FaRegHeart,FaShoppingCart,FaCaretDown,FaSearch } from 'react-icons/fa'
function HeaderContent() {
  return (
    <div>
        <nav className='flex h-20 '>
            <div className='flex ml-10 mt-4'>
          <img src={logo} alt = "logo"  className='h-20'/>
<div className='block'>
 <h1 className='text-2xl text-[#3BB77E] font-bold pt-4'>Instafarm</h1>
<p className='text-gray-600'>farms.</p>
</div>

</div>  
<div className='mt-6 bg-[#F3F3F3] ml-20 h-20 w-auto pr-5 ' >
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
           <i className='pt-6 text-3xl'><FaRegHeart /></i>
           <i className='pt-6 text-3xl'><FaShoppingCart /></i>
           
            <img src={image} alt="profile" className='rounded-full w-20 h-20'/>
            <p className='pt-8'>Apple Red</p>
            <i className='pt-8 text-2xl'><FaCaretDown /></i>

        </nav>
    </div>
  )
}

export default HeaderContent;