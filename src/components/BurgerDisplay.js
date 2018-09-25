import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  // const isBougie = props.displayedBurger.category === "Bougie"
  return (
    <div className="BurgerDisplay">
      <img src={props.displayedBurger.imgURL}/>
      <br/>
      <h1>{props.displayedBurger.name}</h1>
      <br/>
      <select onChange={(e) => props.changeCategory(props.displayedBurger, e.target.value)}>
       <option selected={props.displayedBurger.category === "Relatable"} value="Relatable">Relatable</option>
       <option selected={props.displayedBurger.category === "Bougie"} value="Bougie">Bougie</option>
      </select>

    </div>
  )
}

export default BurgerDisplay
