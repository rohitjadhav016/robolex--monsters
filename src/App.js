import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster : [],
      searchField : ''
    }
  }
  searchFieldChange = (event) =>{    
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(()=>{
  return {searchField}
  })}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => { this.setState(() => {
      return {monster: users}
    })})
  }

  render(){
    const { monster, searchField } = this.state;
    const { searchFieldChange } = this;
    const filteredMonsters = monster.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
      <h1 className='app-title'> Monsters Robolex </h1>
      <SearchBox placeHolder = 'search monsters' className = 'search-box' onChangeHandler = {searchFieldChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
