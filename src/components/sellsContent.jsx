import React from 'react'
import Sells from './sells';

import meat from '../images/meat.png'
import flour from '../images/flour.png'
import teas from '../images/teas.png'
import  onions from '../images/onions.png'

function SellsContent() {

  const sells = [{
    src: flour,
    type:"vegetables",
    name:"Reddish 500g",
    owner:"Mr.food",
    dollars:"$2",
    amount:"$3.99"
  },{
  src: meat,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  },{
  src: teas,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  
},{
  src: onions,
  type:"vegetables",
  name:"Reddish 500g",
  owner:"Mr.food",
  dollars:"$2",
  amount:"$3.99"
  }
 
]
  return (
    <div>
      <Sells sells ={sells} />
    </div>
  )
}

export default SellsContent;