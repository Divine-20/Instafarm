import React from 'react'
import Categories from './categories';


function CategoriesContent() {

  const featured = [{
    src: "",
    type:"vegetables",
    name:"Reddish 500g",
    owner:"Mr.food",
    dollars:"$2",
    amount:"$3.99"
  },{
  src: "",
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  },{
  src: "",
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  
},{
  src: "",
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  },{
  src: "",
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  
},{
  src: "",
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  }
]
  return (
    <div>
      <Categories featured ={featured} />
    </div>
  )
}

export default CategoriesContent;