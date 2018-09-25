import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      burgers: [],
      displayedBurger: {},
      filterType: "All"
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
    .then(resp => resp.json())
    .then(burgersArr => {
      this.setState({burgers: burgersArr})
    })
  }

  showBurger = (burger) => {
    this.setState({displayedBurger: burger})
  }

  filterBy = (event) => {
    this.setState({filterType: event.target.value})
  }

  changeCategory = (burger, category) => {
    fetch(`http://localhost:3001/burgers/${burger.id}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({category: category})
    })
    .then(resp => resp.json())
    .then(burgerObj => {
      this.setState((prevState) => {
        const tempBurgers = prevState.burgers.filter((burgerFromArr) => {
          return burgerFromArr.id != burgerObj.id
        })
        tempBurgers.push(burgerObj)
        return {burgers: tempBurgers}
      })
    })
  }

  render() {
    console.log(this.state.filterType);
    return (
      <div id="App">
        <BurgerContainer
          burgers={this.state.burgers}
          showBurger={this.showBurger}
          filterBy={this.filterBy}
          filterType={this.state.filterType}
        />
        <BurgerDisplay
          displayedBurger={this.state.displayedBurger}
          changeCategory={this.changeCategory}
        />
      </div>
    );
  }
}

export default App;
