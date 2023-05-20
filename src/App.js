import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster : [],
      searchField : ''
    }
    console.log('constructor');
  }

  searchFieldChange = (event) =>{    
  const searchField = event.target.value.toLocaleLowerCase();
  this.setState(()=>{
    return {searchField}
  })

  }


  componentDidMount(){
    console.log('componentDidMount');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json())
      .then((users) => { this.setState(() => {
        return {monster: users}
      },
      () => {
        console.log(this.state);
      }
       )})
  }

  render(){
    console.log('render');
    const { monster, searchField } = this.state;
    const { searchFieldChange } = this;
    const filteredMonsters = monster.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
        <input type='search' className='search-box' placeholder='search monsters' 
        onChange={searchFieldChange}/>
        {
          filteredMonsters.map((mon) => {
            return(
              <div key={mon.id}>
                  <h1> {mon.name} </h1>
              </div>
            )
          })
        }
      </div>
    );
  }
  
}

export default App;
