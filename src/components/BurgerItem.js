import React, { Component } from 'react';

const BurgerItem = (props) => {
  const {burger, showBurger} = props

  const hideBurgerJavascript = (event) => {
    const burgerDiv = event.target.parentNode.parentNode
    burgerDiv.remove()
  }

  return (
    <div>
      <div className="BurgerItem">
        {burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => showBurger(burger)}>Show</button>
        <button onClick={hideBurgerJavascript}>Híde Mé!</button>
      </div>
    </div>
  )
}

export default BurgerItem
