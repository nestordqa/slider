import React from 'react';
import '../styles/card.css';

export const Card = ({img, active}) => {
  return (
    <div className={active ? 'card' : 'inactive'}>
        <img src={img.img} alt={img.name}/>
    </div>
  )
}
