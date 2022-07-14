import React from 'react'
import Rectangle1 from '../images/Rectangle1.svg'

function Deliveries() {
  return (
    <div className='flex justify-center mt-10'>
      <div className="  h-[60vh] w-[40vw] mr-24" style={{backgroundImage:`url(${Rectangle1})`}}>
         <div className='h-[60vh] w-[40vw] bg-[#FFF5E1] opacity-70'>

         </div>
      </div>
      <div className="  h-[60vh] w-[40vw]" style={{backgroundImage:`url(${Rectangle1})`}}>
      <div className='h-[60vh] w-[40vw] bg-[#D2EFE1] opacity-70'></div>
      </div>
       <div></div> 
    </div>
  )
}

export default Deliveries;