import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{

  constructor(props){
    super(props);
    this.state={
      monsters:[],
      textcontent:""
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}));
}


  render(){

    const { monsters,textcontent } = this.state;

    const filteredmonsters = monsters.filter((monster)=>
      monster.name.toLowerCase().includes(textcontent.toLowerCase())
    );
    return(

      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="monsters" handlechange={(e) => this.setState({ textcontent: e.target.value })}/>
        <CardList monsters={filteredmonsters}/>
      </div>
    )
  }
}

export default App;
