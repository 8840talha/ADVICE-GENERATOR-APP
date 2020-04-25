import React from 'react'
import './Card.css'

const Card = (props)=>{
   return(
<div className="card">
   <h1 className="heading">{props.advice}</h1>
    <button className="button" onClick={props.clickAdvices}><span>Get Daily Advices</span></button>
     </div>
   )
   
}

export default Card;