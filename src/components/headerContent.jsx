import React from 'react'
import logo from '../images/logo.png'
import {Faheart,FaAdjust} from 'react-icons/fa'
function HeaderContent() {
  return (
    <div>
        <nav className='flex'>
            <div className='flex'>
          <img src={logo} alt = "logo" />
<div className='block'>
 <h1>Instafarm</h1>
<p>farms.</p>
</div>

</div>  
    <form action="">
        <select name="" id="">
            <option value="All categories">All categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
        </select>
         <input type="search" placeholder='Search for items'/>
    </form>
           <i><Faheart /></i>
        </nav>
    </div>
  )
}

export default HeaderContent;