import React from 'react'
import HeaderContent from './headerContent'
import WelcomePage from './welcomePage'
// import Categories from './categories'
import CategoriesContent from './categoriesContent'
import Deliveries from './deliveries'

function Combination() {
  return (
    <div>
        <HeaderContent />
        <WelcomePage />
        <CategoriesContent />
        <Deliveries />
    </div>
  )
}

export default Combination