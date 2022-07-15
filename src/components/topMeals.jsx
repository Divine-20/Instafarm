import React from 'react'
import Items from '../images/Items.png'
import Items1 from '../images/Items1.png'

function TopMeals() {
  return (
    <div>
        <div>
            <ul className='flex justify-evenly mt-20'>
                <li className='underline'>Top Farms
                <img src={Items} alt="items" className='w-[15vw] mt-12'/>
                </li>
                <li className='underline'>Top Meal Preps
                <img src={Items1} alt="items1" className='w-[15vw] mt-12' />
                </li>
                <li className='underline'>On Sale
                <img src={Items} alt="items" className='w-[15vw] mt-12' />
                </li>
                <li className='underline'>Freshly Stocked
                <img src={Items1} alt="items1" className='w-[15vw] mt-12' />
                
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TopMeals