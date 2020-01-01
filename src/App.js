import React, {Component} from 'react';
import MemoryGame from './Components/MemoryGame'
import Sidebar from './Components/Sidebar'

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
        sidebarOpen: false,
        type: "cats",
        level: "hard",
        game: () => <MemoryGame type={this.state.type} level={this.state.level}/>
    };
    
  }

  handleLevelChange = (event) =>{
    console.log(event.target)
    this.setState({level: event.target.value})
  }

  handleTypeChange = (event) => {
    console.log(event.target)

    this.setState({type: event.target.value})
  }

  handleResetGame = (event) => {
    this.setState({game: ()=> <MemoryGame type={this.state.type} level={this.state.level}/>})
  }

  render(){

    const MemoryGame = this.state.game;

    return (
      <div  className="container">
        <Sidebar
          handleLevelChange={this.handleLevelChange} 
          handleTypeChange={this.handleTypeChange} 
          handleResetGame={this.handleResetGame} 
          type={this.state.type} 
          level={this.state.level} 
        />
        <MemoryGame/>
      </div>
    )
  }

}

export default App;

