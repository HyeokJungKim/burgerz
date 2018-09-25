import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  const {burgers} = props
  //destructuring

  return (
    <div className="BurgerList">
      { burgers.map(burgerObj => <BurgerItem burger={burgerObj} showBurger={props.showBurger}/>) }
    </div>
  )
}

export default BurgerList
