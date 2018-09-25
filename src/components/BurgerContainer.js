import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  showSelectedBurger = () => {
    const {filterType} = this.props
    console.log(filterType, this.props);
    if(filterType === "All"){
      return this.props.burgers
    } else {
      return this.props.burgers.filter((burger) =>{
        return burger.category === filterType})
    }
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter
          filterBy={this.props.filterBy}
        />
        <BurgerList
          burgers={this.showSelectedBurger()}
          showBurger={this.props.showBurger}
        />
      </div>
    )
  }
}
