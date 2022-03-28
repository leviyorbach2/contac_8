import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { robots } from './robots';
import Scroll from './Scroll'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    //alert('constructor');
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
  .then(users =>  this.setState({robots: users})); //{});/

//  alert('DidMount');
}

onSearchChange = (event) => {
//  alert(event.target.value);
  this.setState({ searchfield: event.target.value })

//alert(event.target.value);
}

render() {
  //alert('render');
  const filteredRobots = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

})

if( this.state.robots.length === 0) {
  return <h1>Loading</h1>
} else {

  return (
    <div className='tc'>
      <h1 className='f1'>Contact List</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
 }
}
}
export default App;

/*
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    return response.json();
  })
  .then(users => {
  this.setState({robots: users})
})
//  alert('DidMount');
}
*/

/*
const { robots,seachfield } = this.state;

const filteredRobots = robots.filter(robot => {
  return robot.name.toLowerCase().includes(seachfield.toLowerCase());
})
*/


/*
      const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)

  })
*/
