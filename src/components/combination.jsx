import React from 'react'
import HeaderContent from './headerContent'
import WelcomePage from './welcomePage'
// import Categories from './categories'
import CategoriesContent from './categoriesContent'
import Deliveries from './deliveries'
import TopMeals from './topMeals'
import Store from './Store'
import Footer from './footer'

function Combination() {
  return (
    <div>
        <HeaderContent />
        <WelcomePage />
        <CategoriesContent />
        <Deliveries />
        <TopMeals />
        <Store />
        <Footer />
    </div>
  )
}

export default Combination