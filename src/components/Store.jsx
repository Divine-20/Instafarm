import React from 'react'
import Rectangle1 from '../images/Rectangle1.svg'
import appStore from '../images/appStore.png'
import googlePlay from '../images/googlePlay.png'
import App from '../images/App.png'
import svgexport1 from '../images/svgexport1.png'
import svgexport2 from '../images/svgexport2.png'
import svgexport3 from '../images/svgexport3.png'

function Store() {
  return (
      <div>
    <div className=" mt-24 h-[110vh] w-full" style={{backgroundImage:`url(${Rectangle1})`}}>
    <div className='h-[110vh] pb-8 w-full bg-[#C5EAD9] opacity-90'>
        <div className='flex'>
            <div className='block ml-32 mt-[20%]'>
        <div className=''>
      <h1 className='text-4xl  font-bold text-[#253D4E]'>Shop Faster with Groceyish App</h1>
      <p className='text-[#838383] pt-4'>Available on both IOS & Android</p>

      </div>
      <div className='flex mt-20'>
          <img src={appStore} alt="appstore" />
          <img src={googlePlay} alt="googlePlay" className='ml-6' />
      </div>
      </div>
      <img src={App} alt="app" className='absolute mt-12 right-0 w-[50vw]'/>
    </div>
    </div>
        </div>
        <div className='flex justify-evenly border-b-2 border-solid border-gray-200 pb-10'>
            <div className='flex mt-20 '>
                <img src={svgexport1} alt="export1" className='w-20 mr-8' />
                <div>
                    <h1 className='text-2xl text-[#253D4E]'>Best Prices & Deals</h1>
                    <p className='text-[#ADADAD]'>Don’t miss our daily amazing <br /> deals and prices</p>
                </div>
            </div>
            <div className='flex mt-20 '>
                <img src={svgexport3} alt="export1" className='w-20 mr-8' />
                <div>
                    <h1 className='text-2xl text-[#253D4E]'>Refundable </h1>
                    <p className='text-[#ADADAD]'>If your items have damage we agree <br />to refund it</p>
                </div>
            </div>
            <div className='flex mt-20 '>
                <img src={svgexport2} alt="export1" className='w-20 mr-8' />
                <div>
                    <h1 className='text-2xl text-[#253D4E]'>Free delivery</h1>
                    <p className='text-[#ADADAD]'>Do purchase over $50 and get free <br />delivery anywhere</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Store