import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
//import React, { useState } from 'react';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Laura', age: 25 },
      { name: 'Daniel', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Laura M.', age: 25 },
        { name: 'Daniel F.', age: 25 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Laura M.', age: 25 },
        { name: 'Daniel F.', age: 25 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hey there</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Maximilian')}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          changed={this.nameChangedHandler} />
          {/* Using arrow functions in click handler could be inneficient! */}
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Max!')} />
        <Person 
          name={this.state.persons[2].name}
           age={this.state.persons[2].age}>
           Mi hobbies are: Coding
        </Person>
      </div>
    );
  }
}

export default App;

// const app = props => {
//   const [ personsState, setPersonsState ] = useState(
//     {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Laura', age: 25 },
//         { name: 'Daniel', age: 25 }
//       ]
//     }
//   );

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Laura M.', age: 25 },
//         { name: 'Daniel F.', age: 25 }
//       ]
//     });
//   }
  
//   return (
//     <div className="App">
//       <h1>Hey there</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Mi hobbies are: Coding</Person>
//     </div>
//   );
// }

// export default app;
