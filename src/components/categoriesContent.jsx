import React,{useState} from 'react'
import Categories from './categories';
import reddish from '../images/reddish.png'
import potatoes from '../images/potatoes.png'
// import carrots from '../images/carrots.png'

import cabbage from '../images/cabbage.png'
import beans from '../images/beans.png'
import tomatoes from '../images/tomatoes.png'

function CategoriesContent() {
 

  const featured = [{
    src: reddish,
    type:"vegetables",
    name:"Reddish 500g",
    owner:"Mr.food",
    dollars:"$2",
    amount:"$3.99"
  },{
  src: potatoes,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  },{
  src: tomatoes,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  
},{
  src: cabbage,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  },{
  src: beans,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  
},{
  src: tomatoes ,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  
}
]
  return (
    <div>
      <Categories featured ={featured} 

         
      />
    </div>
  )
}

export default CategoriesContent;