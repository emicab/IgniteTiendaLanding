import React from 'react'
import { Button, StyledCard } from '../Styles/styles'

const Card = ({nameItem, price, size}) => {
  return (
    <StyledCard className='cont-Card'>
        <div className="img">IGN🔥</div>
        <div className="title-price">
            <h2>{nameItem}</h2>
            <span>{price}</span>
        </div>
        <div className="card-details">
            <span>Algodon</span>
            <span>Talle {size}</span>
        </div>
        <div className="cont-btn">
            <Button backgroundcolor='#ff8800'>Personalizar</Button>
            <Button backgroundcolor='#38b52f'>Lo quiero</Button>
        </div>
    </StyledCard>
  )
}

export default Card