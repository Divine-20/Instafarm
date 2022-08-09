import React from 'react'
import HeaderContent from './headerContent'
import WelcomePage from './welcomePage'
// import Categories from './categories'
import CategoriesContent from './categoriesContent'
import Deliveries from './deliveries'
import TopMeals from './topMeals'
import Store from './Store'
import Footer from './footer'
import sellsContent from './sellsContent'
import SellsContent from './sellsContent'
// import Sells from './sells'

function Combination() {
  return (
    <div className='overflow-x-hidden'>
        <HeaderContent />
        <WelcomePage />
        <CategoriesContent />
        <Deliveries />
        <SellsContent />
        <TopMeals />
        <Store />
        <Footer />
    </div>
  )
}

export default Combination